import {NextApiRequest, NextApiResponse} from 'next';
import path from 'path';
import fs from 'fs';


const readAffiliateLinks = ()=>{
    const filePath = path.join(process.cwd(),'affiliates.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
};


export default (req, res)=>{
    const {zodiacSign, country}=req.query;
    const links=readAffiliateLinks();
    const gifts = links[country]?.[zodiacSign] || [];
    res.status(200).json(gifts);
};

