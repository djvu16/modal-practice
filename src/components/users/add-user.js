import React,{useState} from "react";
import Button from "../UI/button/button";
import ErrorModel from "../UI/error-model/error-model.component";
import Card from '../UI/card/card';

import './add-user.style.css';
import Wrapper from "../helper/wrapper.component";
const AddUser = props =>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();

    const addUserSubmitHandler=(event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:'Invalid input',
                message:"Please enter a valid name and age."
            });
            return;
        }
        if(+enteredAge<1){
            setError({
                title:'Invalid age',
                message:"Please enter a valid age(>0)."
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler= () => {
        setError(null);
    }

    return(
        <Wrapper>
        {error && (<ErrorModel 
        title={error.title} 
        message={error.message} 
        onConfirm={errorHandler} 
        />) }
        <Card className="input">
        <form onSubmit={addUserSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
           <Button
           type="submit"
           onClick={addUserSubmitHandler}>
               Add User
           </Button>
        </form>
    </Card>
    </Wrapper>
    )
};

export default AddUser;