
export const getStaticProps = async () => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=872215b0c440a5aac6c4d7f044f6b...`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: data, // will be passed to the page component as props
    }

}

const Demo = ({ props }) => {
  
    return (
       
        <div>
            <ul>
             <li>{props}</li>
            </ul>

        </div>
    )
}
export default Demo;


