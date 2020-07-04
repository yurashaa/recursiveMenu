import React, {Fragment} from 'react';

import {MenuItem} from '../MenuItem';
import './Menu.css';

export const Menu = ({items, isActive = true, level = 1}) => {
    return (
        <Fragment>
            {isActive && <ul className='menu'>
                {
                    items.map(item => {
                        return (
                            <li className='menu-item' key={item.id}>
                                <MenuItem item={item} level={level} />
                            </li>
                        );
                    })
                }
            </ul>}
        </Fragment>
    );
};
