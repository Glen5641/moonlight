import BodyContainer from './Components/BodyContainer';
import MetaTags from 'react-meta-tags';
import './App.css';


function App() {



  return (
      <div className="App">
        <MetaTags>
          <title>Moonlight Machine</title>
        </MetaTags>
        <BodyContainer />
      </div>
  );
}

export default App;
