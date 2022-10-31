import * as React from 'react';
import classNames from 'classnames';

export default function HomePage() {
  return (
    <div className="w-4/5 rounded-2xl h-96 bg-white">
      <form className="flex flex-col" action="POST">
        <Input type="number" placeholder="Select number of persons" />
        <button type="submit">Request to book</button>
      </form>
    </div>
  );
}

const Input: React.FC<React.ComponentPropsWithoutRef<'input'>> = ({
  className,
  ...rest
}) => {
  return <input className={classNames('', className)} {...rest} />;
};
