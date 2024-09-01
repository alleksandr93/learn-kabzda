import {memo, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}
export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        // Создаем переменную временную чтобы с ней работать
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA *= i
        }
        // Обязательно ее возвращаем
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USER SECRET')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Dimych', 'Valera', 'Artem', 'Katya'])
    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])
    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>ADD USER</button>
        {counter}
        <Users users={newArray}/>
    </>
}