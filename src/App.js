import logo from './logo.svg';
import './App.css';
import Intercom from '@intercom/messenger-js-sdk';

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
      <header className="App-header">
       
       <h2>Welcome to my website</h2>
       
      </header>
      <div className='links'>
        <div className='linkz'>
       
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
          
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
          
        </a>
      </div>
         
      </div>
    </div>
  );
}

export default App;
