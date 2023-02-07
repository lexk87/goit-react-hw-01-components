import styled from "styled-components";

export const Transaction = styled.table`
    width: 450px;
    margin: 0 auto;
    text-align: center;
    border-collapse: collapse;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Head = styled.thead`
    background-color: #01bcd5;
    color: white;
`;

export const HeadRow = styled.tr`

`;

export const HeadTitle = styled.th`
    width: calc(100% / 3);
    padding: 15px 0;
    font-weight: 500;
    border: 1px solid lightgray;
`;

export const Body = styled.tbody`
    
`;

export const BodyRow = styled.tr`
    :nth-child(2n) {
        background-color: #ebf2f3;
    }
`;

export const BodyData = styled.td`
    padding: 15px 0;
    border: 1px solid lightgray;
    color: #828282;
`;