import './App.scss';
import RidvanImg from './ridvanfoto.jpg';
import { useEffect, useState } from 'react';
import FloatingHeart from './FloatingHeart';
function App() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.yazi1').classList.toggle('hidden');
      document.querySelector('.yazi2').classList.toggle('hidden');
    }, 2000);
  })

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHeart = () => {
      const screenWidth = window.innerWidth;

      const randomLeft = Math.floor(Math.random() * (screenWidth - 50)); // Random left position
      setHearts(prevHearts => [
        ...prevHearts,
        { id: Date.now(), left: randomLeft } // Use a unique ID based on time
      ]);
    };

    // Generate a heart every second
    const interval = setInterval(generateHeart, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      
      <img alt='ridvan' src={RidvanImg}></img>
      <p className='yazi1 hidden'>Nice beraber aylarımız, yıllarımız olması dileğiyle</p>
      <p className='yazi2 hidden'>Ne bir eksik, ne bir fazla Canımmsın Sen</p>
      {hearts.map(heart => (
        <FloatingHeart key={heart.id} top={0} left={heart.left} />
      ))}
    </div>
  );
}

export default App;
