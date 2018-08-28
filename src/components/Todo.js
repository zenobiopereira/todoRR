import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/DeleteTodo'

/* This page got those proprieties types and local functions 'onClick' that it exports to other components
 To Create that Delete function needed to call here the import from the container DeleteTodo, add it proprietie 'id' and set it
 to receive when called at line 17 */
const Todo = ({ onClick, completed, text, id}) => (
  <Fragment>
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? 'red' : 'black',
      cursor : 'pointer'
    }}
  >
    <p style={{width: '300px' , backgroundColor: 'grey'}} onClick={onClick}>{text}</p>
  </li>
    <DeleteTodo id={id} completed={completed}/>
    </Fragment>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo