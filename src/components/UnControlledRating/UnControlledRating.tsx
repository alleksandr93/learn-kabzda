import React, {memo, useState} from 'react';
import s from './UnControlledRating.module.css'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange?: (value: RatingValueType) => void
}
export const UnControlledRating = (props: RatingPropsType) => {
    console.log('Rating rendering')
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    setValue: () => void

}
const Star = (props: StarPropsType) => {
    console.log('Star rendering')
    return <span className={s.rating} onClick={(e) => props.setValue()}>
        {props.selected ? <b>Star</b> : 'star'}
    </span>

}
export const UnControlledRatingMemo=memo(UnControlledRating)