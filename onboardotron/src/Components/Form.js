import React from 'react';


const Form= (props) => {
    const {change,submit}= props;
    const {username, email, password, tos,}= props.values;
    
    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const newValue = type ==='checkbox' ? checked : value;
        change(name, newValue)

    }

    const onSubmit = (evt) => {
      evt.preventDefault();
       submit(); 
    }
    return (
        <div>
       <h1>LOLOLOLOLOL!</h1>
       <form onSubmit = {onSubmit} >
           <label>Name:
               <input
               type='text'
               name='username'
               value={username}
               onChange={onChange}
               />
            </label>
            <label>Email:
                <input 
                type='email'
                name= 'email'
                value={email}
                onChange={onChange}
                
                />
            </label>
            <label>Password
                <input
                type='password'
                name='password'
                value={password}
                onChange={onChange} 
            
            />
            </label>
            <label>Terms Of Service
                <input 
                type='checkbox'
                name='tos'
                checked={tos}
                onChange={onChange}
            />
            </label>
            
                <input type='submit' value='Create A User Nao!' />
            
        </form> 


       </div>
    )
}

export default Form;