import './App.css';
import ReTimer from './Components/ReTimer';
import TimerBtn from './Components/TimerBtn';
function App() {
  return (
    <div className="App">
      <div>
        <h2>Task1</h2>
        <ReTimer/>
      </div>
     <div>
      <h2> Task2</h2>
      <TimerBtn/>
     </div>
    </div>
  );
}

export default App;
