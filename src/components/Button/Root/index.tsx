import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type TTypeButton = 'Primary' | 'secondary';

interface IRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton: TTypeButton;
  disable?: boolean;
  children: ReactNode;
}

export const Root = ({ typeButton, disable, children, ...rest }: IRootProps) => {
  const classText: Record<TTypeButton, string> = {
    Primary:
      ' border-primary-default hover:bg-primary-hover-secondary border-primary-default bg-primary-default active:bg-primary-300 ',
    secondary:
      ' border-primary-default bg-white-default hover:bg-primary-hover-secondary ',
  };

  return (
    <button
      className={
        'group/button flex w-full items-center justify-center gap-2.5 rounded-lg  border  transition-all duration-200  sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3' +
        classText[typeButton]
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
