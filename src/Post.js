import { RiArrowUpCircleFill } from "react-icons/ri";

export function Post(){
    return <button onClick={() => {
        fetch('https://retoolapi.dev/pi0Kjh/data')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }}>
        <RiArrowUpCircleFill /> Click me
    </button>
}