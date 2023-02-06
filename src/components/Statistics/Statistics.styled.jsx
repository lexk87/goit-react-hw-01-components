import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 40px;
    width: 500px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Title = styled.h2`
    padding: 40px 0;
    text-transform: uppercase;
`;

export const StatList = styled.ul`
    display: flex;
    width: 100%;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 5);
    padding: 20px 10px;
    background-color: ${color => getRandomHexColor()};
`;

export const Label = styled.span`
    font-weight: 500;
    /* color: white; */
    margin-bottom: 5px;
`;

export const Percentage = styled.span`
    font-weight: 700;
    font-size: 24px;
    /* color: white; */
`;