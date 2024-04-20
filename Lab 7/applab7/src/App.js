
import './App.css';
import Square from './Components/Square'
import OnlyEven from './Components/OnlyEven'
import Temperature from './Components/Temperature'
import BackButton from './Components/BackButton'
function App() {
  return (
    <div className="App">
    
        <h1>Лаба 7</h1>
        <div>
          <h2>Task1</h2>      
            <Square n={3}/>
        </div>
        <div>
          <h2>Task2</h2>      
          <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
        </div>
        <div>
          <h2>Task3</h2>      
          <Temperature t={451} />
          <Temperature t={-13} />
        </div>
        <div>
          <h2>Task4</h2>      
          <BackButton/>
       
        </div>
     
    </div>
  );
}

export default App;
