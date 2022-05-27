import React from 'react';
import { SketchPicker, ChromePicker } from 'react-color';

const noop = () => {};

const pickers = {
    chrome: ChromePicker,
    sketch: SketchPicker,
};

const ColorPicker = (props) => {
    const { small, type, position } = props;
    const [color, setColor] = React.useState(props?.color);
    const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

    const Picker = pickers[type];

    const styles = {
        color: {
            display: 'inline-block',
            width: small ? '16px' : '120px',
            height: small ? '16px' : '24px',
            verticalAlign: 'middle',
            marginRight: '8px',
            borderRadius: '2px',
            padding: '2px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            background: color,
        },
        swatch: {
            padding: '4px',
            display: 'inline-block',
            cursor: 'pointer',
        },
        popover: {
            position: 'absolute',
            zIndex: '2',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
        wrapper: {
            position: 'inherit',
            zIndex: '100',
        },
    };

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(!false);
    };

    const handleChange = (color) => {
        setColor(color.hex);
        props.onChange(color.hex, color);
    };

    const handleChangeComplete = (color) => {
        setColor(color.hex);
        props.onChangeComplete(color.hex);
    };

    if (position === 'top') {
        styles.wrapper.transform = 'translateY(-100%)';
        styles.wrapper.paddingBottom = 8;
    }
    const swatch = (
        <div style={styles.swatch} onClick={handleClick}>
            <span style={styles.color} />
            <span> {props.children}</span>
        </div>
    );
    const picker = displayColorPicker ? (
        <div style={styles.popover}>
            <div style={styles.cover} onClick={handleClose} />
            <div style={styles.wrapper}>
                <Picker {...props} color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
            </div>
        </div>
    ) : null;

    if (position === 'top') {
        return (
            <div>
                {picker}
                {swatch}
            </div>
        );
    }
    return (
        <div>
            {swatch}
            {picker}
        </div>
    );
};

export default ColorPicker;
