import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/animeleklogo.png'
import './Topbar.css'
function Topbar(props) {
    const [click,setClick]=useState(false)
    const [searchName,setSearchName]=useState("")
    const [searchCat,setSearchCat]=useState("الأنمي")
    const onClickHandler=()=>{
        setClick(!click)
    }
    const onNameChange=(e)=>{
        setSearchName(e.target.value)
       
    }
    const onSearchCatChange=(e)=>{
        setSearchCat(e.target.value)
       
    }
    const handleSubmit=(e)=>{
        if(searchName.length == 0){
            e.preventDefault()
            return
        }
        const name ={
            "name":searchName,
            "cat":searchCat   
             }
     
        props.searchCallback(name)
        
        return true
        
    }
    return (
        <div>
             <i id="nav-active-btn" className="fas fa-bars" onClick={onClickHandler}></i>               
             <ul className={click?"mobile-nav-links active" :"mobile-nav-links"}>
                        <li className="moblie-link">
                           <Link href="/"> 
                            أنمي ليك <i className="fas fa-home"/>  
                            </Link>
                        </li>
                        <li className="moblie-link">
                           <Link href="/anime"> 
                             قائمة الأنمي <i className="fas fa-play-circle"/>
                            </Link>
                        </li>
                        <li className="moblie-link">
                           <Link href="/new"> 
                            أحدث الحلقات <i className="far fa-calendar-plus"/> 
                            </Link>
                        </li>
                        <li className="moblie-link">
                           <Link href="/movies"> 
                            أفلام الأنمي <i className="fas fa-video"/> 
                            </Link>
                        </li>
                </ul>
            <div className="topbar_container">
                <div className="topbar_wrapper">
                    <div className="signIn"> 
                       <Link href="/"> تسجيل الدخول <i className="fas fa-user-circle"></i></Link>
                    </div>
                    <div className="logo">
                       <Link href="/"> <img  src= {logo} /></Link>
                    </div>
                </div>
            </div>
            <div className="navbar_container">
                <div className="navbar">
                    <form>
                   <Link type="submit" to={"/search/" + searchName}  className="button" onClick={handleSubmit} ><i className="fas fa-search"></i></Link>
                        <select value={searchCat} onChange={onSearchCatChange} >  
                            <option>الأنمي</option>
                            <option>المواسم</option>
                            <option>الأفلام</option>
                        </select>
                        <input type="search" placeholder=" أبحث في Animelek  " value={searchName} onChange={onNameChange}/>
                    </form>
                
             
                    <ul className="nav-links">
                        <li className="link">
                           <Link to="/"> 
                            أنمي ليك <i className="fas fa-home"/>  
                            </Link>
                        </li>
                        <li className="link">
                           <Link to="/anime"> 
                             قائمة الأنمي <i className="fas fa-play-circle"/>
                            </Link>
                        </li>
                        <li className="link">
                           <Link to="/new"> 
                            أحدث الحلقات <i className="far fa-calendar-plus"/> 
                            </Link>
                        </li>
                        <li className="link">
                           <Link to="/movies"> 
                            أفلام الأنمي <i className="fas fa-video"/> 
                            </Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar
