import React from 'react'
import GenderCheckbox from './Gender Checkbox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className= "h-full w-full bg-red-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
       <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Signup <span className='text-blue-500'>ChatApp</span>
       </h1>


         <form>
         <div>
         <label className="label p-2">
            <span className='text-base label-text'>Full Name</span>
         </label>
         <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'/>
         </div>


            <div>
            <label className="label p-2">
            <span className='text-base label-text'>Username</span>
         </label>
         <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10'/>
            </div>

            <div>
            <label className="label p-2"></label>
            <span className='text-base label-text'>Password</span>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
            </div>

            <div>
            <label className="label p-2"></label>
            <span className='text-base label-text'> Confirm Password</span>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
            </div>

         <GenderCheckbox />            
         <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href="">
            Already have an account?
            </a>
            <div>
            <button className='btn btn-primary w-full mt-4'>Sign Up</button>
            </div>
         </form>
        </div>
     
    </div>
  )
}

export default SignUp;


/** 
const SignUp = () => {
    return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className= "h-full w-full bg-red-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
         <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Signup <span className='text-blue-500'>ChatApp</span>
         </h1>
  
  
           <form>
           <div>
           <label className="label p-2">
              <span className='text-base label-text'>Full Name</span>
           </label>
           <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'/>
           </div>
  
  
              <div>
              <label className="label p-2">
              <span className='text-base label-text'>Username</span>
           </label>
           <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10'/>
              </div>
  
              <div>
              <label className="label p-2"></label>
              <span className='text-base label-text'>Password</span>
              <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
              </div>
  
              <div>
              <label className="label p-2"></label>
              <span className='text-base label-text'> Confirm Password</span>
              <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
              </div>
  
           <GenderCheckbox />            
           <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href="">
              Already have an account?
              </a>
              <div>
              <button className='btn btn-primary w-full mt-4'>Sign Up</button>
              </div>
           </form>
          </div>
       
      </div>
    )
  }
  
  export default SignUp;
  */
// Compare this snippet from frontend/vite-project/src/pages/home/signup/Gender%20Checkbox.jsx:
