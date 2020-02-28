
import React from 'react';
import data from "./data"


export default class Pic extends React.Component{
 rrender(){
    return data.map(dt => {
       <div>{dt.name}</div>  
    } )
  }

render(){
    return (
        <div>
            {this.props.rrender(data)}
        
        </div>
    )
}

} 