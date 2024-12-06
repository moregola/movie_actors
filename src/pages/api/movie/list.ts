"use server";

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Movie } from "@/app/Model/Movie";
import { BasicResponse } from "@/app/Model/BasicResponse";

const API_URL = process.env.NEXT_PUBLIC_API || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log(API_KEY)
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    console.log(`Bearer ${API_KEY}`)

    const response = await axios.get<BasicResponse<Movie[]>>(
      `${API_URL}/movie/all`,
      {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        },
      }
    );

    console.log(response.headers)
    res.status(response.status).json(response.data.content);
  } catch (error: any) {
    console.error("Error during API request:");
    console.error("Request headers:", error.config.headers); // Debug headers
    console.error("Response status:", error.response?.status);
    console.error("Response data:", error.response?.data);
    res.status(400).json(error);
    console.log(error)
  }
}
