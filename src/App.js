import Header from './components/header';
import './App.css';
import SankeyChart from './components/chart/SankeyChart';


function App() {
  return (
    <div className="app">
      <Header />
      <SankeyChart />
    </div>
  );
}

export default App;
