import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import ContactsSearch from '../../components/SearchInput/ContactsSearch';
import UserGroupNameItem from '../../components/UserItem/UserNameGroupItem';
import { GroupType, UserInfo } from '../../types';
import ContactModal from './Modal/ContactModal';
import UserService from '../../services/users/user.service';
import TokenService from '../../services/auth/token.service';

const Contacts: FC = () => {
    const currentUser = TokenService.getUser();

    const [openModal, setOpenModal] = useState(false);
    const [users, setUsers] = useState<UserInfo[]>();
    const [userGroups, setUserGroups] = useState<GroupType[]>();

    const fetchUsers = async () => {
        try {
            const { data } = await UserService.getAllUsers(currentUser._id);
            if (data) {
                setUsers(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (users) {
            const groups = users.reduce(
                (prev: GroupType[], current: UserInfo) => {
                    const firstLetter = current.username.slice(0, 1);
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
                },
                [],
            );
            groups.sort((a, b) => a.type.localeCompare(b.type));
            setUserGroups(groups);
        }
    }, [users]);

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
                {userGroups &&
                    userGroups.map((group, index) => {
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
