import React from 'react';
type RatingProps={
    value: 1|2|3|4|5;
}
export const Rating = (props:RatingProps) => {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={props.value>0}/>
            <Star selected={props.value>1}/>
            <Star selected={props.value>2}/>
            <Star selected={props.value>3}/>
            <Star selected={props.value>4}/>


        </div>
    )
}
type StarProps={
    selected:boolean
}
const Star = (props:StarProps) => {
    console.log('Star rendering')
    return props.selected ? <span><b>Star</b></span> : <span>Star</span>
}