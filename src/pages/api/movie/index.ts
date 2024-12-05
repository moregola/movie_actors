"use server";

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Movie } from "@/app/Model/Movie";

const API_URL = process.env.NEXT_PUBLIC_API || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { id } = req.query;
    const response = await axios.get<Movie>(
        `${API_URL}/movie/${id}`,
            {headers: {
                'Authorization': `${API_KEY}`,
                'Content-Type': 'application/json',
            }},
      );
    res.status(response.status).json(response.data);

}