import React, { Component } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react';

class FixedMenu extends Component {
    render() {
        return (
            <Menu fixed='top' size='large'>
            <Container>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item className='item'>
                    <Button as='a'>Log in</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as='a' primary>Sign Up</Button>
                </Menu.Item>
                </Menu.Menu>
            </Container>
            </Menu>
        );
    }
}

export default FixedMenu;
