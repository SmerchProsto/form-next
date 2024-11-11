import React, { useState } from "react";
import { Container } from '@mui/material';
import {
    BackButton,
    ContactFormBlock,
    FormField, FormList,
    SubmitButton
} from "@/components/ContactForm/lib/styles/index.";
import InputMask from 'react-input-mask-next';


interface ContactFormProps {
    setIsConfirmed: (solution:boolean) => void;
    setMessage: (message:string) => void;
}
export default function ContactForm({ setIsConfirmed, setMessage }: ContactFormProps) {
    const [formData, setFormData] = useState({
        cardNumber: '',
        email: '',
        message: '',
    });

    const [touched, setTouched] = useState({
        cardNumber: false,
        email: false,
        message: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                setTouched({ cardNumber: false, email: false, message: false });
            } else {
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
                        value={formData.cardNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={touched.cardNumber && !formData.cardNumber  ? 'invalid' : ''}
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
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={touched.email && !formData.email ? 'invalid' : ''}
                        />
                    </FormField>
                    <FormField className="form-field">
                        <label htmlFor="CVV">CVV</label>
                        <InputMask
                            mask="999"
                            placeholder="CVV"
                            type="password"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={touched.email && !formData.email ? 'invalid' : ''}
                        />
                    </FormField>
                </FormList>
                <FormField className="form-field">
                    <label htmlFor="moneycount">Сумма перевода</label>
                    <input
                        type="text"
                        name="moneycount"
                        id="moneycount"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={touched.email && !formData.email ? 'invalid' : ''}
                    />
                </FormField>
                <FormField className="form-field">
                    <label htmlFor="messageToReceiver">Сообщение получателю</label>
                    <input
                        type="text"
                        name="messageToReceiver"
                        id="messageToReceiver"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={touched.email && !formData.email ? 'invalid' : ''}
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
