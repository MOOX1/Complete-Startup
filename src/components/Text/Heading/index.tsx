import { ReactNode } from 'react';

type TTypeHeading = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

interface IHeadingProps {
  type: TTypeHeading;
  children: ReactNode;
}

export const Heading = ({ type, children }: IHeadingProps) => {
  const classText: Record<TTypeHeading, string> = {
    H1: `sm:typography-Heading-H1-Small md:typography-Heading-H1-Large`,
    H2: `sm:typography-Heading-H2-Small md:typography-Heading-H2-Large`,
    H3: `sm:typography-Heading-H3-Small md:typography-Heading-H3-Large`,
    H4: `sm:typography-Heading-H4-Small md:typography-Heading-H4-Large`,
    H5: `sm:typography-Heading-H5-Small md:typography-Heading-H5-Large`,
    H6: `sm:typography-Heading-H6-Small md:typography-Heading-H6-Large`,
  };

  const Text: Record<TTypeHeading, JSX.Element> = {
    H1: <h1 className={classText[type]}>{children}</h1>,
    H2: <h2 className={classText[type]}>{children}</h2>,
    H3: <h3 className={classText[type]}>{children}</h3>,
    H4: <h4 className={classText[type]}>{children}</h4>,
    H5: <h5 className={classText[type]}>{children}</h5>,
    H6: <h6 className={classText[type]}>{children}</h6>,
  };

  return Text[type];
};
