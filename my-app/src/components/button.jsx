import { useState } from 'react';

const Title = () => {
const [count, setCount] = useState(0);
const [titre, setTitre] = useState("Hello, World!");
const ApiCall = async (){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json()
        console.log(data)
        setTitre(data.body)
    }
    useEffect(() => {
        ApiCall()
    }, [])

    return (
        <div className="george">
        <h1>{titre}</h1>
        <p> Ceci est un composant React tout simple ! </p>
        <button onClick={() => setCount(count + 1)}>
            Cliquez-moi ! ({count})
        </button>
        <button onClick={() => setTitre("Bonjour, le monde!")}>
            Change le titre !
        </button>
        </div>
    )
}


export default Title;