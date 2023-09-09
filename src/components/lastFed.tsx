import { useLocation } from 'react-router-dom';
import { IAnimal } from '../models/Ianimal';
import { useState, useEffect } from 'react';

export const LastFed = () => {
    const location = useLocation();
    const animal = location.state?.animal as IAnimal;
    const [buttonDisabled, setButton] = useState<boolean>(false);
    const containerName = 'fedAnimalsContainer';
   
    const getContainerData = () => {
        const containerData = localStorage.getItem(containerName);
        return containerData ? JSON.parse(containerData) : [];
    };

    const [fedAnimals, setFedAnimals] = useState<IAnimal[]>(getContainerData);

    const handleFeedClick = () => {
        const updatedAnimal: IAnimal = {
            ...animal,
            lastFed: new Date().toISOString(),
            isFed: true,
        };

        setFedAnimals((prevAnimals) => [...prevAnimals, updatedAnimal]);
        setButton(true);

        localStorage.setItem(containerName, JSON.stringify([...fedAnimals, updatedAnimal]));
    };

    useEffect(() => {
        const containerData = getContainerData();
        setFedAnimals(containerData);

        const isAnimalFed = containerData.some((a: IAnimal) => a.name === animal.name);
        setButton(isAnimalFed);
    }, [animal]);

    const lastFedText = fedAnimals.find((a) => a.name === animal.name)?.lastFed || animal.lastFed;

    return (
        <>
            <p>Senast matad: {lastFedText}</p>
            <p>{buttonDisabled ? 'Matad' : 'Inte matad'}</p>
            <button onClick={handleFeedClick} disabled={buttonDisabled}>
                Mata djur
            </button>
        </>
    );
};
