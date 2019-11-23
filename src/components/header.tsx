import * as React from 'react';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    About
                </li>
                <li className="nav-item ">
                    Members
                </li>
            </ul>
        </div>
    );
}