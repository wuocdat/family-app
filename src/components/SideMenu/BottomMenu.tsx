import {
    AccountCircleRounded,
    CommentRounded,
    ContactMailRounded,
    PersonOutlined,
    SettingsRounded,
} from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { FC, SyntheticEvent } from 'react';

interface BottomProps {
    handleChange: (
        event: SyntheticEvent<Element, Event>,
        newAlignment: string,
    ) => void;
    alignment: string;
}

const BottomMenu: FC<BottomProps> = ({ alignment, handleChange }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                value={alignment}
                onChange={(event, newValue) => {
                    handleChange(event, newValue);
                }}
            >
                <BottomNavigationAction
                    value="profile"
                    label="Profile"
                    icon={<PersonOutlined />}
                />
                <BottomNavigationAction
                    value="chats"
                    label="Chats"
                    icon={<CommentRounded />}
                />
                <BottomNavigationAction
                    value="contacts"
                    label="Contacts"
                    icon={<ContactMailRounded />}
                />
                <BottomNavigationAction
                    value="settings"
                    label="Settings"
                    icon={<SettingsRounded />}
                />
                <BottomNavigationAction
                    value="user"
                    label="User"
                    icon={<AccountCircleRounded />}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomMenu;
