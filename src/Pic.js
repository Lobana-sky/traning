
import React from 'react';
export default class Pic extends React.Component{
render(){
    return (
        <div>
        <p>{this.props.name}</p>
        <p>{this.props.surname}</p>
        <p>{this.props.age}</p>
        </div>
    )
}
} 