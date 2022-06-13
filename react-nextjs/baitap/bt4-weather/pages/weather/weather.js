import axios from 'axios';
export async function getStaticProps() {
    const MY_API_KEY = 'ee6de521fda3d6518c1c40e36c8ccb7a';
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=' + MY_API_KEY);
    return {
        props: {
            weatherInfo: res.data
        }
    }
}

export default function WeatherHome({ weatherInfo }) {
    console.log(weatherInfo);
    const temp = weatherInfo.main.temp - 273.15;
    return (
        <div>
            <h2>Current weather Info</h2>
            <ul>
                <li>Country - {weatherInfo.sys.country}</li>
                <li>City - {weatherInfo.name}</li>
                <li>Temperature -  {temp}</li>
            </ul>
        </div>
    )
}