import React, {Component} from 'react';

class FormCard extends Component{
  	state ={
      inputValue: ""
    }
updateInput=(input)=>{
  this.setState(
    {
      inputValue: input.trim()
    }
  )
  
}
 	render(){
      
      return (
      	 <div className="container">
          <input type="text" placeholder="Say Something" value={this.state.inputValue} onChange={(event)=>this.updateInput(event.target.value)} />
          <p className="echo">Echo:</p>
          <p>{this.state.inputValue}</p>
        </div>
      );
      
    }
}

export default FormCard;