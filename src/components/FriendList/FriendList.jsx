import PropTypes from "prop-types";
import { Friends } from "./FriendList.styled";
import { FriendListItem } from "components";

export const FriendList = ({ friends }) => (
    <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
            />
        ))}
    </Friends>
);

FriendList.propTypes = {
    friends: PropTypes.array,
};