import styled from "styled-components";
import {Button} from "@mui/material";

export const ContactFormBlock = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px; 
    max-width: 100%;
    padding: 20px;
    margin: auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    @media (max-width: 376px) {
        padding: 10px;
    }

    @media (min-width: 376px) and (max-width: 961px) {
        max-width: 100%;
    }
    @media (min-width: 961px) and (max-width: 1600px) {
        max-width: 600px;
    }

    @media (min-width: 1600px) {
        max-width: 800px;
    }
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    min-width: 0; /* Убирает ограничение на минимальную ширину */

    & label {
        margin-bottom: 8px;
    }

    & input,
    & textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: border-color 0.3s ease;
    }

    & input:focus,
    & textarea:focus {
        border-color: #3f51b5;
        outline: none;
    }
    
    & .invalid {
        border-color: red !important;
    }

    @media (max-width: 376px) {
        & input,
        & textarea {
            font-size: 14px;
        }
    }

    @media (min-width: 376px) and (max-width: 961px) {
        & input,
        & textarea {
            font-size: 16px;
        }
    }

    @media (min-width: 961px) and (max-width: 1600px) {
        & input,
        & textarea {
            font-size: 18px;
        }
    }

    @media (min-width: 1600px) {
        & input,
        & textarea {
            font-size: 20px;
        }
    }
`;

export const SubmitButton = styled(Button)`
    color: #ffffff;
    padding: 6px 50px;
    text-align: center;
    background: #0663EF;
    border-radius: 8px;

    &:hover {
        background: #2079FFFF;
    }

    &:active {
        background: #074498FF;
    }
`;

export const BackButton = styled(Button)`
    color: #0663EF;
    text-align: center;
    padding: 6px 50px;
    background: #0663EF14;
    border-radius: 8px;

    &:hover {
        background: rgba(6, 106, 255, 0.22);
    }

    &:active {
        background: rgba(6, 106, 255, 0.18);
    }
`;

export const FormList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 15px;
    width: 100%;
    &.form-list__btns {
        grid-template-columns: .2fr .2fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Один столбец на мобильных устройствах */
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr; /* Два столбца на планшетах */
    }
`;
