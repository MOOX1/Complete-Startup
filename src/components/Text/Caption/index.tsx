import { ReactNode } from 'react';

type TTypeCaption = 'Regular' | 'Semibold' | 'Uppercase';

interface ICaptionProps {
  type: TTypeCaption;
  children: ReactNode;
}

export const Caption = ({ type, children }: ICaptionProps) => {
  const classText: Record<TTypeCaption, string> = {
    Regular:
      'sm:typography-Caption-Regular-Small md:typography-Caption-Regular-Large',
    Semibold:
      'sm:typography-Caption-Semibold-Small md:typography-Caption-Semibold-Large',
    Uppercase:
      'sm:typography-Caption-Uppercase-Bold-Small md:typography-Caption-Uppercase-Bold-Large',
  };

  return <p className={classText[type]}>{children}</p>;
};
