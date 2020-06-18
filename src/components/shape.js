import React from 'react';
import './components.css';

export default class Shape extends React.Component {
    render (){
        return(
            <div className="box" 
            style={{
            'borderBottomLeftRadius':this.props.state.borderRadiusBottomLeft +'%',
            'borderTopLeftRadius': this.props.state.borderRadiusTopLeft +'%',
            'borderBottomRightRadius': this.props.state.borderRadiusBottomRight +'%',
            'borderTopRightRadius': this.props.state.borderRadiusTopRight + '%'
        }}>
            
        </div>
        )
    }
}