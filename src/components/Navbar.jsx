function Navbar({ toggleTheme }) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <h2>Shiv's Portfolio</h2>
        <div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <a href="/resume.pdf" download style={{ marginLeft: '1rem' }}>
            Download Resume
          </a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  