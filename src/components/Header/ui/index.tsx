'use client'
import styled from "styled-components";
import CenteredContainer from "@/components/shared/ui/CenteredContainer/ui";
import A from "@/components/shared/ui/A/ui";
import BlackButton from "@/components/shared/ui/BlackButton/ui";
import { useRouter } from 'next/router';
const HeaderBlock = styled.header`
    border-bottom: 1px solid rgb(217, 217, 217);
`;
const HeaderNavigation = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
`;
const HeaderLogo = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

const NavLinks = styled.nav`
    display: flex;
`;

export default function Header() {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    return (
        <HeaderBlock>
            <CenteredContainer>
                <HeaderNavigation>
                    <HeaderLogo>
                        {!isHomePage
                            ? <A linkAddress="/" text="Some Company" />
                            : <span>Some Company</span>
                        }
                    </HeaderLogo>
                    <NavLinks>
                        <BlackButton>
                            Обратная связь
                        </BlackButton>
                    </NavLinks>
                </HeaderNavigation>
            </CenteredContainer>
        </HeaderBlock>
    )
}
