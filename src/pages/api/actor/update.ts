"use server";

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BasicResponse } from "@/app/Model/BasicResponse";
import StatusResponse from "@/app/Model/Status";

const API_URL = process.env.NEXT_PUBLIC_API || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { actors, id } = req.query;
    const response = await axios.put<BasicResponse<StatusResponse>>(
        `${API_URL}/actor/${id}`,
        actors,
            {headers: {
                'Authorization': `${API_KEY}`,
                'Content-Type': 'application/json',
            }},
      );
    res.status(response.status).json(response.data.content);
}