import { FC } from 'react';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';

const Contacts: FC = () => {
    return (
        <SideContentContainer>
            <SideContentHeader>
                <span>Contacts</span>
            </SideContentHeader>
        </SideContentContainer>
    );
};

export default Contacts;
