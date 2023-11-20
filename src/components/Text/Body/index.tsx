type TTypeBody = 'Regular' | 'Semibold';
import { ReactNode } from 'react';

interface IBodyProps {
  type: TTypeBody;
  children: ReactNode;
  className?: string;
}

export const Body = ({ type, children, className }: IBodyProps) => {
  const classText: Record<TTypeBody, string> = {
    Regular: 'sm:typography-Body-Regular-Small md:typography-Body-Regular-Large',
    Semibold: 'sm:typography-Body-Semibold-Small md:typography-Body-Semibold-Large',
  };
  return <p className={classText[type] + ` ${className}`}>{children}</p>;
};
