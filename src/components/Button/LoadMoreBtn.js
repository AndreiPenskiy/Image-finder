import React from "react";
import './LoadMoreBtn.css'
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div className="ButtonDiv">
        <button
        type="submit"
        className="Button"
        onClick={onClick}
    > Load more
            </button>
            </div>
    )
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};