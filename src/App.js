import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Cover from './components/Cover';
import NavBar from './components/NavBar';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = ()=> {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[scrollHeight])

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
    </div>
  );
}

export default App;
