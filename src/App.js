import './App.css';
import TopBanner from './components/TopBanner'
import { Routes, Route} from "react-router-dom"
import SearchManager from './components/SearchManager';
import TopicPage from './components/TopicPage';
import { useState } from "react"


function App() {

  const[URLQuery, setURL] = useState('https://heathers-news.herokuapp.com/api/articles')

  return (
    <div className="App">
      <TopBanner/>
      <Routes>
        <Route path='/' element = {<SearchManager setURL={setURL} URLQuery={URLQuery}/>}/>
        <Route path='/articles/:slug' element={<TopicPage setURL={setURL} URLQuery={URLQuery}/>}/>
      </Routes>
    </div>
  );
}

export default App;
