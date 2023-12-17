import { ReactNode } from 'react';
import { Text } from '@/components/Text';
import { TTypeButton, TTypeClassName } from '../types';

interface IButtonPrimaryProps {
  children: ReactNode;
  typeButton?: TTypeButton;
}

export const Label = ({ children, typeButton }: IButtonPrimaryProps) => {
  const classText: Record<TTypeButton, TTypeClassName> = {
    Primary: ' ',
    secondary: ' group-hover/button:text-primary-default text-primary-default  ',
    disable: ' text-white-default ',
    'success-primary':
      ' text-white-default group-hover/button:text-interactive-success ',
    'success-secondary':
      ' text-interactive-success group-hover/button:text-white-default',
    'danger-primary': 'group-hover/button:text-interactive-danger',
    'danger-secondary': 'd',
  };

  return (
    <Text.Body
      className={
        'hover-group whitespace-nowrap transition-colors duration-200  ' +
        ` ${classText[typeButton ?? 'Primary']} `
      }
      type="Semibold"
    >
      {children}
    </Text.Body>
  );
};
