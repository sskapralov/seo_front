import React, { Component } from 'react';


class NavBar extends Component {
    navBarStyles() {
        return (
            {
                div: {
                    float: 'left', 
                },
                ul: {
                    // listType: 'none', 
                }, 
                li: {
                    display: 'inline', 
                    padding: '0.2rem', 
                }
            }
        )
    }
    render() {
        const styles = this.navBarStyles();
        return (
            <div style={ styles.div }>
                <ul style={ styles.ul }>
                    <li style={ styles.li }>Projects</li>
                    <li style={ styles.li }>Other</li>
                </ul>
            </div>
        )
    }
}


export default NavBar