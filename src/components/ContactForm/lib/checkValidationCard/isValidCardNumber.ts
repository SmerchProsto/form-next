export default function isValidCardNumber(cardNumber: string):boolean {
    // Убираем пробелы из строки, чтобы валидировать непрерывную последовательность цифр
    const cleaned = cardNumber.replace(/\s+/g, '');

    // Проверяем, что в cleaned только цифры
    if (!/^\d+$/.test(cleaned)) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    // Проходим по цифрам в обратном порядке
    for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned[i]);

        // Если нужно удвоить текущую цифру
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }


        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}