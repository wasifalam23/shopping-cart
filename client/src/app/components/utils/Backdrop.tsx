'use client';

import React from 'react';

type Props = { onCancel: () => void };

const Backdrop = (props: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(0,0,0,0.6)] ${props.className}`}
      onClick={props.onCancel}
    />
  );
};

export default Backdrop;
