import React from 'react';
//styles
import { AppWrapper } from './styles/AppStyles'
//components
import Card from './components/Card'
import CardCover from './components/CardCover'
import CardInfo from './components/CardInfo';
import CardQuestion from './components/CardQuestion';
import OptionItem from './components/OptionItem';

function App() {
  return (
    <AppWrapper>
      {/* Body */}
      <main className='Main'>
        <Card >
          {/* <CardCover /> */}
          {/* <CardInfo /> */}
          <CardQuestion
            title='Cual es la capital de  Estados Unidos de America?'
            questions={['1','2','3','4']}
            render= { (answer, index) => (
              <OptionItem key={index} index={ index } option='COLOMBIA' />
            )}
          />
        </Card>
      </main>


      {/* Footer */}
      <footer className='Footer'>
        Create by HAHS
      </footer>
    </AppWrapper>
  );
}

export default App;
