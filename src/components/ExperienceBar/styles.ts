import styled from 'styled-components';

interface ContainerProps {
    percentage: number;
}

export const Container = styled.header<ContainerProps>`
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
            width: ${({ percentage }) => percentage}%;
            background-color: ${({ theme }) => theme.green};
            top: 0;
            bottom: 0;
            left: 0;
            border-radius: 4px;
        }

        > span {
            position: absolute;
            top: 12px;
            left: ${({ percentage }) => percentage}%;
            transform: translateX(-50%);
        }
    }
`;