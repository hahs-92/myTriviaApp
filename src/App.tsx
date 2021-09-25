import React, { useEffect, useState} from 'react'
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

import { useFetch } from './hooks/useFecth'

function App() {
  const [ start, setStart ] = useState(true)
  const [ startGame, setStartGame ] = useState(false)
  const [ gameOver, setGameOver ] = useState(false)
  const [ isLogin, setIsLogin ] = useState(false)
  const [ userName, setUserName] = useState<string | null>(null)
  const [ userAnswer, setUserAnswer ] = useState<string | null>(null)
  const [ round, setRound ] = useState(0)
  const [ correctAnswer, setCorrectAnswer] = useState<string | null>(null)
  const [ ctgNumber, setCtgNumber ] = useState('1')

  const { data } = useFetch(ctgNumber)


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

  console.log(data)

  return (
    <AppWrapper>
      <main className='Main'>
        <Card
          start={ start }
          isLogin = { isLogin }
          startGame= { startGame }
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
              render= { (answer, index) => (
                <OptionItem 
                  key={answer } 
                  index={ index } 
                  option={ answer } 
                  value={ answer}
                  cb={ handleUserAnswer }
                />
              )}
            />
          )}
        >
          {/* <CardScore /> */}
          {/* <CardGameOver /> */}
        </Card>
      </main>

      <footer className='Footer'>
        Create by HAHS
      </footer>
    </AppWrapper>
  );
}

export default App;
