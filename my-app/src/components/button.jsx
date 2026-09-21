import { useEffect, useState } from 'react';

const Title = () => {
    const [count, setCount] = useState(0);
    const [titre, setTitre] = useState("Chargement...");

    const apiCall = async () => {
        const response = await fetch("https://techno-web-ece.onrender.com/test/2");

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        setTitre(data.title);
    };

    useEffect(() => {
        apiCall().catch((error) => {
            console.error(error);
            setTitre("Impossible de récupérer le post");
        });
    }, []);

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