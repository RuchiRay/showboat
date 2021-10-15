import { Login } from './components/Login';
import { MyTeam } from './components/MyTeam';
import { Rules } from './components/Rules';
import { Scoreboard } from './components/Scoreboard';
import { Welcome } from './components/Welcome';
import { Welcome1 } from './components/Welcome1';
import './style/one.css'
function App() {
  return (
    <div className="App">
      <Welcome/>
      <Login/>
      <Welcome1/>
      <MyTeam/>
      <Scoreboard/>
      <Rules/>
    </div>
  );
}

export default App;
