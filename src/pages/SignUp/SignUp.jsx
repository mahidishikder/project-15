import { useContext } from 'react'
import createImage from '../../assets/others/authentication2.png'
import { authContext } from '../../provider/AuthPorvider'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function SignUp() {
  const { createUser,updateUserProfile } = useContext(authContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => { console.log(data) 
   createUser(data.email,data.password)
   .then(result => {
    console.log(result.user)
    updateUserProfile(data.name,data.photoURL)
    .then(() => {
      console.log(`user profile update`)
      Swal.fire({
        title: "successfull!",
        text: "Your file has been success.",
        icon: "success"
      });
    })
   })
   .catch(errors => console.log(errors.message))
  }
  console.log(watch("example"))

  // 
  // const signInHandle = e => {
  //   e.preventDefault()
  //   const email = e.target.email.value
  //   const password = e.target.password.value
  //   createUser(email, password)
  // }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
              {errors.name && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input  {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
              {errors.photoURL && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
              {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password", {
                  minLength: 6,
                  maxLength: 20,
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
                })}
                className="input input-bordered"
              />

              {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 required</span>}
              {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must be one number one uppercase one lowercase one spacial number required</span>}
              {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be 20 no over required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <button className='btn btn-primary'>Sign Up</button>
            </div>
             <p>already registered <Link className='text-blue-500 underline ' to={`/Login`}>login</Link></p>
          </form>
        </div>

        <div className="text-center lg:text-left">
          <img src={createImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp