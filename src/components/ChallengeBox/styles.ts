import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background: ${({ theme }) => theme.white};

    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const ChallengeNotActive = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    > strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    > p {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 70%;
        margin-top: 3rem;

        > img {
            margin-bottom: 1rem;

        }
    }
`;

export const ChallengeActive = styled(motion.div)`
    height: 100%;

    display: flex;
    flex-direction: column;

    > header {
        color: ${({ theme }) => theme.blue};
        font-weight: 600;
        font-size: 1.5rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.grayLine};
    }

    > main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > strong {
            font-size: 2rem;
            font-weight: 600;
            color: ${({ theme }) => theme.title};
            margin: 1.5rem 0 1rem;
        }

        > p {
            line-height: 1.5;
        }
    }

    > footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        > button {
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            color: ${({ theme }) => theme.white};

            font-size: 1rem;
            font-weight: 600;

            transition: filter 20s;

            &:hover {
                filter: brightness(.8);
            }
        }

        > button:last-child {
            background: ${({ theme }) => theme.green};
        }
        > button:first-child {
            background: ${({ theme }) => theme.red};
        }
    }
`;