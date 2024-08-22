import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import {useState} from 'react';


export default {
    title: 'Accordion stories',
    component: Accordion
}

const callback = action('Accordion mode change event fired')
const onClickcallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickcallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callback}
                                                     items={[{title: 'Dimych', value: 1}, {
                                                         title: 'Valera',
                                                         value: 2
                                                     }, {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]}
                                                     onClick={onClickcallback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Viktor', value: 4}
                      ]}
                      onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}/>
}