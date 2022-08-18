import React, {useState, useRef} from "react"
import './style.css'


function Form({todos, setTodos}) {
    const initialState = {id: 0, title: "", body: "", isDone: false} //초기값

    
    const [inputTodo, setInputTodo] = useState(initialState)

  
    const nextId = useRef(3)

    const onChangeHandler=(event)=>{

        const {value, name} = event.target 

        setInputTodo({...inputTodo, [name]: value, id: nextId.current})
        nextId.current++ 
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault() 
        setTodos([...todos, inputTodo])
        setInputTodo(initialState) 
    }
   
    return (
        <form onSubmit={onSubmitHandler} className="form_container">
            <div className='input_container'>
                <label>제목</label>

                <input type='text' name="title" onChange={onChangeHandler} value={inputTodo.title} required/> 
                <label>내용</label>
                <input type='text' name="body" onChange={onChangeHandler} value={inputTodo.body}/>
                <button>추가하기</button>
            </div>
            
        </form>
    )
}
export default Form