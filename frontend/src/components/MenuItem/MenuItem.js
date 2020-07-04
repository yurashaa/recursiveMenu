import React, {Fragment, useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import {Menu} from '../Menu';
import './MenuItem.css';

export const MenuItem = ({ level, item: {title, tree} }) => {

    const [isActive, setIsActive] = useState(false);
    const [isSubMenuActive, setIsSubMenuActive] = useState(false);

    const activateHandler = () => {
        setIsActive(!isActive);
    };

    const subMenuActiveHandler = () => {
        setIsSubMenuActive(!isSubMenuActive);
    };


    const itemStyle = {
        background: isActive ? 'dimgray' : '',
        padding: isActive ? '5px' : '',
        fontWeight: 800/level,
    };

    return (
        <Fragment>
            <a  href='#'
                style={itemStyle}
                onMouseOver={activateHandler}
                onMouseOut={activateHandler}
                onClick={subMenuActiveHandler}
            >
                {title}
                {!!tree.length && (
                    isSubMenuActive ?
                        <KeyboardArrowUpIcon/> :
                        <KeyboardArrowDownIcon />
                    )}
            </a>
            {!!tree.length && <Menu items={tree} isActive={isSubMenuActive} level={level+1}/>}
        </Fragment>
    )
};

