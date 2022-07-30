import {
    AccountCircleRounded,
    CommentRounded,
    ContactMailRounded,
    PersonOutlined,
    SettingsRounded,
} from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useState } from 'react';

const BottomMenu = () => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Recents"
                    icon={<PersonOutlined />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    icon={<CommentRounded />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    icon={<ContactMailRounded />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    icon={<SettingsRounded />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    icon={<AccountCircleRounded />}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomMenu;
