import './App.css';
import TopBanner from './components/TopBanner'
import { Routes, Route} from "react-router-dom"
import SearchManager from './components/SearchManager';


function App() {
  return (
    <div className="App">
      <TopBanner/>
      <SearchManager/>
      <Routes>
        <Route path='/' element = {<SearchManager/>}/>
      </Routes>
    </div>
  );
}

export default App;
