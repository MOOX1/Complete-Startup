import { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
  hasHeader?: boolean;
}
export default function Root({ children, hasHeader }: ILayoutProps) {
  const hasHeaderStyle = hasHeader ? ' mt-14 ' : '';

  return <div className={' relative ' + hasHeaderStyle}>{children}</div>;
}
