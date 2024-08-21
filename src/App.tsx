import React from 'react';

import './App.css';

const App = () => {
    return (
        <div>
            This is APP Component
            <Rating/>
            <Accordion/>
        </div>
    );
}
const Rating = () => {
    return (
        <div>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </div>
    )
}
const Accordion = () => {
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
const Star = () => {
    return <div>Star</div>
}
export default App;
