import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import './styles/global.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} />
      {/* Add your other sections here: Hero, Experience, Projects, etc. */}
    </>
  );
}

export default App;
