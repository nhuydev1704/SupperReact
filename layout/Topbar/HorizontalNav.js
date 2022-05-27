import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    NAV_STYLE_ABOVE_HEADER,
    NAV_STYLE_BELOW_HEADER,
    NAV_STYLE_DEFAULT_HORIZONTAL,
    NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
} from '../../app-constants/ThemeSettings';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
        case NAV_STYLE_DEFAULT_HORIZONTAL:
            return 'gx-menu-horizontal gx-submenu-popup-curve';
        case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
            return 'gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve';
        case NAV_STYLE_BELOW_HEADER:
            return 'gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve';
        case NAV_STYLE_ABOVE_HEADER:
            return 'gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve';
        default:
            return 'gx-menu-horizontal';
    }
};

function HorizontalNav() {
    const settings = useSelector((state) => state.settings);
    const user = useSelector((state) => state.auth.user);

    const { pathname, navStyle } = settings;

    const selectedKeys = pathname.substr(1);
    console.log('🚀 ~ file: HorizontalNav.js ~ line 38 ~ HorizontalNav ~ selectedKeys', selectedKeys);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    console.log('🚀 ~ file: HorizontalNav.js ~ line 39 ~ HorizontalNav ~ defaultOpenKeys', defaultOpenKeys);
    return (
        <Menu defaultOpenKeys={[defaultOpenKeys]} selectedKeys={[selectedKeys]} mode="horizontal">
            <SubMenu className={() => getNavStyleSubMenuClass(navStyle)} key="main" title="Trang chủ">
                <SubMenu
                    className="gx-menu-horizontal"
                    key=""
                    title={
                        <span>
                            <a>
                                <i className="icon icon-dasbhoard" />
                                Dashboard
                            </a>
                        </span>
                    }
                >
                    <Menu.Item key="main/dashboard/crypto">
                        <Link passHref href="/main/dashboard/crypto">
                            <div>
                                <a>
                                    <i className="icon icon-crypto" />
                                    Crypto
                                </a>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="main/dashboard/crm">
                        <Link passHref href="/main/dashboard/crm">
                            <div>
                                <a>
                                    <i className="icon icon-crm" />
                                    Crm
                                </a>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="main/dashboard/listing">
                        <Link passHref href="/main/dashboard/listing">
                            <div>
                                <a>
                                    <i className="icon icon-listing-dbrd" />
                                    Lisyting
                                </a>
                            </div>
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="main/widgets">
                    <Link passHref href="/main/widgets">
                        <div>
                            <a>
                                <i className="icon icon-widgets" />
                                widgets
                            </a>
                        </div>
                    </Link>
                </Menu.Item>

                <Menu.Item key="main/metrics">
                    <Link passHref href="/main/metrics">
                        <div>
                            <a>
                                <i className="icon icon-apps" />
                                metrics
                            </a>
                        </div>
                    </Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default HorizontalNav;
