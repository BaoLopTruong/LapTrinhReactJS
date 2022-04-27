
import './App.css';
import useTime from './components/HookClock';

function App() {
  const [year, month, date, hours, mintues, seconds] = useTime();
  return (
    <div className="App">
    <h1>{year} - {month} - {date}  {hours}:{mintues}:{seconds}</h1>
    </div>
  );
}

export default App;
