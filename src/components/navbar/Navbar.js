import'./navbar.css';

function Navbar() {
  return (
    <div className='nav-container'>
      <nav className="navHead">
        <h1 className='heading'>Pizza Wizza</h1>
      </nav>
      <div className='action'>
        <nav className='log'>Log In</nav>
        <nav className='sign'>Sign Up</nav>
      </div>
    </div>
  );
}

export default Navbar;