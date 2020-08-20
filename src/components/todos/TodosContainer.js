import React from "react";
import { connect } from 'react-redux'
import Todo from './Todo'

const TodosContainer = (props) => {
  return (
        props.todos.map((todo, index ) => <Todo key={index} todo={todo}/>)
    );
};

const mapStateToProps = (state) => {
  return {
    todos:state.todos
  };
};

export default connect(mapStateToProps)(TodosContainer);
