import className from 'classnames';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="font-titillium text-3xl font-semibold text-gray-900">
          {props.title}
        </h3>
        <div className="mt-6 font-sans text-xl leading-9">
          {props.description}
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
