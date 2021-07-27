import { ExpandMoreOutlined } from '@material-ui/icons';
import userEvent from '@testing-library/user-event';
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://source.unsplash.com/100x100/?people,human" title="Gaurav" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
        </div>
    )
}

export default Sidebar;
