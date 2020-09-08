import React from 'react'
export class Clock extends React.Component {
    constructor(props){
        console.log("constructor")
        super(props);
        this.state = {date: new Date() }  
    }
    componentDidMount() {
        console.log("didmount")
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        console.log("willunmount")
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2 >It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }