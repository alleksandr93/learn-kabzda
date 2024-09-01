import {ChangeEvent, useMemo, useState} from 'react';

export default {
    title: 'Select Memo',
}
export const SelectMemoExample = () => {
    const [state, setState] = useState([
        {id: 1, city: 'New York'},
        {id: 2, city: 'Los Angeles'},
        {id: 3, city: 'Chicago'},
        {id: 4, city: 'Houston'},
        {id: 5, city: 'Phoenix'},
        {id: 6, city: 'Philadelphia'},
        {id: 7, city: 'San Antonio'},
        {id: 8, city: 'San Diego'},
        {id: 9, city: 'Dallas'},
        {id: 10, city: 'San Jose'}
    ])
    let oldState=[
        {id: 1, city: 'New York'},
        {id: 2, city: 'Los Angeles'},
        {id: 3, city: 'Chicago'},
        {id: 4, city: 'Houston'},
        {id: 5, city: 'Phoenix'},
        {id: 6, city: 'Philadelphia'},
        {id: 7, city: 'San Antonio'},
        {id: 8, city: 'San Diego'},
        {id: 9, city: 'Dallas'},
        {id: 10, city: 'San Jose'}
    ]
    const [value, setValue] = useState(4)
    const [input, setInput] = useState('')
    const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(+e.currentTarget.value)
    }
    const onClickCounterHandler = () => {
        if (state.length > value) {
            setValue(value + 1)
        }
    }
    let filterArr = useMemo(() => {

        return oldState.filter(e => e.city.toLowerCase().indexOf(input) > -1)
    }, [state])
    const onClickFilter = () => {

        setState(filterArr)
    }
    return <>
        <select value={value} onChange={onchangeHandler}>
            {state.map(el => <option value={el.id} key={el.id}>{el.city}</option>)}
        </select>
        <hr/>
        <h2>{value}</h2>
        <button onClick={onClickCounterHandler}>+</button>
        <input value={input} onChange={(e) => setInput(e.currentTarget.value)}/>
        <button onClick={onClickFilter}>Filter City</button>
    </>

}
export const FilterArray=()=>{
    const cities = [
        { id: 1, city: 'New York' },
        { id: 2, city: 'Los Angeles' },
        { id: 3, city: 'Chicago' },
        { id: 4, city: 'Houston' },
        { id: 5, city: 'Phoenix' },
        { id: 6, city: 'Philadelphia' },
        { id: 7, city: 'San Antonio' },
        { id: 8, city: 'San Diego' },
        { id: 9, city: 'Dallas' },
        { id: 10, city: 'San Jose' },
        { id: 11, city: 'Austin' },
        { id: 12, city: 'Jacksonville' },
        { id: 13, city: 'San Francisco' },
        { id: 14, city: 'Columbus' },
        { id: 15, city: 'Indianapolis' },
        { id: 16, city: 'Seattle' },
        { id: 17, city: 'Denver' },
        { id: 18, city: 'Washington' },
        { id: 19, city: 'Boston' },
        { id: 20, city: 'El Paso' },
        { id: 21, city: 'Nashville' },
        { id: 22, city: 'Detroit' },
        { id: 23, city: 'Oklahoma City' },
        { id: 24, city: 'Portland' },
        { id: 25, city: 'Las Vegas' },
        { id: 26, city: 'Memphis' },
        { id: 27, city: 'Louisville' },
        { id: 28, city: 'Baltimore' },
        { id: 29, city: 'Milwaukee' },
        { id: 30, city: 'Albuquerque' },
        { id: 31, city: 'Tucson' },
        { id: 32, city: 'Fresno' },
        { id: 33, city: 'Sacramento' },
        { id: 34, city: 'Mesa' },
        { id: 35, city: 'Kansas City' },
        { id: 36, city: 'Atlanta' },
        { id: 37, city: 'Long Beach' },
        { id: 38, city: 'Colorado Springs' },
        { id: 39, city: 'Raleigh' },
        { id: 40, city: 'Miami' },
        { id: 41, city: 'Virginia Beach' },
        { id: 42, city: 'Omaha' },
        { id: 43, city: 'Oakland' },
        { id: 44, city: 'Minneapolis' },
        { id: 45, city: 'Tulsa' },
        { id: 46, city: 'Arlington' },
        { id: 47, city: 'New Orleans' },
        { id: 48, city: 'Wichita' },
        { id: 49, city: 'Cleveland' },
        { id: 50, city: 'Tampa' },
        { id: 51, city: 'Bakersfield' },
        { id: 52, city: 'Aurora' },
        { id: 53, city: 'Anaheim' },
        { id: 54, city: 'Santa Ana' },
        { id: 55, city: 'Corpus Christi' },
        { id: 56, city: 'Riverside' },
        { id: 57, city: 'St. Louis' },
        { id: 58, city: 'Lexington' },
        { id: 59, city: 'Pittsburgh' },
        { id: 60, city: 'Stockton' },
        { id: 61, city: 'Anchorage' },
        { id: 62, city: 'Cincinnati' },
        { id: 63, city: 'Saint Paul' },
        { id: 64, city: 'Greensboro' },
        { id: 65, city: 'Toledo' },
        { id: 66, city: 'Newark' },
        { id: 67, city: 'Plano' },
        { id: 68, city: 'Henderson' },
        { id: 69, city: 'Lincoln' },
        { id: 70, city: 'Buffalo' },
        { id: 71, city: 'Jersey City' },
        { id: 72, city: 'Chula Vista' },
        { id: 73, city: 'Fort Wayne' },
        { id: 74, city: 'Orlando' },
        { id: 75, city: 'St. Petersburg' },
        { id: 76, city: 'Chandler' },
        { id: 77, city: 'Laredo' },
        { id: 78, city: 'Norfolk' },
        { id: 79, city: 'Durham' },
        { id: 80, city: 'Madison' },
        { id: 81, city: 'Lubbock' },
        { id: 82, city: 'Irvine' },
        { id: 83, city: 'Winston-Salem' },
        { id: 84, city: 'Glendale' },
        { id: 85, city: 'Garland' },
        { id: 86, city: 'Hialeah' },
        { id: 87, city: 'Reno' },
        { id: 88, city: 'Chesapeake' },
        { id: 89, city: 'Gilbert' },
        { id: 90, city: 'Baton Rouge' },
        { id: 91, city: 'Irving' },
        { id: 92, city: 'Scottsdale' },
        { id: 93, city: 'North Las Vegas' },
        { id: 94, city: 'Fremont' },
        { id: 95, city: 'Boise' },
        { id: 96, city: 'Richmond' },
        { id: 97, city: 'San Bernardino' },
        { id: 98, city: 'Birmingham' },
        { id: 99, city: 'Spokane' },
        { id: 100, city: 'Rochester' },
        // Добавьте больше городов по аналогии
    ];

    const [state, setState] = useState(cities)
    const [value, setValue] = useState('')
    console.log(value)
    const onClickHandler=()=>{


    }
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        let str = e.currentTarget.value
        let filter= cities.filter(el=>el.city.toLowerCase().indexOf(str.trim())>-1)
        setState(filter)
        setValue(str)
    }
    return <>
        <div>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Filter</button>
        </div>

        {state.map(el=><div key={el.id}>{el.city}</div>)}

    </>
}
