import logo from './logo.svg';
import './App.scss';
import RidvanImg from './ridvanfoto.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import FloatingHeart from './FloatingHeart';
function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
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
      <div className="youtube-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=EunKkAJlB5s"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
      <img src={RidvanImg}></img>
      <p className='yazi1 hidden'>Nice beraber aylarımız, yıllarımız olması dileğiyle🙏</p>
      <p className='yazi2 hidden'>Ne bir eksik, ne bir fazla Canımmsın Sen</p>
      {hearts.map(heart => (
        <FloatingHeart key={heart.id} top={0} left={heart.left} />
      ))}
    </div>
  );
}

export default App;
