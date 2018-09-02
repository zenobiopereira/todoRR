import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/DeleteTodo'

/* This page got those proprieties types and local functions 'onClick' that it exports to other components
 To Create that Delete function needed to call here the import from the container DeleteTodo, add it proprietie 'id' and set it
 to receive when called at line 17 */
const Todo = ({ onClick, completed, text, id}) => (
  <Fragment>
  <li>
    <div className="textTodo"     
    style={{
      backgroundColor: completed ? 'aquamarine' : '#ffeb7a',
      cursor : 'pointer'
    }} onClick={onClick}>{text}</div>
  </li>
    <DeleteTodo id={id} completed={completed}/>
    {/* <span style={{
      color: completed ? 'Black' : 'transparent',
    }}><b> Good Job, now jump to the next one. </b></span> */}
    </Fragment>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo