import { NextApiRequest, NextApiResponse } from 'next';
import helpers from '../../data/helpers';

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
    const data = helpers.getAll();
    // console.log('data.ts', data);
    res.status(200).json({ data });
}