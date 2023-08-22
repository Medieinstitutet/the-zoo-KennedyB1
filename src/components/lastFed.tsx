import { useLocation } from 'react-router-dom';
import { IAnimal } from '../models/Ianimal';
import { useState, useEffect } from 'react';

export const LastFed = () => {
    const location = useLocation();
    const animal = location.state?.animal as IAnimal;

    const [fedAnimal, setFedAnimal] = useState<IAnimal>(animal);
    const [buttonDisabled, setButton] = useState<boolean>(false);



    const handleFeedClick = () => {
        const updatedAnimal: IAnimal = {
            ...fedAnimal,
            lastFed: new Date().toISOString(),
        };
        setFedAnimal(updatedAnimal);
        setButton(true);

        localStorage.setItem(`fedAnimal_${animal.name}`, JSON.stringify(updatedAnimal));
    };

    useEffect(() => {

        const storedFedAnimal = localStorage.getItem(`fedAnimal_${animal.name}`);
        if (storedFedAnimal) {
            setFedAnimal(JSON.parse(storedFedAnimal));
        }
    }, [animal]);

    return (
        <>

            <p>Last Fed: {fedAnimal.lastFed}</p>

            <button onClick={handleFeedClick} disabled={buttonDisabled}>Mata djur</button>

        </>
    );
};
