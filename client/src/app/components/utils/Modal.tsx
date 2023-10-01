'use client';

import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

import Backdrop from './Backdrop';

type Props = {
  title: string;
  message: string;
  onCancel: () => void;
};

const ModalOverlay = (props: Props) => {
  return (
    <div className="fixed top-[20vh] left-1/2 rounded-sm pb-6 -translate-x-1/2 z-50 overflow-hidden bg-white flex items-center justify-center flex-col shadow-md">
      <header className="flex justify-between items-center w-full px-2 py-2 pr-3 bg-yellow-300 gap-1 mb-1">
        <h3 className="text-lg">{props.title}</h3>
        <XMarkIcon
          className="w-6 h-6 cursor-pointer"
          onClick={props.onCancel}
        />
      </header>
      <div className="text-center px-6 py-4">
        <p className="text-lg">{props.message}</p>
      </div>
      <footer className="mt-2 flex flex-col items-center gap-1">
        <button
          onClick={props.onCancel}
          className=" px-2 py-1 rounded-sm bg-gray-300 hover:bg-gray-400"
          type="button"
        >
          Cancel
        </button>
      </footer>
    </div>
  );
};

const Modal = (props: Props) => {
  return (
    <React.Fragment>
      <Backdrop onCancel={props.onCancel} className="confirm-modal__backdrop" />
      <ModalOverlay
        onCancel={props.onCancel}
        title={props.title}
        message={props.message}
      />
    </React.Fragment>
  );
};

export default Modal;
