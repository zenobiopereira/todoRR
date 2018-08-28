import React from 'react'
// import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />  {/* Calling the input + button for adding "to do's" with all functions and reducers attached */}
    <VisibleTodoList />     {/* List of existing "to do's"*/}
    {/* <Footer /> */}
  </div>
)

export default App