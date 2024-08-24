import {memo, useState} from 'react';

export default {
    title: 'ReactMemo demo',
}
const NewMessangesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = memo(UsersSecret)
const Message = memo(NewMessangesCounter)
export const Exmple1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Dimych', 'Valera', 'Artem', 'Katya'])
    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add User</button>
        <Message count={counter}/>
        <Users users={users}/>
    </>


}