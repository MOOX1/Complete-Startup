import { ElementType } from 'react';
import { TTypeButton } from '../types';

interface IIconProps {
  icon: ElementType;
  typeButton?: TTypeButton;
}

export const Icon = ({ icon: Icon, typeButton }: IIconProps) => {
  const classText: Record<TTypeButton, string> = {
    Primary: '',
    secondary: 'group-hover/button:text-primary-default text-primary-default',
    disable: ' text-white-default ',
    'success-primary':
      ' text-white-default group-hover/button:text-interactive-success ',
    'success-secondary':
      ' text-interactive-success group-hover/button:text-white-default ',
    'danger-primary': ' group-hover/button:text-interactive-danger ',
    'danger-secondary': '',
  };

  return (
    <Icon
      className={
        'h-auto transition-all  duration-200 sm:w-4 md:w-5 lg:w-6' +
        classText[typeButton ?? 'Primary']
      }
    />
  );
};
