'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const GiftsPage = () => {
    const searchParams = useSearchParams();
    const [gifts, setGifts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGifts = async () => {
            setLoading(true);
            setError(null);
            try {
                const queryString = searchParams.toString();
                const response = await fetch(`/api/getGifts?${queryString}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setGifts(data.gifts);
            } catch (e) {
                console.error('Error fetching gifts:', e);
                setError('Failed to fetch gifts. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchGifts();
    }, [searchParams]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Recommended Gifts</h1>
            {gifts.length > 0 ? (
                <ul>
                    {gifts.map((gift, index) => (
                        <li key={gift.id || index}>
                            <a href={gift.url} target="_blank" rel="noopener noreferrer">
                                {gift.image && <img src={gift.image} alt={gift.title} style={{ width: '100px', height: '100px' }} />}
                                <p>{gift.title}</p>
                                <p>{gift.price}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No gifts found. Please try again.</p>
            )}
        </div>
    );
};

export default GiftsPage;