import React, { useState } from 'react'
import GenderCheckbox from './Gender Checkbox';
import { Link } from 'react-router';
import useSignup from '../../../hooks/useSignup';

const SignUp = () => {
   const[inputs, setInputs] = useState({
      fullName: '',
      userName: '',
      password:'',
      confirmPassword:'',
      gender:'',
         });
         const{loading,signup} = useSignup()
         const handleCheckboxChange = (gender) =>{
            setInputs({...inputs, gender})
         };
      
         
         const handleSubmit =  async (e) => {
            e.preventDefault();
            await signup(inputs);
         }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className= "h-full w-full bg-red-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
       <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Signup <span className='text-blue-500'>ChatApp</span>
       </h1>


         <form onSubmit={handleSubmit}>
         <div>
         <label className="label p-2">
            <span className='text-base label-text'>Full Name</span>
         </label>
         <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'
         value={inputs.fullName}
         onChange= {(e) => setInputs({...inputs,fullName: e.target.value })}
         />
         </div>


            <div>
            <label className="label p-2">
            <span className='text-base label-text'>Username</span>
         </label>
         <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10'
         value={inputs.userName}
         onChange={(e) => setInputs({...inputs, userName: e.target.value})}
         />
            </div>

            <div>
            <label className="label p-2"></label>
            <span className='text-base label-text'>Password</span>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
            </div>

            <div>
            <label className="label p-2"></label>
            <span className='text-base label-text'> Confirm Password</span>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
            </div>

         <GenderCheckbox onCheckboxChange= {handleCheckboxChange} selectedGender={inputs.gender} />            
         <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href="">
            Already have an account?
            </Link>
            <div>
            <button className='btn btn-primary w-full mt-4'
            disabled={loading}>
               {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
            </div>
         </form>
        </div>
     
    </div>
  )
}

export default SignUp;


/** 
 * starter code for this file.
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
