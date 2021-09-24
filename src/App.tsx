import React from 'react';
//styles
import { AppWrapper } from './styles/AppStyles'
//components
import Card from './components/Card'
import CardCover from './components/CardCover'
import CardInfo from './components/CardInfo';

function App() {
  return (
    <AppWrapper>
      {/* Body */}
      <main className='Main'>
        <Card >
          <CardCover />
          {/* <CardInfo /> */}
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
