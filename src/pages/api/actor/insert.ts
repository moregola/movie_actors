"use server";

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Actor } from "@/app/Model/Actor";
import { BasicResponse } from "@/app/Model/BasicResponse";

const API_URL = process.env.NEXT_PUBLIC_API || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { actors } = req.query;
    const response = await axios.post<BasicResponse<Actor>>(
      `${API_URL}/actor`,
      actors,
      {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
      }
    );
    res.status(response.status).json(response.data.content);
  } catch (error) {
    res.status(400).json(error);
  }
}
