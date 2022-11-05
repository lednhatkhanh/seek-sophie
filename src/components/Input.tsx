import classNames from 'classnames';
import * as React from 'react';

type EmptyObject = Record<never, never>;
type KeyOfOrEmpty<P extends Record<string, unknown> = EmptyObject> =
  keyof P extends never ? '' : keyof P;
export type ExtendableComponentProps<
  C extends React.ElementType,
  P extends Record<string, unknown> = EmptyObject,
> = P & Omit<React.ComponentPropsWithRef<C>, KeyOfOrEmpty<P>>;

type BaseProps = {
  rightIcon?: React.ReactNode;
};
export type InputProps = ExtendableComponentProps<'input', BaseProps>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, rightIcon, ...rest }, ref) {
    return (
      <div className={classNames(className)}>
        <input
          className={classNames(
            'ext-sm px-4 py-2 border border-slate-300 rounded-md outline-slate-500 cursor-pointer',
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);
