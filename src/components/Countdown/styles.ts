import styled, { css } from 'styled-components';

interface CycleButtonProps {
    isActive?: number;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${({ theme }) => theme.title};

    > span {
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }

    > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: ${({ theme }) => theme.white};

        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;

        > span {
            flex: 1;

            & + span {
                border-left: 1px solid #f0f1f3;
            }
        }
    }
`;

export const CycleButton = styled.button<CycleButtonProps>`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};

    font-size: 1.5rem;
    font-weight: 600;

    transition: background-color .2s;

    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.darkBlue};
    }

    ${({ isActive, theme }) => isActive && css`
        background: ${theme.white};
        color: ${theme.title};

        &:not(:disabled):hover {
            background: ${theme.red};
            color: ${theme.white};
        }
    `}

    ${({ disabled, theme }) => disabled && css`
        background: ${theme.white};
        color: ${theme.text};
        cursor: not-allowed;
    `}
`;