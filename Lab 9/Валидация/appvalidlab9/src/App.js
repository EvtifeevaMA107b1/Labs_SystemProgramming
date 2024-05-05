import './App.css';
import RegistrationForm from './Components/Task1';
import ProfileChange from './Components/Task2';

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: 'left', marginLeft:'20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2>Task1</h2>
          <RegistrationForm />
        </div>
        <div>
          <h2>Task2</h2>
          <ProfileChange />
        </div>
      </div>
    </div>
  );
}

export default App;