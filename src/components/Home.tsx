import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IAnimal } from '../models/Ianimal'



export const Home = () => {


    const [animal, setAnimal] = useState<IAnimal[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get<IAnimal[]>(
                    '/src/animalsData/animals.json'
                );
                const animalsData = response.data;
                setAnimal(animalsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div className="animals">
            <h2>Animals</h2>
            <ul>
                {animal.map((animal, index) => (
                    <li key={index}>
                        <Link to={`${animal.name}`} >
                            <h2>{animal.name}</h2> <h3>{animal.shortDescription}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
