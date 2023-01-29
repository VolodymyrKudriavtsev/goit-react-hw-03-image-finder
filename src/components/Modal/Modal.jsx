import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  // componentWillUnmount() {
  //   console.log('размонтировали');
  // }

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src="" alt="" />
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
