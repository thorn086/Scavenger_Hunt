import React from "react";
import './players.css'

class Players extends React.Component{
 constructor(){
     super();

     this.state={
         points:0
     }
 }

handleAddPoints(){;
    const points = this.state.points;
    this.setState({
        points: points+1
    })
} 

handleResetPoints(){
    this.setState({
        points:0
    })
}

    render(){
const {points} =this.state;
         return(
             <div id='player_box'> 
                <div className="player_title">{this.handleSelectedPLayers}
                    <textarea id="name_title"></textarea>
                    <h3 id='point_total' >{points}</h3>
                    <div>
                        <button id='player_button' onClick={()=> this.handleAddPoints()}>Add</button>
                        <button id='player_reset' onClick={()=>this.handleResetPoints()}>Reset</button>  
                    </div>
                </div>
            </div>
        );
    };
};

export default Players;