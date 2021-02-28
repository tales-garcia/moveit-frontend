import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useAuth } from '../hooks/auth';

const Container = styled.div`
    background: ${({ theme }) => theme.blue};

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > main {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        padding: 0 6rem;

        > img {
            margin-bottom: 6rem;
        }

        > h1 {
            color: ${({ theme }) => theme.white};
            line-height: 2.5;
        }

        > p {
            color: ${({ theme }) => theme.textHighlight};
            line-height: 1.4;
            font-size: 1rem;

            max-width: 18rem;
            width: 100%;
            margin-bottom: 3rem;

            display: flex;
            align-items: center;
            justify-content: flex-start;

            > img {
                margin-right: 1rem;
            }
        }

        > a {
            width: 100%;
            height: 5rem;
            color: ${({ theme }) => theme.white};
            background-color: #24292E;
            border-radius: 5px;

            font-size: 1.1rem;
            font-weight: 600;

            display: flex;
            align-items: center;
            justify-content: flex-start;

            padding: 0 2rem;

            > img {
                margin-right: 1rem;
            }
        }
    }
`;

export default function Login({ user }) {
    const { query, push } = useRouter();
    const { login } = useAuth();

    useEffect(() => {
        if (user) {
            login(user);
            push('/');
        }
    }, [query]);

    return (
        <Container>
            <img src="/logo-background.svg" alt="Logo" />

            <main>
                <img src="/logo-full-white.svg" alt="Logo" />
                <h1>Bem vindo</h1>
                <p>
                    <img src="/icons/git.svg" alt="Git" />
                    Faça seu login com GitHub para começar.
                </p>
                <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_OAUTH_ID}`}>
                    <img src="/icons/git-white.svg" alt="Git" />
                    Login com GitHub
                </a>
            </main>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { query } = ctx;

    if ("code" in query) {
        const { access_token } = (await axios.post<{ access_token: string; }>(`https://github.com/login/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_OAUTH_ID}&client_secret=${process.env.NEXT_PUBLIC_OAUTH_SECRET}&code=${query.code}`, undefined, {
            headers: {
                Accept: "application/json"
            }
        })).data;

        if (access_token) {
            const user = (await axios.get('https://api.github.com/user', {
                headers: {
                    Authorization: `token ${access_token}`
                }
            })).data;

            return {
                props: {
                    user
                }
            } as any;
        } else {
            return {
                props: {}
            };
        }
    } else {
        return {
            props: {}
        };
    }
}