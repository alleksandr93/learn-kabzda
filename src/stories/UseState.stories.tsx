import {useState} from 'react';

export default {
    title: 'UseState',
}

function generateData() {
    console.log('generate data')
    return 1
}

export const Exmple1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(generateData)
    const changer = ((state:number) => state + 1)
    return <>
        <button onClick={() => setCounter((prevState)=>prevState+1)}>+</button>
        {/*<button onClick={() => setCounter(changer}>+</button>*/}
        {counter}
    </>
}