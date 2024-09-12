
import { Link } from "react-router-dom";

function Home() {
    return (
     
      <div className="App">
        <header className="App-header">
         
         <h2>Welcome to my website</h2>
         
        </header>
        <div className='links'>
          <div className='linkz'>
         
        <Link to="about">About</Link>
         
        </div>

        <div className='linkz'>
         
         <Link to="contact">Contact Us</Link>
          
         </div>
           
        </div>
      </div>
     
    );
  }
  
  export default Home;
  