import React from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundry.styles';

class ErrorBoundry extends React.Component {

    constructor () {
        super();
        this.state = {
            hasError: false
        }
    }


    static getDerivedStateFromError(error) {
        // process the error
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
                    <ErrorImageText>Sorry, this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }


}

export default ErrorBoundry;