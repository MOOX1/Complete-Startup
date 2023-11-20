import { ButtonHTMLAttributes, ElementType } from 'react';
import { Text } from '@/components/Text';

interface IButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disable?: boolean;
  label: string;
  icon?: ElementType;
}

export const Primary = ({
  disable = false,
  label,
  icon: Icon,
  ...rest
}: IButtonPrimaryProps) => {
  return (
    <button
      className="group/button flex w-full items-center justify-center gap-2.5
      rounded-lg  border border-primary-default bg-primary-default  transition-all duration-200 hover:bg-primary-hover-secondary sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3"
      disabled={disable}
      {...rest}
    >
      <Text.Body
        className="transition-colors duration-200 group-hover/button:text-primary-default"
        type="Semibold"
      >
        {label}
      </Text.Body>
      {Icon && (
        <Icon className="h-auto transition-colors duration-200 group-hover/button:text-primary-default sm:w-4 md:w-5 lg:w-6" />
      )}
    </button>
  );
};
