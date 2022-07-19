import { Box, capitalize, Typography } from '@mui/material';
import { FC } from 'react';
import { GroupType } from '../../types';
import UserNameItem from './UserNameItem';

const UserGroupNameItem: FC<GroupType> = ({ type, data }) => {
    return (
        <Box sx={{ paddingTop: 4 }}>
            <Typography color="primary">{capitalize(type)}</Typography>
            <Box>
                {data.map((user, index) => {
                    return (
                        <UserNameItem
                            key={index}
                            id={user.id}
                            name={user.name}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default UserGroupNameItem;
