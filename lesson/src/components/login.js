import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../features/user'

function Login() {
  // const [book, setBook] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
      {/* <input type="text" onChange={(event) => {setBook(event.target.value)}}/>
      <input type="text" onChange={(event) => {setBook(event.target.value)}}/>Name
      <input type="text" onChange={(event) => {setBook(event.target.value)}}/>Age
      <input type="text" onChange={(event) => {setBook(event.target.value)}}/>email */}
      <button onClick={() => {dispatch(login({ name: "Mike", age: 50, email: "mike5@email.com" }));}}>Add</button>
      <button onClick={() => {dispatch(logout());}}>Remove</button>
    </div>
  )
}

export default Login
