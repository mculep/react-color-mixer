import './App.css';
import RgbSlider from './RgbSlider'
import { useState } from 'react'

function App() {
  const [red, setRed] = useState(255)
  const [green, setGreen] = useState(255)
  const [blue, setBlue] = useState(255)

  const applyStyle = {
    background: `rgb(${red}, ${green}, ${blue})`
  };

  return (
    <div className="rgb" style={applyStyle}>

      <RgbSlider
        label="r" color={red} setColor={setRed}
      />

      <RgbSlider
        label="g" color={green} setColor={setGreen}
      />

      <RgbSlider
        label="b" color={blue} setColor={setBlue}
      />

    </div>
  );
}

export default App;
