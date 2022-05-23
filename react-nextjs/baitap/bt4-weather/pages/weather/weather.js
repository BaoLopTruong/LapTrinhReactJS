import axios from 'axios';
export async function getStaticProps() {
    const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=63b464d1dc95934f42129614e6499735');
    return {
        props: {
            weather: res.data
        }
    }
}

export default function Weather({ weather }) {
    console.log(weather);
    return (
        <div>
            <h2>WEATHER INFO</h2>
           
        </div>
    )
}