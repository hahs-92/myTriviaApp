import React from 'react';
//styles
import { AppWrapper } from './styles/AppStyles'
//components
import Card from './components/Card'
import CoverCard from './components/CoverCard'

function App() {
  return (
    <AppWrapper>
      {/* Body */}
      <main className='Main'>
        <Card >
          <CoverCard />
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
