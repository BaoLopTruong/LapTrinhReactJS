import {axios} from 'axios';
import {useState, useEffect} from 'react';
import demo from './demo';

 export const getStaticProps = async () => {
    const res = await fetch(`https://api.covid19api.com/`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {covid: data}, // will be passed to the page component as props
    }
  }

const Demo =({ covid }) => {
    console.log(covid);
    return (
     <div>
     <ul>
          {covid.map(covid => (
            <li key={covid.id}> {covid.name} </li>
          ))}
        </ul>
     </div>
    )
  }
  export default Demo;