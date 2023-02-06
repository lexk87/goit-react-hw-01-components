import styled from "styled-components";

export const ProfileCard = styled.div`
    margin: 0 auto 40px;
    width: 300px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

export const Avatar = styled.img`
    width: 120px;
    margin-bottom: 20px;
`;

export const Name = styled.p`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    font-weight: 500;
    color: darkgray;
`;

export const Location = styled.p`
    font-weight: 500;
    color: darkgray;
`;

export const Stats = styled.ul`
    display: flex;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
    padding: 20px 5px;
    background-color: #f3f6f9;
    border-top: 1px solid lightgray;

    :not(:last-child) {
        border-right: 1px solid lightgray;
    }
`;

export const Label = styled.span`
    margin-bottom: 5px;
    font-weight: 500;
    color: darkgray;
`;

export const Quantity = styled.span`
    font-weight: 700;
`;