import {ICustomData} from "@/models/ICustomData";

export interface IFormData {
    api_key: string;
    secret: string;
    description: string;
    email: string;
    amount: number;
    hash_sum: string;
    CustomData: ICustomData
}