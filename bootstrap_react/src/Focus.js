import React, { Component } from 'react';

class Focus extends Component {
    componentDidMount() {
        window.addEventListener('keypress', (e) => {
            if (e.keyCode === 6) this.input.focus();
        })
    }
    render() {
        return (
            <div>
                <input type='text' ref={(node) => this.input = node} />
            </div>
        );
    }
}

export default Focus;