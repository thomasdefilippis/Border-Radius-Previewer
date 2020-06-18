import React from 'react';
import Shape from './shape';
import ShowValue from './showValue';

export default class ChangeBorder extends React.Component{
    state = {
        borderRadiusBottomLeft: 50,
        borderRadiusTopLeft: 50,
        borderRadiusTopRight: 50,
        borderRadiusBottomRight: 50
    }

    handleChange1 = event =>{
        this.setState({
            borderRadiusBottomLeft: event.target.value
        })
    }

    handleChange2 = event =>{
        this.setState({
            borderRadiusTopLeft: event.target.value
        })
    }

    handleChange3 = event =>{
        this.setState({
            borderRadiusTopRight: event.target.value
        })
    }

    handleChange4 = event =>{
        this.setState({
            borderRadiusBottomRight: event.target.value
        })
    }
    render(){
    
        return (
        <div>    
            <div className="center">  
                <div className="shape-box">
                    <Shape state={this.state}/>
                    <span id="border1">
                    <input className="range-slider" id="radius-border-bottom-left" min="0" max="100" type="range" onChange={this.handleChange1}/>
                    </span>
                    <span id="border2">
                        <input className="range-slider" id="radius-border-top-left" type="range" min="0" max="100" onChange={this.handleChange2}/>
                    </span>
                    <span id="border3">
                        <input className="range-slider" id="radius-border-top-right" type="range" min="0" max="100" onChange={this.handleChange3}/>
                    </span>
                    <span id="border4">
                        <input className="range-slider" id="radius-border-bottom-right" type="range" min="0" max="100" onChange={this.handleChange4}/>
                    </span>
                </div>
            </div>
            <ShowValue state={this.state}/>
        </div>
        )
    }
}