import classNames from 'classnames';

export type InputProps = React.ComponentPropsWithoutRef<'input'>;

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={classNames(
        'ext-sm px-4 py-2 border border-slate-300 rounded-md outline-slate-500 cursor-pointer',
        className,
      )}
      {...rest}
    />
  );
};
