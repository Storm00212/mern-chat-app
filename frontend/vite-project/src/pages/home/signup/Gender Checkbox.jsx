import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
            <span className='label-text'>Male</span>
        </label>
        <input type='checkbox' className='checkbox border-slate-900'/>
      </div>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
            <span className='label-text'>Female</span>
            </label>
            <input type='checkbox' className='checkbox border-slate-900'/>
      </div>
    </div>
  )
}

export default GenderCheckbox;
// Compare this snippet from frontend/vite-project/src/pages/home/signup/signup.jsx:
/**
 * starter code for this file.
const GenderCheckbox = () => {
    return (
      <div className='flex'>
        <div className='form-control'>
          <label className={'label gap-2 cursor-pointer'}>
              <span className='label-text'>Male</span>
          </label>
          <input type='checkbox' className='checkbox border-slate-900'/>
        </div>
        <div className='form-control'>
          <label className={'label gap-2 cursor-pointer'}>
              <span className='label-text'>Female</span>
              </label>
              <input type='checkbox' className='checkbox border-slate-900'/>
        </div>
      </div>
    )
  }
  
  export default GenderCheckbox;
  */
// Compare this snippet from frontend/vite-project/src/pages/home/home.jsx: