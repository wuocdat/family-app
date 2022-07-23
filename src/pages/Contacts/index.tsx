import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import ContactsSearch from '../../components/SearchInput/ContactsSearch';
import UserGroupNameItem from '../../components/UserItem/UserNameGroupItem';
import { Users } from '../../config/constants';
import { User, GroupType } from '../../types';
import ContactModal from './Modal/ContactModal';

const userGroups = Users.reduce((prev: GroupType[], current: User) => {
    const firstLetter = current.name.slice(0, 1);
    let isExisted = false;
    const result = prev.map((item) => {
        if (item.type === firstLetter) {
            item.data.push(current);
            isExisted = true;
        }
        return item;
    });
    return isExisted
        ? result
        : [...prev, { type: firstLetter, data: [current] }];
}, []);

// sort group array by alphabetically
userGroups.sort((a, b) => a.type.localeCompare(b.type));

const Contacts: FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleClick = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <SideContentContainer>
            <SideContentHeader>
                <span>Contacts</span>
                <IconButton onClick={handleClick}>
                    <PersonAddAltOutlinedIcon />
                </IconButton>
                <ContactModal open={openModal} onClose={handleCloseModal} />
            </SideContentHeader>

            <ContactsSearch />

            <Box sx={{ width: '100%', padding: 3, overflow: 'auto' }}>
                {userGroups.map((group, index) => {
                    return (
                        <UserGroupNameItem
                            key={index}
                            type={group.type}
                            data={group.data}
                        />
                    );
                })}
            </Box>
        </SideContentContainer>
    );
};

export default Contacts;
