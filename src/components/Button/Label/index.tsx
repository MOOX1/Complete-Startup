import { ReactNode } from 'react';
import { Text } from '@/components/Text';

type TTypeButton = 'Primary' | 'secondary';

interface IButtonPrimaryProps {
  children: ReactNode;
  typeButton?: TTypeButton;
}

export const Label = ({ children, typeButton }: IButtonPrimaryProps) => {
  const classText: Record<TTypeButton, string> = {
    Primary: ' group-hover/button:text-primary-default ',
    secondary: ' group-hover/button:text-primary-default text-primary-default ',
  };

  return (
    <Text.Body
      className={
        'transition-colors duration-200 ' + ` ${classText[typeButton ?? 'Primary']} `
      }
      type="Semibold"
    >
      {children}
    </Text.Body>
  );
};
