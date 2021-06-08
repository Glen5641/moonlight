import BodyContainer from './Components/BodyContainer';
import MetaTags from 'react-meta-tags';
import './App.css';

function App() {
  return (
    <div className="App">
      <MetaTags>
        <title>Moonlight Machine</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </MetaTags>
      <BodyContainer />
    </div>
  );
}

export default App;
