import { useState } from 'react';
import MainImage from './assets/textile1.jpeg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h3>Crafting Comfort, Weaving Innovation.</h3>
        <button>Customize Yours</button>
      </div>
      <img className={styles.mainImage} src={MainImage} />
    </>
  );
}

export default App;
