

import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const filters = Object.fromEntries(searchParams.entries());

    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'gifts.json'), 'utf8');
    const giftsData = JSON.parse(fileContents);

    const filteredGifts = giftsData.gifts.filter(gift => {
        return Object.entries(filters).every(([key, value]) => {
            return gift[key] && gift[key].toLowerCase() === value.toLowerCase();
        });
    });

    return NextResponse.json({ gifts: filteredGifts });
}
