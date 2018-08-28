import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/actions'

const DeleteTodo = ({ dispatch, id, completed }) => {
  return (
    <button onClick={e => {
        e.preventDefault()
// Send to reducers the params: "id, completed" to the delete function to see if the todo can be properly removed
        dispatch(deleteTodo(id, completed))
// console.log(dispatch(deleteTodo(id)));
    }}> Delete Todo </button>
  )
}
export default connect()(DeleteTodo)

