import SliderContainer from './SliderContainer';
import './App.css';
import logo from './Pictures/IMG_0514.png';

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} />
      <SliderContainer />
    </div>
  );
}

export default App;
