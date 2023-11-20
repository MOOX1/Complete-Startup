import { ReactNode } from 'react';

type TTypeFooter = 'Regular' | 'Semibold' | 'Uppercase';

interface IFooterProps {
  type: TTypeFooter;
  children: ReactNode;
}

export const Footer = ({ type, children }: IFooterProps) => {
  const classText: Record<TTypeFooter, string> = {
    Regular: 'typography-Footer-Regular',
    Semibold: 'typography-Footer-Semibold',
    Uppercase: 'typography-Footer-Semibold-Uppercase',
  };

  return <p className={classText[type]}>{children}</p>;
};
