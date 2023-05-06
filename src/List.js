import React, { useState } from 'react';
import data from './data';
import Card from './Card';


const List = () => {
  const [list, setList] = useState(data)
  console.log('data', data);
  return (
    <>
      <h2>list component</h2>
      {
        list.map(item => {
          console.log('item', item);
          return (
            <Card card={item} isHomePage={true} />
          )
        })
      }
    </>
  );
};

export default List;
