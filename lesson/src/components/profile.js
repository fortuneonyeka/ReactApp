import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {
  const user = useSelector((state) => state.user.value)
  return (
    <div>
      <h1>Show page</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </div>
  )
}

export default Profile
