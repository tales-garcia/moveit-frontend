import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;

    > span {
        font-size: 1rem;
    }

    > div {
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: ${({ theme }) => theme.grayLine};
        margin: 0 1.5rem;
        position: relative;

        > div {
            position: absolute;
            height: 100%;
            width: 50%;
            background-color: ${({ theme }) => theme.green};
            top: 0;
            bottom: 0;
            left: 0;
            border-radius: 4px;
        }

        > span {
            position: absolute;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;