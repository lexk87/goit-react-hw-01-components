import styled from "styled-components";

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    width: 100%;
    height: 100px;
    padding: 10px 20px;
    gap: 20px;
    box-sizing: border-box;
`;

export const Status = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${p => (p.isOnline ? "green" : "red")};
    border-radius: 50%;
`;

export const Avatar = styled.img`
    width: 80px;
`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 24px;
`;