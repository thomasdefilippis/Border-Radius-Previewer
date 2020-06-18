import React from 'react';
import './components.css';



export default class ShowValue extends React.Component {

    render(){
        return (
            <div className="border-value">
                <div className="container-for-values">
                    <p className="label-and-value">Border Radius:  <p className="value">{this.props.state.borderRadiusTopLeft}
                    %   {this.props.state.borderRadiusTopRight}%   {this.props.state.borderRadiusBottomRight}
                    %   {this.props.state.borderRadiusBottomLeft}%</p></p>
                </div>
            </div>

        )
    }
}