import React,{Children, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/animeleklogo.png'
import './Topbar.css'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import { Formik } from 'formik'
import {store,auth} from "../firebase/db"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection,addDoc, getDoc,query ,where, getDocs} from 'firebase/firestore'

const Signup=(props)=>{
    const style = {
        loggingContainer :{
            height:"80%",
            maxWidth:"max-content",
            minWidth:"550px",
            backgroundColor:"#262f38",
            borderRadius:"10px",
            zIndex:999,
            boxSizing:"border-box",
            overflow:"hidden",
            padding: "20px",
        },
        form:{
            flexDirection:"column",
            width:"100%",
            boxSizing:"border-box"

        },
        input:{
            width:"100%",
            height:"50px",
            flexBasis:"auto",
            border: "1px solid #eee",
            margin: "5px"
        },
        span:
        {
            color:"white",
            fontSize:"20px"
        }
        }
    const dispatch = useDispatch()
    const values ={
        email:"",
        password:"",
        confirmPassword:"",
    }
    return(
            
        <Modal closeCallback={()=>{
            dispatch({type:"UPDATE_SETTINGS",payload:{signup:false}})
        }}>
            <div style={style.loggingContainer}>
                <Formik
                initialValues = {values}
                onSubmit={(values)=>
                {
                      createUserWithEmailAndPassword(auth,values.email,values.password).then(
                        (user)=>
                        {
                            dispatch({type:"UPDATE_SETTINGS",payload:{user:user._tokenResponse}})
                            if(createProfile({...user.user,username:values.username}))
                            {
                                alert("user created")
                            }
                            else{
                                alert("user couldn't be created")
                            }
                        }

                      ).catch((error)=>{alert(error)})
                }}>
                    {
                        (
                            {
                                values,
                                handleChange,
                                handleSubmit
                                
                            }
                        )=>(
                            <form onSubmit={handleSubmit} style={{flexDirection:"column"}}>                                    
                                <span style={style.span}>username: </span><input  onChange={handleChange} name='username' style={style.input} />
                                
                                <span style={style.span}>email: </span><input type='email' onChange={handleChange} name='email' style={style.input} />
                                <span style={style.span}>password: </span><input type='password' name='password' onChange={handleChange} style={style.input}/>
                                <span style={style.span}>confirm password: </span><input type="password" name='confirmPassword' onChange={handleChange} style={style.input}/>
                                <span> you already have an account <span><strong onClick={()=>{dispatch({type:"UPDATE_SETTINGS",payload:{loggingIn:true,signup:false}})}}>signin</strong></span></span>
                                <button type='submit'>sign up</button>
                            </form>
                        )
                
                    }
                </Formik>
            </div>
        </Modal>
    )
}

const SignIn=(props)=>{
    const dispatch = useDispatch()
    const profiles = collection(store,"profiles")
    const style = {
        loggingContainer :{
            height:"80%",
            maxWidth:"max-content",
            minWidth:"550px",
            backgroundColor:"#262f38",
            borderRadius:"10px",
            zIndex:999,
            boxSizing:"border-box",
            overflow:"hidden",
            padding: "20px",
        },
        form:{
            flexDirection:"column",
            width:"100%",
            boxSizing:"border-box"

        },
        input:{
            width:"100%",
            height:"50px",
            flexBasis:"auto",
            border: "1px solid #eee",
            margin: "5px"
        },
        span:
        {
            color:"white",
            fontSize:"20px"
        }
        }
        const user = {

        }
    return(
        <Modal closeCallback={()=>{
                dispatch({type:"UPDATE_SETTINGS",payload:{loggingIn:false}})
            }}>
                <div style={style.loggingContainer}>
                    <Formik
                    initialValues = {{}}
                    onSubmit={(values,{setSubmitting})=>
                    {
                        signInWithEmailAndPassword(auth, values.email, values.password)
                        .then(
                            (user)=>
                            {
                                console.log(user)
                                var account = user._tokenResponse
                                console.log("user is id"+ user.user.uid)
                                const q =query(profiles,where("uid","==",account.localId))
                                getDocs(q).then((res)=>{
                                    // console.log(res[0].data())
                                    res.forEach(element => {
                                            console.log(element.data())
                                            account = {...account,...element.data()}
                                    });
                                    dispatch({type:"UPDATE_SETTINGS",payload:{user:account,loggingIn:false}})
                                }).catch((error)=>{console.log(error)})
                            }
                        )
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(error)
                        });


                          
                    }}>
                        {
                            (
                                {
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting
                                }
                            )=>(
                                <form onSubmit={handleSubmit} style={{flexDirection:"column"}}>                                    
                                    <span style={style.span}>email: </span><input type='email' onChange={handleChange} name='email' style={style.input} />
                                    <span style={style.span}>password: </span><input type='password' name='password' onChange={handleChange} style={style.input}/>
                                    <button type='submit' >sign in</button>
                                </form>
                            )
                    
                        }
                    </Formik>
                </div>
            </Modal>
    )
}

const Login = (props)=>
{
    const signup = useSelector((state)=>state.mainSettings.signup)
    const loggingIn = useSelector((state)=>state.mainSettings.loggingIn)


   
    
    
    if(signup)
    {
      return <Signup/>
    }
    else if(loggingIn)
    {
        return(
            
            <SignIn/>
            )
    }
    else{
        return(<></>)

    }
        
}

const createProfile = (user)=>
{
    const profiles= collection(store,"profiles")

    return addDoc(profiles,{name:"",pic:"",uid:user?.uid,username:user.username}).then((result)=>true).catch((error)=>false)
}

function Topbar(props) {
    
    const style={

    }
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
    const dispatch =  useDispatch()
    const user =useSelector((state)=>state.mainSettings.user)
    return (
        <div>
            <Login/>
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
                    {
                        user?<div className='user-info'> 
                            <i className='fas fa-user'></i>
                            <p>
                            {user.username}
                                </p> 
                                <i class="fa-solid fa-right-from-bracket" onClick={()=>{dispatch({type:"UPDATE_SETTINGS",payload:{user:null}})}}></i>

                        </div>:
                        <div className="signIn" onClick={()=>{
                            dispatch({type:"UPDATE_SETTINGS",payload:{signup: true}})
                        }}> 
                       <p > تسجيل الدخول <i className="fas fa-user-circle"></i></p>
                    </div>
                    }
                    <div className="logo">
                       <Link to="/"> <img  src= {logo} /></Link>
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
