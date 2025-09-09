import { Link } from 'react-router-dom'

function NavScrollExample() {
  return (
    <>   
      <nav>
     <div className='logoHeader'><h1>GLITCH</h1></div>
        <div className="navContainer">
          <div className='navcon'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/service" className="nav-link">Service</Link>
            <Link to="/Team" className="nav-link">Team</Link>
            <Link to="/contact" className="nav-link">contact</Link>
            <div className="navbtn">
              <button>Book a meeting</button>
            </div>
          </div>
        </div>

      </nav>
    </>

  );
}

export default NavScrollExample;