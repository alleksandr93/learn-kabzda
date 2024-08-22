import React from 'react';
import S from './Select.module.css';

type ItemType = {
    title: string;
    value: any;
}
type SelectPropsType = {
    value: string;
    onChange: (value: any) => void;
    items: ItemType[];
}
export const Select = (props: SelectPropsType) => {
    const [value, setValue] = React.useState(props.value);
    const [selected, setSelected] = React.useState<boolean>(false);
    return (
        <div className={S.select}>
            {!selected && <div className={S.selectTitle} onClick={() => setSelected(!selected)}>{value}</div>}
            {selected && props.items.map((item, index) => {
                const onClickHandle = () => {
                    setValue(item.title)
                    setSelected(false)
                }
                return <div className={S.selectItem} onClick={onClickHandle} key={index}>{item.title}</div>
            })}

        </div>
    );
};

