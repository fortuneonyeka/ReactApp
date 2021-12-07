import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../features/user'

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => {dispatch(login({ name: "Mike", age: 50, email: "mike5@email.com" }));}}>Add</button>
      <button onClick={() => {dispatch(logout({ name: "", age: 0, email: "" }));}}>Remove</button>
    </div>
  )
}

export default Login
