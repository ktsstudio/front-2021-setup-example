import { Button } from 'antd';

import Main from 'pages/Main';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Button type="primary">Click me!</Button>
      <Main/>
      </header>
    </div>
  );
}

export default App;
