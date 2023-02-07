import PropTypes from "prop-types";

import {
    FriendItem,
    Status,
    Avatar,
    Name,
} from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <FriendItem>
        <Status isOnline={isOnline} />
        <Avatar src={avatar} alt={name} width="80" />
        <Name>{name}</Name>
    </FriendItem>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};