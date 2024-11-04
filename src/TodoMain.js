//TodoMain.js
import { useRef, useState } from "react"
import styled from 'styled-components'
import TodoHeader from './components/TodoHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTrash, faPenNib } from "@fortawesome/free-solid-svg-icons"


export default function TodoMain(){
   const [todoList, setTodoList] = useState([]);
   const [inputValue, setInputValue] = useState(); //입력 받은 값
   const inputRef = useRef(null);

   const handleEnter =  (e) => {
      if(e.key === 'Enter') handleAddItem()
   }

   const handleAddItem = () => {
      if(inputValue !== '') setTodoList([...todoList, {id: todoList.length+1 , item: inputValue, completed : false}])
      setInputValue('')
      inputRef.current.focus()
   }

   const handleRemoveItem = (id) => {
      setTodoList(todoList.filter(todo => todo.id !== id))
   }

   //완료되었으면,
   const handleCompleted = (id) =>{
      setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
   }

   const CompletedStyled = {
      fontStyle : 'italic', color : 'red',
      textDecoration : 'line-through'
   }

   const handleEidt = id => {
      setTodoList(todoList.map(todo => todo.id === id ? {...todo, isEditing: true}  : todo))}

   const [newTodo, setNewTodo] =useState('')
   const hadleSave = id => {

   }
   return(
      <>
         <TodoHeader />
            <h2>입력폼</h2>
         <TodoAdd>
            <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onKeyDown={handleEnter}
            onChange={e => setInputValue(e.target.value)}
            placeholder='할 일을 입력하세요'
            />
            <button onClick= {handleAddItem}><FontAwesomeIcon icon={faPaperPlane}/></button>
         </TodoAdd>

         <h2>할 일 리스트</h2>

         <ul>
            {todoList.map(todo => (
               <TodoListLi key={todo.id} >
                  {todo.isEditing ? (
                     <>
                     <input type="text" placeholder={todo.item} onChange={e => setNewTodo(e.target.value)} />
                     <button onClick={()=>{handleEditSave(fruit.id)}}
                  style={buttonStyle}><button/>
               </button>

                     </>
                  ):(
                  <>
                     <span onClick={()=> handleCompleted(todo.id)} style={todo.completed ? CompletedStyled : null}>{todo.item} </span>

                     <button onclick = {() => handleEidt(todo.id)}><FontAwesomeIcon icon={faPenNib} /></button>
                  </>
                  )}


                  <div className='icons'>
                     <button onClick={() => handleRemoveItem(todo.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                     </button>
                     {/* <button><FontAwesomeIcon icon={faPenNib} /></button> */}
                     {!todo.completed && (
                     <button onclick = {() => handleEidt(todo.id)}><FontAwesomeIcon icon={faPenNib} /></button>
                     )}
                  </div>
               </TodoListLi>
            ))}
         </ul>


      </>
   )
}

//style
const TodoAdd = styled.div`
   background: #ccc;
   padding: 30px;

   & input {
      width: calc(100% -30px);
      border: none;}
   & button {
      width: 30px;
   }

`
const TodoListLi = styled.li`
   display: flex;justify-content:space-between;
   padding: 20px 10px;margin: 0 30px;
   border-bottom: 1px solid #DDD;
   cursor: pointer;
   & .icons {
      display: flex;gap: 6px;
      font-size: 18px;
  }
`