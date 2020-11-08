import React from 'react';
import './timer.css'


class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            minutes: 2,
            seconds: 0
        }
    }

    handleCountDown(){
        this.setState({isActive:true});

        
            this.myInterval = setInterval(() => {
                const { seconds, minutes } = this.state
    
                if (seconds > 0) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds - 1
                    }))
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(this.myInterval)
                    } else {
                        this.setState(({ minutes }) => ({
                            minutes: minutes - 1,
                            seconds: 59
                        }))
                    }
                } 
            }, 1000)
    }

    handleResetCount(){
        this.setState({
            isActive: false,
            minutes:2,
            seconds:0
        })
    }

    stopTimer = () => {
       this.setState({isActive:false});
       clearInterval(this.myInterval);

    }

    render(){
        const { minutes, seconds } = this.state
        return (
            <div id='timer_box'>
                 <h1 id='game_title'>Scavenger Hunt Game</h1>

                { minutes === 0 && seconds === 0
                    ? <h1 className='timer_display'>Times Up!</h1>
                    : <h1 className='timer_display'> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
                <div id='timer_button_box'>
                    <button className='start_count' onClick={()=> this.handleCountDown()}>Start</button>
                    <button className='stop_count' onClick={this.stopTimer}>Stop</button>
                    <button className='reset_count' onClick={()=> this.handleResetCount()}>Reset</button>
                </div>
            </div>
        )
    }

}
export default Timer;