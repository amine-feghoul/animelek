
import './App.css';
import {useState} from 'react'
import Topbar from './component/Topbar';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import Home from './component/pages/Home';
import NewEps from './component/pages/NewEps';
import Search from './component/pages/Search';
import Watch from './component/pages/Watch';
import Animes from './component/pages/Animes';
function App() {
  const [searchData,setSearchData] = useState([])
  const handelSearch=(data)=>{
    setSearchData(data)
  }
  const [epData,setEpData] = useState([])
  const handelEpData=(data)=>{
    setEpData(data)

  }
  return (
    <div className="App">
    
      <Router>
      <Topbar searchCallback={handelSearch}/>
      <Switch>
        <Route path='/' exact component={()=><Home epCallback={handelEpData}/>} />  
        <Route path='/new/' component={()=><NewEps epCallback={handelEpData}/>}/>         
        <Route path='/search/:name' component= {()=><Search data={searchData}/>} /> 
        <Route path='/watch/:id' exact  component= {()=><Watch data={epData}/>} /> 
        <Route path='/anime' component={()=><Animes/>} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
