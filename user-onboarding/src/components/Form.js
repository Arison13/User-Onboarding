import React from 'react'


export default function Form () {

  return (
    <form>  
      <div> 
        <label>Name
            <input
                name='Username'
                type='text'
            />
        </label>
        
        <label>Email
            <input
                name='email'
                type='text'
            />
        </label>
        <label>Password
            <input
                name='password'
                type='password'
            />
        </label>
        <label>Terms of Service
          <input
            type="checkbox"
            name="ToS"
          />
        </label>
        <label>
            <input type="submit" name="submit" />
        </label>
      </div>
    </form>
    
    )
}