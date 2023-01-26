import './App.css';
import Main from './components/screens/Main/Main';
import Layot from './components/Layot/Layot'

function App() {
  return (
    <div className="App">
      <Layot>
        <Main/>
      </Layot>
      
    </div>
  );
}

export default App;
