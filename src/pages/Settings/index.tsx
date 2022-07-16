import { FC } from 'react';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';

const Settings: FC = () => {
    return (
        <SideContentContainer>
            <SideContentHeader>
                <span>Chats</span>
            </SideContentHeader>
        </SideContentContainer>
    );
};

export default Settings;
