import { TextField } from "@mui/material";
import firebase from "firebase/compat/app";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircle from '@mui/icons-material/AddCircle';

const Form = () => {
    const [title, setTitle] = useState('');
    const handleOnChange = (e : any ) => {
        setTitle(e.target.value);
    }
    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
            complete: false,
        };
        todoRef.push(todo);
        setTitle('')
    }
    return (
        <>
            <div className='form'>
                <TextField variant='standard' label='Add Todo' type='text' value={title} onChange={handleOnChange} className='textfield' size='medium'
                />
                <div className='add'>
                    {
                        title === '' ?
                            <AddCircleOutlineIcon fontSize='large' className='icon'
                            />
                            :
                            <AddCircle onClick={createTodo} fontSize='large' className='icon'
                            />
                    }
                </div>
            </div>
        </>
    );
}

export default Form;