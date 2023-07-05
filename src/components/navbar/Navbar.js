import'./navbar.css';

function Navbar() {
  return (
    <div className='container'>
      <nav className="navHead">
        <h1 className='heading'>Pizza Wizza</h1>
        <h4> Home</h4>
        <h4>Services</h4>
        <h4>About</h4>
      </nav>
      <div className='action'>
        <nav className='log'>Log In</nav>
        <nav className='sign'>Sign Up</nav>
      </div>
    </div>
  );
}

export default Navbar;