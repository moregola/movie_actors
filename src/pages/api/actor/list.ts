"use server";

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BasicResponse } from "@/app/Model/BasicResponse";
import { Actor } from "@/app/Model/Actor";

const API_URL = process.env.NEXT_PUBLIC_API || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    console.log(`Bearer ${API_KEY}`)
    const response = await axios.get<BasicResponse<Actor[]>>(
      `${API_URL}/actor/all`,
      {
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
      }
    );
    res.status(response.status).json(response.data.content);
  } catch (error) {
    res.status(400).json(error);
  }
}
