import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className ="formAddTodo"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input 
        maxLength="300"
         rows="5" placeholder="Need me to remember you something? Max 300 characteres" ref={node => input = node} />
        <button type="submit">
          Create Todo
        </button>
      </form>
    </div>
  )
}
export default connect()(AddTodo)