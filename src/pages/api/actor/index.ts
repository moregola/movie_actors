"use server";

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BasicResponse } from "@/app/Model/BasicResponse";
import { Actor } from "@/app/Model/Actor";

const API_URL = process.env.NEXT_PUBLIC_API || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { id } = req.query;
    const response = await axios.get<BasicResponse>(
        `${API_URL}/actor/${id}`,
            {headers: {
                'Authorization': `${API_KEY}`,
                'Content-Type': 'application/json',
            }},
      );
      const data = response.data.content as Actor;
      res.status(response.status).json(data);    
}