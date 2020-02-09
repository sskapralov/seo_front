import React, { Component } from 'react';


class Exit extends Component {
    exitStyles() {
        return (
            {
                div: {
                    float: 'right', 
                }, 
                // span: {
                //     textAlign: 'center',
                // }
            }
        )
    }
    render() {
        const styles = this.exitStyles();
        return (
            <div style={ styles.div }>
                <span style={styles.span}>Exit</span>
            </div>
        )
    }
}


export default Exit