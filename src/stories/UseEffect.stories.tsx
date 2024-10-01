import {useEffect, useState} from 'react';

export default {
    title: 'UseEffect',
}


export const Exmple1 = () => {
    console.log('Simple Example')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    useEffect(() => {
        console.log('every time  render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render(ComponentDidMount)')
        document.title = counter.toString()
    },[])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    },[counter])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            {counter}{fake}
        </>
    )
}