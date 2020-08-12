import React, {Component} from 'react'
import TodoListItem from './TodoListItem'
import '../styles/TodoList.css'
import PropTypes from 'prop-types'

class TodoList extends Component{
constructor(props){
  super(props);
  this.state={
    items:this.props.items
  }
}
componentWillReceiveProps(nextProps){
  console.log(nextProps);
  if (nextProps.items.lenght !=this.state.items.lenght){
    this.setState({items:nextProps.items})
  }
}
render(){
  let items=this.props.items.map((currentValue,index,array)=>{
console.log(currentValue,index);
  return (
    <TodoListItem name={currentValue} key={index}/>
  );
})
return(
    <div className="TodoList">
    <ul>
    {items}
    </ul>
    </div>
  );
}
}
TodoList.propTypes={
  items: PropTypes.array.isRequired
}

export default TodoList;
