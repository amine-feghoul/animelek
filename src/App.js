
import './App.css';
import {useState} from 'react'
import Topbar from './component/Topbar';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import NewEps from './pages/NewEps';
import Search from './pages/Search';
import Watch from './pages/Watch';
import Animes from './pages/Animes';
import {db} from './firebase/db'
import AnimeDetail from './pages/AnimeDetail';
import Admin from './pages/Admin';
import { Provider } from 'react-redux';
import store from './store/store';
import Auth from './pages/Auth';

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
    <Provider store={store}>
      <div className="App">   
          <Router>            
            <Topbar searchCallback={handelSearch}/>
            <Switch>
              <Route path='/' exact component={()=><Home epCallback={handelEpData}/>} />  
              <Route path='/new/' component={()=><NewEps epCallback={handelEpData}/>}/>         
              <Route path='/search/:name' component= {()=><Search data={searchData}/>} /> 
              <Route path='/watch/:id' exact  component= {()=><Watch data={epData}/>} /> 
              <Route path='/anime' exact component={()=><Animes/>} />
              <Route path='/anime/:id'  component={()=><AnimeDetail/>} />
              <Route path='/admin'  component={()=><Admin/>} />
              <Route path='/auth'  component={()=><Auth/>} />

            </Switch>
          </Router>
      </div>
    </Provider>

  );
}

export default App;
