import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { TTypeButton, TTypeClassName } from '../types';

interface IRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton: TTypeButton;
  disable?: boolean;
  children: ReactNode;
  fullContent?: boolean;
  rounded?: boolean;
}

export const Root = ({
  typeButton,
  disable,
  children,
  fullContent = false,
  rounded = false,
  ...rest
}: IRootProps) => {
  if (disable) typeButton = 'disable';

  const classText: Record<TTypeButton, TTypeClassName> = {
    Primary:
      ' border-primary-default hover:bg-primary-default/70 border-primary-default bg-primary-default active:bg-primary-300  ',
    secondary: ' border-white-default ',
    disable: ' bg-black-200 border-none cursor-not-allowed hover:scale-100  ',
    'success-primary':
      ' bg-interactive-success border-interactive-success hover:bg-interactive-successDefault ',
    'success-secondary':
      ' hover:bg-interactive-success border-interactive-success bg-interactive-successDefault ',
    'danger-primary':
      ' hover:bg-interactive-danger border-interactive-danger bg-interactive-danger-default ',
    'danger-secondary': '',
  };

  const full: string = fullContent ? ' w-full ' : ' w-min ';
  const isRounded = rounded ? ' rounded-lg ' : ' rounded-none ';

  return (
    <button
      className={
        'group/button flex w-full  items-center  justify-center gap-2.5  border   transition-all duration-200  hover:scale-105 active:scale-100 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 ' +
        classText[typeButton] +
        full +
        isRounded
      }
      disabled={disable}
      {...rest}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const props = { typeButton };
          return React.cloneElement(child, props);
        }
        return child;
      })}
    </button>
  );
};
