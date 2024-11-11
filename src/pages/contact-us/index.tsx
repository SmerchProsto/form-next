import {SectionInfoBlock} from "@/components/shared/lib/SectionInfoBlock/SectionInfoBlock";
import styled from "styled-components";
import ContactForm from "@/components/ContactForm/ui";
import {useState} from "react";
import Head from "next/head";
import {GetServerSideProps} from "next";

const StylizedSectionInfoBlock = styled(SectionInfoBlock)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 40px 0;
    
    & .InfoBlockTitle {
        visibility: hidden;
        position: absolute;
        width: 0;
        height: 0;
    }

    & h2,
    & .InfoBlockMessage {
        font-size: 20px;
        text-align: center;
        margin-bottom: 40px;
    }

    @media (max-width: 961px) {
        & h2,
        & .InfoBlockMessage {
            font-size: 10px;
        }
    }
`
interface Props {
    name: string;
    event: string;
}

export default function ContactUs({name, event}:Props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [message, setMessage] = useState("");
    return (
        <>
            <Head>
                <meta name='title' content='Fundraising' />
                <meta name='description' content='Fundraising for the event' />
                <meta name='keywords' content='Fundraising, form, events' />
                <title>Сбор средств на мероприятие</title>


                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/contact" />
                <meta property="og:title" content="Fundraising" />
                <meta property="og:description" content="Fundraising for the event" />
                <meta property="og:image" content="/Rick-Astley.webp" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="http://localhost:3000/contact" />
                <meta name="twitter:title" content="Fundraising" />
                <meta name="twitter:description" content="Fundraising for the event" />
                <meta name="twitter:image" content="/Rick-Astley.webp" />
            </Head>
            <StylizedSectionInfoBlock>
                <h1 className='InfoBlockTitle'>Сбор средств</h1>
                <h2>{name} собирает на &#34;{event}&#34;</h2>
                {!isConfirmed
                    ? <ContactForm setIsConfirmed={setIsConfirmed} setMessage={setMessage} />
                    : <div className='InfoBlockMessage'>{message}</div>
                }
            </StylizedSectionInfoBlock>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const returnRandomName = () => {
        const firstNames = ["Иван", "Алексей", "Мария", "Ольга", "Сергей", "Екатерина", "Петр", "Анна", "Дмитрий", "Наталья"];
        const lastInitials = ["К.", "С.", "Т.", "И.", "М.", "Р.", "Л.", "В.", "П.", "Ж."];

        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastInitial = lastInitials[Math.floor(Math.random() * lastInitials.length)];

        return `${firstName} ${lastInitial}`;
    };

    const returnRandomEvent = () => {
        const events = [
            "Встреча с клиентом",
            "Презентация продукта",
            "Обсуждение проекта",
            "Командный брифинг",
            "Тренинг по продажам",
            "Стратегическая сессия",
            "Отчет по проекту",
            "Анализ рынка",
            "Подведение итогов",
            "Планирование квартала"
        ];

        return events[Math.floor(Math.random() * events.length)];
    };

    const name = returnRandomName();
    const event = returnRandomEvent();

    return {
        props: { name, event }
    };
};