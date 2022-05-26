import React, { useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CustomScrollbars from 'components/CustomScrollbars';

import AppLink from 'components/AppLink';

import { SettingActions } from 'app-redux/settings';
import Auxiliary from 'components/Auxiliary';
import SidebarLogo from './SidebarLogo';
import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';
import {
    NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    THEME_TYPE_LITE,
} from 'app-constants/ThemeSettings';

const items = [
    {
        label: 'Trang chủ',
        type: 'group',
        children: [
            {
                label: 'Dashboard',
                key: '',
                icon: <i className="icon icon-dasbhoard" />,
                children: [
                    { label: 'Crypto', key: 'main/dashboard/crypto', icon: <i className="icon icon-crypto" /> },
                    { label: 'CRM', key: 'main/dashboard/crm', icon: <i className="icon icon-crypto" /> },
                    { label: 'Listing', key: 'main/dashboard/listing', icon: <i className="icon icon-crypto" /> },
                ],
            },
        ],
    },
];

function SidebarContent() {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector((state) => state.auth.user);
    const settings = useSelector((state) => state.settings);
    const { themeType, navStyle, pathname } = settings;

    useEffect(() => {
        dispatch(SettingActions.setPathname(router.pathname));
    }, [router.pathname, dispatch]);

    const getNoHeaderClass = (navStyle) => {
        if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
            return 'gx-no-header-notifications';
        }
        return '';
    };
    const getNavStyleSubMenuClass = (navStyle) => {
        if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
            return 'gx-no-header-submenu-popup';
        }
        return '';
    };

    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];

    return (
        <Auxiliary>
            <SidebarLogo />
            <div className="gx-sidebar-content">
                <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
                    <UserProfile />
                    <AppsNavigation />
                </div>
                <CustomScrollbars className="gx-layout-sider-scrollbar">
                    <div className="gx-menu-group">
                        <Menu
                            defaultOpenKeys={[defaultOpenKeys]}
                            selectedKeys={[selectedKeys]}
                            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                            mode="inline"
                            items={items}
                        />
                    </div>
                </CustomScrollbars>
            </div>
        </Auxiliary>
    );
}

export default SidebarContent;
