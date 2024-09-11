import React from 'react';

export default function BestIconNo2({
  width = 44,
  height = 44,
  color = '#131922',
  className,
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ''}
    >
      <g clipPath="url(#clip0_251_1214)">
        <path
          d="M8.267 3.352L9.745 6.153M4.729 14.77L7.458 13.322M16.953 8.39L19.831 6.854M4.125 8.291L7.145 9.259M14.79 2.75L13.821 5.794"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M21.2191 24.15C19.0341 18.493 17.5431 14.665 16.7461 12.668C15.9491 10.67 14.6981 9.99801 12.9941 10.648C11.6011 11.368 11.1821 12.459 11.7381 13.923C12.2931 15.387 14.6641 21.5 18.8491 32.263"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M27.163 24.752C25.9798 21.8481 24.8052 18.9408 23.639 16.03C22.841 14.033 21.591 13.36 19.887 14.01C18.494 14.73 18.075 15.822 18.63 17.286C19.4962 19.5731 20.3592 21.8615 21.219 24.151"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M32.8781 24.752C31.6952 21.8481 30.5209 18.9408 29.3551 16.03C28.5571 14.033 27.3071 13.36 25.6031 14.01C24.1121 14.82 23.6441 15.956 24.2001 17.42C24.7551 18.884 25.7431 21.328 27.1631 24.752"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M38.6459 24.752C37.4627 21.8481 36.288 18.9408 35.1219 16.03C34.3239 14.033 33.0739 13.36 31.3699 14.01C29.8799 14.82 29.4109 15.956 29.9669 17.42C30.5219 18.884 31.4929 21.328 32.8779 24.752M18.8439 32.486C17.6384 30.996 16.4497 29.4926 15.2779 27.976C13.9609 26.276 12.5739 25.974 11.1149 27.069C9.90488 28.258 9.76888 29.479 10.7059 30.733C11.6439 31.987 13.3129 34.113 15.7159 37.109"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M38.646 24.752C41.171 31.16 39.098 36.124 32.426 39.645C25.756 43.167 20.172 42.305 15.676 37.059"
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_251_1214">
          <rect width="44" height="44" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}
