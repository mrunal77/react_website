/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

export default class Social extends React.Component {
    render() {
        return (
            <div>
                <a href="https://facebook.com/dragon7794" target="_blank">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                &nbsp;
            <a href="https://twitter.com/mrunal7794" target="_blank">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                &nbsp;
            <a href="https://linkedin.com/in/mrunal7794" target="_blank">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                &nbsp;
            <a href="https://github.com/mrunal77" target="_blank">
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>

            </div>
        );
    }
}