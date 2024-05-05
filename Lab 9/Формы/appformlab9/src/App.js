
import './App.css';
import Select from './Components/Task1';
import Cal from './Components/Task2';
import NumberBaseConverter from './Components/Task3';
import SecLive from './Components/Task4';
import NumberList from  './Components/Task5';
function App() {
  return (
    <div className="App">
       <div>
      <h2>Task1</h2>
     <Select/>
</div>
     <div>
      <h2>Task2</h2>
      <Cal/>
     </div>
     <div>
      <h2>Task3</h2>
      <NumberBaseConverter/>
     </div>
     <div>
      <h2>Task4</h2>
      <SecLive/>
     </div>
     <div>
      <h2>Task5</h2>
      <NumberList/>
     </div>
    </div>

  );
}

export default App;
