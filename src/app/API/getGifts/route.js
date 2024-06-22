import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const filters = Object.fromEntries(searchParams.entries());

        if (Object.keys(filters).length === 0) {
            return NextResponse.json({ error: 'No filters provided' }, { status: 400 });
        }

        const jsonDirectory = path.join(process.cwd(), 'data');
        const fileContents = await fs.readFile(path.join(jsonDirectory, 'gifts.json'), 'utf8');
        const giftsData = JSON.parse(fileContents);

        if (!Array.isArray(giftsData)) {
            throw new Error('Invalid gifts data format');
        }

        const filteredGifts = giftsData.filter(gift => {
            return Object.entries(filters).every(([key, value]) => {
                return gift[key] && gift[key].toString().toLowerCase() === value.toLowerCase();
            });
        });

        const limitedGifts = filteredGifts.slice(0, 50);

        return NextResponse.json({ gifts: limitedGifts });
    } catch (error) {
        console.error('Error processing gift request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}