import PropTypes from "prop-types";

import {
    Friends,
    FriendListItem,
    Status,
    Avatar,
    Name,
} from "./FriendList.styled";

export const FriendList = ({ friends }) => (
    <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem key={id}>
                <Status isOnline={isOnline} />
                <Avatar src={avatar} alt={name} width="80" />
                <Name>{name}</Name>
            </FriendListItem>
        ))}
    </Friends>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    ),
};