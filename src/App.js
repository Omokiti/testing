import { Route,Routes } from 'react-router-dom';
import './App.css';
import Intercom from '@intercom/messenger-js-sdk';
import Home from './Home'
import About from './About'
Intercom({
  app_id: 'befoprcf',
  // user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
  // name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
  // email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
  // created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
});

function App() {
  return (
   
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
     
    </div>
   
  );
}

export default App;
