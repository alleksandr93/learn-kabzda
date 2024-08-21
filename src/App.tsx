import React from 'react';

import './App.css';
import {Accordion} from './components/Accordion/Accordion';


const App = () => {
    console.log('App rendering')
    return (
        <div>
            {/*<PageTitle title={'This is APP Component'}/>*/}
            {/*<PageTitle title={'My Friends'}/>*/}
            {/*<Rating value={0}/>*/}
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            {/*<Rating value={4}/>*/}
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}
export default App;
