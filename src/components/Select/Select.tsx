import React, {memo, useEffect, useState} from 'react';
import styles from './Select.module.css';
import {isUndefined} from 'node:util';

type ItemType = {
    title: string;
    value: any;
}
type SelectPropsType = {
    value?: any;
    onChange: (value: any) => void;
    items: ItemType[];
}
export const Select = (props: SelectPropsType) => {


    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    let selectedItem = props.items.find(item => item.value === props.value);
    let hoveredItem = props.items.find(item => item.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }
        if(e.key==='Enter'||e.key==='Escape'){

            setActive(false)
        }
        console.log(e.key)


    }
    return (
        <div tabIndex={0} className={`${styles.select}`} onKeyUp={onKeyPress}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active && <div className={styles.items}>
                {props.items.map((item, index) => {
                    return <div onClick={() => onItemClick(item.value)}
                                onMouseEnter={() => {
                                    setHoveredElementValue(item.value)
                                }}
                                className={`${styles.item} ${hoveredItem === item ? styles.selected : ''}`}
                                key={item.value}>{item.title}</div>
                })}
            </div>}


        </div>
    );
};

export const SelectMemo=memo(Select)