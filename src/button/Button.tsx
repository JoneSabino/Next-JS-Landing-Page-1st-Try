import className from 'classnames';
import type { ReactNode } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
  className?: string;
  color?: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className(
    {
      btn: true,
      'btn-xl': props.xl,
      'btn-base': !props.xl,
      'btn-primary': false,
    },
    props.className,
    props.color,
  );

  return (
    <button className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </button>
  );
};

export { Button };
