import React, { Component } from 'react'

export default class ClassCount extends Component {
    constructor(){
        super();

        this.state = {
            count : 0,
            name : "John",
        };
    }

    handleClick = () => {
        this.setState ({count: this.state.count+1});
    };

    handleClick = () => d{
      this.setState({count:this.state.count-1});
    };

  render() {
    return (
      <div>
      </div>
    )
  }
}
