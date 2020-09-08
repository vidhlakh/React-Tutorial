import React from 'react'
export class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state  = {counter : 0}
        this.incrementhandleClick = this.incrementhandleClick.bind(this)
        this.decrementhandleClick = this.decrementhandleClick.bind(this)
    }
    incrementhandleClick()  {
        this.setState( prevState =>{
            
            return{
                counter :prevState.counter +1 
            };
        });
    }
    decrementhandleClick()  {
        this.setState( prevState =>{
            
            return{
                counter :prevState.counter - 1 
            };
        });
    }
    render() {
        console.log("Props:",this.props)
      return (
          <div>
              <h1>Hello, {this.props.name}</h1>;
              Count: {this.state.counter}
              {/* function call this.decrementhandleClick is within parenthesis  */}
              <input type="button" value="Increase"  onClick={this.incrementhandleClick} /> 
              <input type="button" value="Decrease" onClick={this.decrementhandleClick} /> 
          </div>
      
      )
    }
  }
  
 