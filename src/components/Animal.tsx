import { useLocation } from 'react-router-dom';
import { IAnimal } from '../models/Ianimal';
import { LastFed } from './lastFed';


export const Animal = () => {
    const location = useLocation();
    const animal = location.state?.animal as IAnimal;



    return (
        <>
            <h1>{animal.name}</h1>
            <img className="animalImg" src={animal.imageUrl} alt={animal.name} />
            <p>{animal.longDescription}</p>
            <LastFed />

        </>
    );
};
