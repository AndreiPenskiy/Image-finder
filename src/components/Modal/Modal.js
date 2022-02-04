import { Component } from 'react';
import {createPortal} from 'react-dom'
import './Modal.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class MOoal extends Component {

   static propTypes = { children: PropTypes.node.isRequired };

    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
    };

    handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
    
    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>, modalRoot
        )};
};

