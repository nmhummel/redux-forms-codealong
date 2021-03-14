import React, { Component } from 'react';
import {connect} from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  // When handleSubmit() is called, whatever is currently stored in this.state will be sent off to our reducer via our dispatched action.

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={this.handleChange} 
          value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
       {/* {this.state.text} */}
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    // addTodo becomes a function in props that is able take arguments.
    // dispatch arg needs to be a POJO with a type key describing the type of action
    // we also need to include the data from the form (key 'payload')
  }
} 

// In our component, we could call something like this.props.addTodo(this.state). Since this.state is an object with only one property, text.

export default connect(null, mapDispatchToProps)(CreateTodo); 

// In this component, we are not currently concerned with writing a mapStateToProps() function (the first argument passed to connect) as this component doesn't need any state. Since we only need to dispatch an action here and we are not getting information from our store, we can use null instead of mapStateToProps as the first argument.