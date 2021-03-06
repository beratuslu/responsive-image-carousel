import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Card = (props) => {
    const {id, webformatURL, tags, largeImageURL} = props.element;
    const {active} = props;
    return (
        <div id={`card`} className={classNames('card', { active })}>
            <img src={webformatURL} alt={tags} />
            <div className="details">
                <span className="index">{id}</span>
                <p className="info icon-link">
                    <a rel="noopener noreferrer" target="_blank" href={largeImageURL}>View Full Size</a>
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    element: PropTypes.object.isRequired
}

export default Card;