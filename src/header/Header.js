import React, { Component } from 'react';
import Exit from './Exit'; 
import NavBar from './NavBar';


class Header extends Component {
    headerStyles() {
        return (
            {
                div: {
                    background: 'green', 
                    // display: 'grid', 
                    // gridTemplateColumns: '', 
                }
            }
        )
    }
    render() {
        const styles = this.headerStyles();
        return (
            <div style={ styles.div }>
                <NavBar/>
                <Exit/>
            </div>
        )
    }
}


export default Header