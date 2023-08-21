import { useLocation } from 'react-router-dom';
import { IAnimal } from '../models/Ianimal';

export const AnimalInfo = () => {
    const location = useLocation();
    const animal = location.state?.animal as IAnimal;

    if (!animal) {
        return <div>No animal data available.</div>;
    }

    return (
        <>
            <h1>{animal.name}</h1>
            <p>{animal.longDescription}</p>
        </>
    );
};
