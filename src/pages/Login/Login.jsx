import { useContext, useEffect, useRef, useState } from "react";
import LoginPic from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { authContext } from "../../provider/AuthPorvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toggle } from './../../../node_modules/sweetalert2/src/utils/dom/domUtils';

function Login() {
  const naviget = useNavigate()
  const location = useLocation()
  const {signInUser} = useContext(authContext)
  const from = location.state?.from?.pathname || '/'

  const loginHandle = (e) => {
   e.preventDefault()
   const email = e.target.email.value
   const password = e.target.password.value
   signInUser(email,password)
   .then(result => {
    naviget(from,{replace:true})
    Swal.fire({
      title: "login successfull!",
      text: "Your file has been success.",
      icon: "success"
    });
    console.log(result.user)
   })
  }
  const captchaRef = useRef(null)
  const [disabled,setDisabled] = useState(true)
  const handleMatchCaptcha = (e) => {
    e.preventDefault()
    const user_Value = captchaRef.current.value

    if(validateCaptcha(user_Value)){
      setDisabled(false)
    }
    else{
    setDisabled(true)
    }
  }
  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[])
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={loginHandle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={captchaRef} type="text" name="captcha" placeholder="type the text above" className="input input-bordered" required />
          <button onClick={handleMatchCaptcha} className="btn btn-xs mt-3">Match</button>
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} type="submit" className="btn btn-primary" />
          
        </div>
        <p>New Here Create an account <Link to={`/signUp`} className="text-blue-500 cursor-pointer underline">Register</Link></p>
      </form>
    </div>

    <div className="text-center lg:text-left">
     <img src={LoginPic} alt="" />
    </div>
  </div>
</div>
  )
}

export default Login