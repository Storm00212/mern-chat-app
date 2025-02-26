import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className = "h-full w-full bg-red-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                <span className='text-blue-500'>ChatApp</span>
            </h1>
            <form>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>                                                        
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
                <div className='flex justify-between items-center'>
                    
                    <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                    {"Don't have an account? Sign up"}
                    </a>
                   </div> 
                <button className='btn btn-primary w-full mt-4'>Login</button>
            </form>
        </div>
     
    </div>
  )
}

export default Login;






/** 
 * starter code for this file.
const Login = () => {
    return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className = "h-full w-full bg-red-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
              <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                  <span className='text-blue-500'>ChatApp</span>
              </h1>
              <form>
                  <div>
                      <label className="label p-2">
                          <span className='text-base label-text'>Username</span>
                      </label>
                      <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>                                                        
                  </div>
                  <div>
                      <label className="label p-2">
                          <span className='text-base label-text'>Password</span>
                      </label>
                      <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                  </div>
                  <div className='flex justify-between items-center'>
                      
                      <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                      {"Don't have an account? Sign up"}
                      </a>
                     </div> 
                  <button className='btn btn-primary w-full mt-4'>Login</button>
              </form>
          </div>
       
      </div>
    )
  }
  
  export default Login;
  **/
