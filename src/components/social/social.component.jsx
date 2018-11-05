import React from 'react';
import PropTypes from 'prop-types';
import {Footer} from './styled/footer.styled';
import {SocialIcons, Icon} from './styled/social-icons.styled';

export function Social (props) {
    const {networks} = props;
    const icons = networks.map(network => (
        <Icon
            key={network.icon}
            href={network.href}
            className={network.icon}
            color={network.color}
            rel="noopener noreferrer"
            target="_blank&quot;">
            <span className="d-none d-sm-inline">{network.text}</span>
        </Icon>
    ));

    return (
        <Footer>
            <SocialIcons>{icons}</SocialIcons>
        </Footer>
    );
}

Social.propTypes = {
    networks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
