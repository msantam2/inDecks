import React from 'react';
import CardIndexContainer from '../card/card_index_container';

const Dashboard = ({store}) => (
  <div className='find-me!'>
    <CardIndexContainer store={store}/>
  </div>
);

export default Dashboard;
