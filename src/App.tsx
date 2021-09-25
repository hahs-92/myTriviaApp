import React, { useState } from 'react'
//styles
import { AppWrapper } from './styles/AppStyles'
//components
import Card from './components/Card'
import CardCover from './components/CardCover'
import CardRegister from './components/CardRegister';
import CardQuestion from './components/CardQuestion';
import OptionItem from './components/OptionItem';
import CardScore from './components/CardScore';
import CardGameOver from './components/CardGameOver';
import Button from './components/Button';
//customHooks
import { useGetQuestions } from './hooks/useGetQuestions'


function App() { 
  const [ start, setStart ] = useState(true)
  const [ startGame, setStartGame ] = useState(false)
  const [ gameOver, setGameOver ] = useState(false)
  const [ isLogin, setIsLogin ] = useState(false)
  const [ userName, setUserName] = useState<string | null>(null)
  const [ userAnswer, setUserAnswer ] = useState<string | null>(null)
  const [ round, setRound ] = useState(1)
  const { data } = useGetQuestions(round.toString(), 'categories')
 
  console.log(data.correct_answer)

  const onStartGame = () => {
    setIsLogin(true)
    setStartGame(true)
  }

  const onHandleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const user = e.target.value
    setUserName(user)
  }

  const handleUserAnswer = (e:React.MouseEvent<HTMLLIElement> ) => {
    const answerUser = e.currentTarget.getAttribute('value') as string
    setUserAnswer(answerUser)
  }

  const checkAnswer = () => {
    if(userAnswer !== data.correct_answer ) return setGameOver(true);
    if(round === 5) {
      setStartGame(false)
      setGameOver(true)
    } else {
      setRound(round + 1)
      setUserAnswer(null)
    }
  }

  const reBoot = () => {
    setStart(true)
    setGameOver(false)
    setStartGame(false)
    setIsLogin(false)
    setUserAnswer(null)
    setRound(1)
  }

  return (
    <AppWrapper>
      <main className='Main'>
        <Card
          start={ start }
          isLogin = { isLogin }
          startGame= { startGame }
          gameOver= { gameOver } 
          onStart= { () => (
            <CardCover >
              <Button title='Go¡' cb={ () => setStart(false)} isActive={true } />
            </CardCover >
          )}
          onRegister= { () =>(
            <CardRegister inputValue={userName} cb={ onHandleLogin }>
              <Button title='Start' cb={ onStartGame } isActive={!!userName }/>
            </CardRegister>
          )}
          onQuestion={ () => (
            <CardQuestion 
              question={ data.question as string }
              answers={data.answers as string[]  }
              userAnswer={ userAnswer }
              checkAnswer={ checkAnswer }
              render= { (answer, index) => (
                <OptionItem 
                  key={answer } 
                  index={ index } 
                  option={ answer } 
                  value={ answer}
                  userAnswer= { userAnswer }
                  correct_answer={ data.correct_answer as string }
                  cb={ handleUserAnswer }
                />
              )}
            />
          )}
          onGameOver= { () => (
            <CardGameOver>
              <Button title='Try Again¡' isActive={true} cb={ reBoot }/>
            </CardGameOver>
          )}
          onScore= { () => <CardScore cb={reBoot } round={ round} />}
        >
        </Card>
      </main>

      <footer className='Footer'>
        Create by HAHS
      </footer>
    </AppWrapper>
  );
}

export default App;
