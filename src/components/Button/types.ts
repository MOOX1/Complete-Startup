import { HTMLAttributes } from 'react';

export type TTypeButton =
  | 'Primary'
  | 'secondary'
  | 'disable'
  | 'success-primary'
  | 'success-secondary'
  | 'danger-primary'
  | 'danger-secondary';

export type TTypeClassName = HTMLAttributes<HTMLElement>['className'];
