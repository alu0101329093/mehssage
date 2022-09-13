import React from 'react';

interface Props {
  // className?: string;
  className?: string;
}

const InputButton = ({ className = undefined }: Props) => (
  <svg viewBox="0 0 500 500" className={className}>
    <ellipse cx="250" cy="250" rx="250" ry="250" />
    <path
      d="M 250 137.5 L 375 412.5 L 125 412.5 L 250 137.5 Z"
      data-bx-shape="triangle 125 137.5 250 275 0.5 0 1@ee1efded"
      className="fill-white"
      transform="matrix(0, 1, -1, 0, 537.5, 0)"
    />
    <ellipse cx="125" cy="250" rx="10" ry="125" data-bx-origin="0.55 0.5" />
    <path
      d="M 25 57.5 L 37.5 172.5 L 12.5 172.5 L 25 57.5 Z"
      data-bx-shape="triangle 12.5 57.5 25 115 0.5 0 1@c60b1f85"
      transform="matrix(0, 1, -1, 0, 297.5, 224.693695)"
    />
  </svg>
);

export default InputButton;
