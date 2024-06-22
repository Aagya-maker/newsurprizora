// src/app/gifts/page.js

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const GiftsPage = () => {
    const searchParams = useSearchParams();
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        const fetchGifts = async () => {
            const queryParams = {};
            for (const [key, value] of searchParams.entries()) {
                queryParams[key] = value;
            }
            const queryString = new URLSearchParams(queryParams).toString();
            const response = await fetch(`/api/getGifts?${queryString}`);
            if (response.ok) {
                const data = await response.json();
                setGifts(data.gifts);
            } else {
                console.error('Error fetching gifts:', response.statusText);
            }
        };

        fetchGifts();
    }, [searchParams]);

    return (
        <div>
            <h1>Recommended Gifts</h1>
            <ul>
                {gifts.length > 0 ? (
                    gifts.map((gift, index) => (
                        <li key={index}>
                            <a href={gift.url} target="_blank" rel="noopener noreferrer">
                                <img src={gift.image} alt={gift.title} style={{ width: '100px', height: '100px' }} />
                                <p>{gift.title}</p>
                                <p>{gift.price}</p>
                            </a>
                        </li>
                    ))
                ) : (
                    <p>No gifts found. Please try again.</p>
                )}
            </ul>
        </div>
    );
};

export default GiftsPage;
