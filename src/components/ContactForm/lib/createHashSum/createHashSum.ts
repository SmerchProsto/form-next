import crypto from 'crypto';

export default function createHashSum(amount: number, transaction: string): string {
    const apiKey = '316b2be8-3475-4462-bd57-c7794d4bdb53';
    const secretKey = '1234567890';

    // Формируем строку для хеширования
    const dataString = `${apiKey}${transaction}${Math.round(amount * 100)}${secretKey}`;

    // Вычисляем хеш SHA-256
    return crypto.createHash('sha256').update(dataString).digest('hex');
}