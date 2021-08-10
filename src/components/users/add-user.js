import React,{useState,useRef} from "react";
import Button from "../UI/button/button";
import ErrorModel from "../UI/error-model/error-model.component";
import Card from '../UI/card/card';

import './add-user.style.css';
import Wrapper from "../helper/wrapper.component";
const AddUser = props =>{
    const nameInputRef=useRef();
    const ageInputRef=useRef();

    const [error,setError]=useState();

    const addUserSubmitHandler=(event) =>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;

        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title:'Invalid input',
                message:"Please enter a valid name and age."
            });
            return;
        }
        if(+enteredUserAge<1){
            setError({
                title:'Invalid age',
                message:"Please enter a valid age(>0)."
            })
            return;
        }
        props.onAddUser(enteredName,enteredUserAge);
        nameInputRef.current.value="";
        ageInputRef.current.value="";
    }
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
            <input id="username" type="text" 
            ref={nameInputRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" 
            ref={ageInputRef}
            />
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