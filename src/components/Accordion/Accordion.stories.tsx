import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import {useState} from 'react';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion
// };
// export default meta;


export default {
    component: Accordion
}

//Todo Новый синтаксис
// type Story = StoryObj<typeof Accordion>;
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'my story',
//         collapsed: true,
//         onChange: () => {}
//     },
// };

const onChangeHandler = action('On change')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true} onChange={onChangeHandler}/>
}
export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={false}
                      onChange={() => {
                      }}/>
}
export const AccordionDemo = () => {
    const [collpsed, setCollpsed,] = useState<boolean>(false)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collpsed}
                      onChange={() => setCollpsed(!collpsed)}/>
}