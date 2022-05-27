import { Button, Drawer, message, Radio } from 'antd';
import {
    LAYOUT_TYPE_BOXED,
    LAYOUT_TYPE_FRAMED,
    LAYOUT_TYPE_FULL,
    NAV_STYLE_ABOVE_HEADER,
    NAV_STYLE_BELOW_HEADER,
    NAV_STYLE_DARK_HORIZONTAL,
    NAV_STYLE_DEFAULT_HORIZONTAL,
    NAV_STYLE_DRAWER,
    NAV_STYLE_FIXED,
    NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
    NAV_STYLE_MINI_SIDEBAR,
    NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    THEME_TYPE_DARK,
    THEME_TYPE_LITE,
    THEME_TYPE_SEMI_DARK,
} from 'app-constants/ThemeSettings';
import { SettingActions } from 'app-redux/settings';
import Auxiliary from 'components/Auxiliary';
import CustomScrollbars from 'components/CustomScrollbars';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Customizer = () => {
    const [isCustomizerOpened, setIsCustomizerOpened] = React.useState(false);

    const settings = useSelector((state) => state.settings);
    const { themeType, width, colorSelection, navStyle, layoutType } = settings;

    const dispatch = useDispatch();

    const toggleCustomizer = () => {
        setIsCustomizerOpened(!isCustomizerOpened);
    };

    const handleColorChange = (varname, color) => {
        if (varname) vars[varname] = color;
        window.less
            .modifyVars(vars)
            .then(() => {
                message.success(`Cập nhật thành công`);
                setVars(vars);
                localStorage.setItem('app-theme', JSON.stringify(vars));
            })
            .catch((error) => {
                message.error(`Failed to update theme`);
            });
    };

    const onThemeTypeChange = (e) => {
        dispatch(SettingActions.setThemeType(e.target.value));
        // this.props.setThemeType(e.target.value);
    };

    const getNavStyles = (navStyle) => {
        return (
            <ul className="gx-nav-option gx-list-inline">
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_FIXED));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_FIXED && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/fixed.png').default.src} alt="fixed" />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_MINI_SIDEBAR));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_MINI_SIDEBAR && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/mini sidebar.png').default.src} alt="mini sidebar" />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_DRAWER));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_DRAWER && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/drawer nav.png').default.src} alt="drawer nav" />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_NO_HEADER_MINI_SIDEBAR));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && 'active'}`}
                    >
                        <img
                            src={require('assets/images/layouts/no header mini sidebar.png').default.src}
                            alt="no hader mini sidebar"
                        />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR && 'active'}`}
                    >
                        <img
                            src={require('assets/images/layouts/vertical no header.png').default.src}
                            alt="vertical no header"
                        />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_DEFAULT_HORIZONTAL));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_DEFAULT_HORIZONTAL && 'active'}`}
                    >
                        <img
                            src={require('assets/images/layouts/default horizontal.png').default.src}
                            alt="default horizontal"
                        />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_DARK_HORIZONTAL));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_DARK_HORIZONTAL && 'active'}`}
                    >
                        <img
                            src={require('assets/images/layouts/dark horizontal.png').default.src}
                            alt="dark horizontal"
                        />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_INSIDE_HEADER_HORIZONTAL));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL && 'active'}`}
                    >
                        <img
                            src={require('assets/images/layouts/inside header horizontal.png').default.src}
                            alt="inside header horizontal"
                        />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_BELOW_HEADER));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_BELOW_HEADER && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/below header.png').default.src} alt="below header" />
                    </span>
                </li>

                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onNavStyleChange(NAV_STYLE_ABOVE_HEADER));
                        }}
                        className={`gx-pointer ${navStyle === NAV_STYLE_ABOVE_HEADER && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/top to header.png').default.src} alt="top to header" />
                    </span>
                </li>
            </ul>
        );
    };

    const getLayoutsTypes = (layoutType) => {
        return (
            <ul className="gx-layout-option gx-list-inline">
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onLayoutTypeChange(LAYOUT_TYPE_FRAMED));
                        }}
                        className={`gx-pointer ${layoutType === LAYOUT_TYPE_FRAMED && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/framed.png').default.src} alt="framed" />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onLayoutTypeChange(LAYOUT_TYPE_FULL));
                        }}
                        className={`gx-pointer ${layoutType === LAYOUT_TYPE_FULL && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/full width.png').default.src} alt="full width" />
                    </span>
                </li>
                <li>
                    <span
                        onClick={() => {
                            dispatch(SettingActions.onLayoutTypeChange(LAYOUT_TYPE_BOXED));
                        }}
                        className={`gx-pointer ${layoutType === LAYOUT_TYPE_BOXED && 'active'}`}
                    >
                        <img src={require('assets/images/layouts/boxed.png').default.src} alt="boxed" />
                    </span>
                </li>
            </ul>
        );
    };

    React.useEffect(() => {
        if (themeType === THEME_TYPE_DARK) {
            document.body.classList.add('dark-theme');
        } else if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
        }
    }, [themeType]);

    // customize content
    const getCustomizerContent = () => {
        return (
            <CustomScrollbars className="gx-customizer">
                <div className="gx-customizer-item">
                    <h6 className="gx-mb-3 gx-text-uppercase">Giao diện</h6>
                    <Radio.Group value={themeType} onChange={onThemeTypeChange}>
                        <Radio.Button value={THEME_TYPE_LITE}>LITE</Radio.Button>
                        <Radio.Button value={THEME_TYPE_SEMI_DARK}>SEMI DARK</Radio.Button>
                        <Radio.Button value={THEME_TYPE_DARK}>DARK</Radio.Button>
                    </Radio.Group>
                </div>

                <h6 className="gx-mb-3 gx-text-uppercase">THANH ĐIỀU HƯỚNG</h6>

                {getNavStyles(navStyle)}

                <h6 className="gx-mb-3 gx-text-uppercase">BỐ CỤC</h6>

                {getLayoutsTypes(layoutType)}
            </CustomScrollbars>
        );
    };

    return (
        <Auxiliary>
            <Drawer placement="right" closable={false} onClose={toggleCustomizer} visible={isCustomizerOpened}>
                {getCustomizerContent()}
            </Drawer>
            <div className="gx-customizer-option">
                <Button type="primary" onClick={toggleCustomizer}>
                    <i className="icon icon-setting fxicon-hc-spin gx-d-block" />
                </Button>
            </div>
        </Auxiliary>
    );
};

export default Customizer;
