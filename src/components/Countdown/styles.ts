import styled from 'styled-components';

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