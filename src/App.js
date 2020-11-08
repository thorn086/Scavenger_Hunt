import React from "react";
import './App.css';
import Players from './players/players';

import Match from './Match/match'


class App extends React.Component{
    constructor(){
      super();

      this.state = {players: [],
                    count:0};
  }




handleSelectedPLayers(){
  const count = this.state.count;
  this.setState({
    count:count +1
  });
    this.setState({
      players: [...this.state.players, <li  key={this.state.count}><Players /></li>]
  });
};

handlePlayerReset(){  
this.setState({
    players:[]
  });
};



  render(){
    const {players} = this.state;
      return (
        <div className="App">
            <Match />
            <div id='game_buttons'>
              <button className='player_total' onClick={()=>this.handleSelectedPLayers()}>Add Players</button>
              <button className='player_reset' onClick={()=> this.handlePlayerReset()}>Clear Players</button>
            </div>
            <ul className='players_box'>
                {players.map(player => player)}
            </ul>

        </div>
      );
  };
}

export default App;
