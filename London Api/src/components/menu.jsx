import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';


class MenuComponent extends Component {

    render() {
        return (
            <Menu>
                <Menu.Item  >
                    <Link to="/">Main</Link>

                </Menu.Item>
            </Menu>

        );
    }
}



export default MenuComponent;










