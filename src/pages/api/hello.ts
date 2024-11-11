'use server'
import type {NextApiRequest, NextApiResponse} from "next";
import {ICustomData} from "@/models/ICustomData";
import {IFormData} from "@/models/IFormData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const allData:IFormData = req.body;
  const CustomData:ICustomData = allData.CustomData;

  if (allData.amount === 0) {
    return res.status(400).send({message: 'amount is required'});
  }

  if (!CustomData || typeof CustomData !== 'object') {
    return res.status(400).send({message: 'CustomData not found'});
  }

  if (!isFieldsValid([CustomData.CVV, CustomData.cardExists, CustomData.cardNumber])) {
    return res.status(400).send({message: 'CustomData not valid'});
  }

  res.status(200).json({message: allData});
}


function isFieldsValid(arrayValues:Array<string>): boolean {
  return arrayValues.every((item) => {
    return !item.includes('_') && item.trim().length > 0;
  })
}
