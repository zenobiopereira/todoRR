import React from 'react'
// import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="fullApp">
    <div className="inputAdd">
    <AddTodo />  {/* Calling the input + button for adding "to do's" with all functions and reducers attached */}
    </div>
    <div className="visibleList">
    <VisibleTodoList />     {/* List of existing "to do's"*/}
    </div>
    {/* <Footer /> */}
  </div>
)

export default App