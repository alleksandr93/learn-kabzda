import {memo, useCallback, useMemo, useState} from 'react';

export default {
    title: 'useCallback'
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState<Array<string>>(['React', 'Js', 'Css', 'HTML'])
// UseMemo надо возвращать функцию обязательно
    const memoizedAddBooks = useMemo(()=>{
        return () => {
            console.log(books)
            setBooks([...books, 'Angular' + new Date().getTime()])
        }
    }, [books])
    // UseCallback не надо возвращать функцию
    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        setBooks([...books, 'Angular' + new Date().getTime()])
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}
type BooksSecretPropsType = {
    // books: Array<string>
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>ADD USER</button>
    </div>
}
const Book = memo(BooksSecret)