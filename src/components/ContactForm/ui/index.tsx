import React, { useState } from "react";
import { Container } from '@mui/material';
import {
    BackButton,
    ContactFormBlock,
    FormField, FormList,
    SubmitButton
} from "@/components/ContactForm/lib/styles/index.";
import InputMask from 'react-input-mask-next';
import isValidCardNumber from "@/components/ContactForm/lib/checkValidationCard/isValidCardNumber";
import createHashSum from "@/components/ContactForm/lib/createHashSum/createHashSum";
import {IFormData} from "@/models/IFormData";


interface ContactFormProps {
    setIsConfirmed: (solution:boolean) => void;
    setMessage: (message:string) => void;
    name:string;
    event:string;
}
export default function ContactForm({ setIsConfirmed, setMessage, name, event }: ContactFormProps) {
    const [isInvalidForm, setIsInvalidForm] = useState<boolean>(false);
    const [isValidCard, setIsValidCard] = useState<boolean>(true);
    const [formData, setFormData] = useState<IFormData>({
        api_key: '316b2be8-3475-4462-bd57-c7794d4bdb53',
        secret: "1234567890",
        description: 'описание_платежа',
        email: 'электронная_почта',
        amount: 0,
        hash_sum: '',
        CustomData: {
            name: name,
            event: event,
            cardExists: '',
            cardNumber: '',
            messageToReceiver: '',
            CVV: ''
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            if (name in prev.CustomData) {
                return {
                    ...prev,
                    CustomData: {
                        ...prev.CustomData,
                        [name]: value,
                    }
                };
            }

            return {
                ...prev,
                [name]: value,
            };
        });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        formData.hash_sum = createHashSum(formData.amount, '12312312')
        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.debug('Form submitted successfully');
                const {message} = await response.json();
                setIsConfirmed(true)
                setMessage(message);
                console.debug(message);
            } else {
                setIsInvalidForm(true);
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Container>
            <ContactFormBlock onSubmit={handleSubmit} className="contact-form">
                <FormField className="form-field">
                    <label htmlFor="cardNumber">Номер карты</label>
                    <InputMask
                        mask="9999 9999 9999 9999"
                        placeholder="0000 0000 0000 0000"
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        value={formData.CustomData.cardNumber}
                        onChange={(e) => {
                            handleChange(e);
                            setIsValidCard(isValidCardNumber(e.target.value));
                        }}
                        required
                        className={!isValidCard ? 'invalid' : ''}
                    />
                </FormField>
                <FormList>
                    <FormField className="form-field">
                        <label htmlFor="cardExists">Срок действия</label>
                        <InputMask
                            mask="99/99"
                            placeholder="MM/ГГ"
                            name="cardExists"
                            id="cardExists"
                            value={formData.CustomData.cardExists}
                            onChange={handleChange}
                            required
                            className={isInvalidForm ? 'invalid' : ''}
                        />
                    </FormField>
                    <FormField className="form-field">
                        <label htmlFor="CVV">CVV</label>
                        <InputMask
                            mask="999"
                            placeholder="CVV"
                            type="password"
                            name="CVV"
                            id="CVV"
                            value={formData.CustomData.CVV}
                            onChange={handleChange}
                            required
                            className={isInvalidForm ? 'invalid' : ''}
                        />
                    </FormField>
                </FormList>
                <FormField className="form-field">
                    <label htmlFor="amount">Сумма перевода</label>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        className={isInvalidForm ? 'invalid' : ''}
                    />
                </FormField>
                <FormField className="form-field">
                    <label htmlFor="messageToReceiver">Сообщение получателю</label>
                    <input
                        type="text"
                        name="messageToReceiver"
                        id="messageToReceiver"
                        value={formData.CustomData.messageToReceiver}
                        onChange={handleChange}
                    />
                </FormField>
                <FormList className="form-list__btns">
                    <SubmitButton type="submit" variant="contained" color="primary">
                        Перевести
                    </SubmitButton>
                    <BackButton type="reset">Вернуться</BackButton>
                </FormList>
            </ContactFormBlock>
        </Container>
    );
}
