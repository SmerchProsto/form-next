'use server'
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {name, email, message} = req.body;
  console.log('Name: ', name);
  console.log('Email: ', email);
  console.log('Message: ', message);
  res.status(200).json({message: `Thank you for your interest, ${name}`});
}
