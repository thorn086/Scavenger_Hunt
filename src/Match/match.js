import React from 'react';
import Timer from '../timer/timer';
import './match.css'

class Match extends React.Component{
    constructor(){
        super();
        this.state={
            match: 1,
            round:0,
            disabled:false,
            game: true    
            }
    }

    handleNextRound(){
        const round = this.state.round;
        const match = this.state.match;

        this.setState({
            round: round +1
        })
        if( round === 5){
            this.setState({
                round: 0
            });
            this.setState({
                match:match +1
            })
        }
        if (match === 3 && round === 5 ){
            this.setState({
                round: "Tally Points!"
            })
            this.setState({
                match:"End of Game!"
            })
            this.setState({
                disabled:true,
                game:false
            })
        }
    }

    handleRestGame(){
        this.setState({
            match:1,
            round: 0,
            disabled:false,
            game:true
        })
    }

    render(){
        const {match, round,disabled,game} =this.state
        return(
            <div id='match_box'>
                
                <div id='match_container'>
                    <h2 className='match_title'>Match</h2>
                    <h3 className='match_count'>{match}</h3>
                </div>
                <Timer />
                <div id='round_container'>
                    <h2 className='match_title'>Round</h2>
                    <h3 className='match_count'>{round}</h3>
                    <button id='match_button' disabled={disabled} onClick={()=> this.handleNextRound()}> Next Round</button>
                    <button id='match_reset' disabled={game} onClick={()=> this.handleRestGame()}>New Game</button>
                </div>
            </div>
        );
    }
}

export default Match;