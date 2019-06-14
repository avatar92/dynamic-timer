import React from 'react'
import './Timer.css'
import { Button } from 'reactstrap';

//https://www.youtube.com/watch?v=NAx76xx40jM

const initialTime= 1800000; 
function Convertisseur () {
    var hours = Math.floor(initialTime/3600000) ;
    var remainderofhour =  initialTime % 3600000; 
    var mins =Math.floor(remainderofhour/60000) ;
    var seconds =  remainderofhour % 60000; 
    var obj ={hour : hours , min:mins , sec:seconds}
    console.log(obj)
    return obj
}







class Timer extends React.Component  {
    constructor(props){
        super(props)
        this.state={
            sec:0,
            min:30, 
            hour:0,
        }
        this.myInterval = -1; 
    }
    //handleChange=(event)=>{
    //    this.setState({text:event.target.value})
    //}
      
    onClickStarTimer=(event)=>{
        if (this.myInterval == -1){
            alert('Ah shiiiiiiiiit here we go again')
            this.myInterval = setInterval(()=>{
                this.setState({
                    sec: this.state.sec + 1
                })
                if (this.state.sec==0)
                {
                    this.setState({min: this.state.min + 1})
                }
                if (this.state.min ==0 && this.state.sec ==0 )
                {
                    this.setState
                    (
                        {
                            hour: this.state.hour + 1
                        }
                    )

                }
                
            },1000)
            
                
        document.getElementById('change').innerHTML='pause'   
        }
        else{ 
        clearInterval(this.myInterval)
        this.myInterval = -1
        document.getElementById('change').innerHTML='start'
        }
        
    }
    onClickResetTimer=(event)=>{
        this.state.sec=0;
        this.state.min=0;
        this.state.hour=0;
        clearInterval(this.myInterval)
        this.myInterval = -1
        document.getElementById('hour').innerHTML='0'+this.state.hour
        document.getElementById('min').innerHTML='0'+this.state.min
        document.getElementById('sec').innerHTML='0'+this.state.sec
        document.getElementById('change').innerHTML='start'
    }
    render () {
        return (
            <div className="phone">
                {/* <input type='text' onChange={this.handleChange} /> */}
          <div className="staticTimer">
              <div className="timeContainer">
                  <span className="num" id='hour'>
                  {this.state.hour <10  ? '0'+this.state.hour : this.state.hour == 24 ? this.state.hour=0  : this.state.hour}
                  </span>
                  <span className="description">hour</span>
              </div>
              <span className="doublePoint">:</span>
              <div className="timeContainer">
                  <span className="num" id='min'>
                      {this.state.min <10  ? '0'+this.state.min : this.state.min == 60 ? this.state.min=0  : this.state.min}
                  </span>
                  <span className="description">minute</span>
              </div>
              <span className="doublePoint">:</span>
              <div className="timeContainer" >
                  <span className="num" id='sec'>
                    {this.state.sec <10  ? '0'+this.state.sec : this.state.sec == 60 ? this.state.sec=0  : this.state.sec }
                  </span>
                  <span className="description" >second</span>
              </div>
            
          </div> 
          <Button color="primary" className='startbutton'  onClick={this.onClickStarTimer} id='change'>Start</Button>
          <Button color="primary" className='resetbutton' onClick={this.onClickResetTimer}>Reset</Button>
          
        </div>
        )
    }
    
}





export default Timer;   