import { useState } from 'react';

const Title = () => {
const [count, setCount] = useState(0);
    return (
        <div>
        <h1>Hello, World!</h1>
        <p> Ceci est un composant React tout simple ! </p>
        <button onClick={() => setCount(count + 1)}>
            Cliquez-moi ! ({count})
        </button>
        </div>
    )
}


export default Title;