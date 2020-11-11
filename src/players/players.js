import React from "react";
import './players.css'

class Players extends React.Component{
 constructor(props){
     super(props);

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

handleAdd3Points(){
    const points = this.state.points;
    this.setState({
        points: points + 3
    })
}
handleAdd5Points(){
    const points = this.state.points;
    this.setState({
        points: points + 5
    })
}
    render(){
const {points} =this.state;
         return(
             <div id='player_box'> 
                <div className="player_title">{this.handleSelectedPLayers}
                    <textarea id="name_title"></textarea>
                    <h3 id='point_total' >{points}</h3>
                    <div id='btn_box'>
                        <button id='player_button' onClick={()=> this.handleAddPoints()}>Add</button>
                        <button id='player_reset' onClick={()=>this.handleResetPoints()}>Reset</button> 
                            <div id='bonus_pnts_box'>Bonus Points
                                <button id='three_pnts' onClick={()=> this.handleAdd3Points()}>Add 3</button> 
                                <button id='five_pnts' onClick={()=> this.handleAdd5Points()}>Add 5</button> 
                            </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Players;