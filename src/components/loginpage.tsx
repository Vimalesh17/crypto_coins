import {useState,useEffect} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    useEffect(()=>{
        let loginData = localStorage.getItem("user")
        if(loginData){
            navigate("/table")
        } else{
            navigate("/")
        }

    },[]);
    const navigate = useNavigate();
  const [input,setInput]=useState({
    username:"",
    password:""
  });
  const inputHandler = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }
  const login = async () => {
   let res:any =  await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
    let data = await res.json()
    console.log(data)
    
    if(data.token){
      localStorage.setItem('user',data)
      console.log('logged in')
      navigate("/table");
    }else{
      console.log('user not there')
    }
      
  };

  return (
    <div className="main_container">
      <form>
        <h4 className="title_text">LogIn</h4>
        <label>
          Enter Your Name
          <input type="text" placeholder="User Name" name="username"  onChange={(e)=>inputHandler(e)}  className="mb-3" />
        </label>
        <div>
          <label>
            Enter Your Password
            <input type="password" placeholder="User Password" name="password" onChange={(e)=>inputHandler(e)} className="mb-3"/>
          </label>
        </div>
        {/* <input type="submit" /> */}
      </form>
      <div>
        <button onClick={() => login()} className="primary">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;