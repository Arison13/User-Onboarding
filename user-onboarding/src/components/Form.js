import React, {useState} from 'react'


const initialFormValues = { username: "", email: "", password: "", ToS: false,}
const initialUsers = []


export default function Form (props) {
 const [users, setUsers] = useState(initialUsers);
 const [formValues, setFormValues] = useState(initialFormValues);

 const change = evt => {
     const {name, value} = evt.target;
     setFormValues({...formValues, [name]: value});
    }

 const onSubmit = evt => {
    evt.preventDefault()
    const newUsers = {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
        ToS: formValues.ToS
    }
    setUsers(users.concat(newUsers));
    setFormValues(initialFormValues);

  }
  return (
    <div>
     <form onSubmit={onSubmit}>   
        <label>Name
            <input
                name='username'
                type='text'
                onChange={change}
                value={formValues.username}
            />
        </label>
        
        <label>Email
            <input
                name='email'
                type='text'
                onChange={change}
                value={formValues.email}
            />
        </label>
        <label>Password
            <input
                name='password'
                type='password'
                onChange={change}
                value={formValues.password}
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
        
        <div className='users'> 
        <h2>Users</h2>
        {users.map((user, idx) => (
            
            <div key={idx}> 
                <p> {user.username}:  email is {user.email} </p>
            </div>
        ))}
     </div> 
     </form>
     
    </div>
   
    
    )
}