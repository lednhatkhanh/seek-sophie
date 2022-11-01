import {
  ChevronDownIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import * as React from 'react';
import { useClickAway } from 'react-use';
import { Input, InputProps } from './Input';
import classes from './PersonInput.module.scss';

export type PersonInputProps = Omit<InputProps, 'value' | 'type' | 'min'> & {
  onValueChange?: (value: number) => void;
  value?: number;
  min?: number;
};

export const PersonInput: React.FC<PersonInputProps> = ({
  className,
  value,
  onValueChange,
  min = 0,
  ...rest
}) => {
  const [isExpand, setIsExpand] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const formattedValue =
    value === 0 ? '' : `${value} x Person${(value ?? 0) > 1 ? 's' : ''}`;

  function expandInput() {
    setIsExpand(true);
  }

  function collapseInput() {
    setIsExpand(false);
  }

  useClickAway(ref, () => {
    collapseInput();
  });

  function handleIncrease() {
    onValueChange?.((value ?? 0) + 1);
  }

  function handleDecrease() {
    onValueChange?.(Math.max((value ?? 0) - 1, min));
  }

  return (
    <div ref={ref} className={classNames('relative text-slate-500', className)}>
      <Input
        className="cursor-pointer w-full"
        onClick={expandInput}
        readOnly
        value={formattedValue}
        aria-label="Select Number of Persons"
        placeholder="Select Number of Persons"
        {...rest}
      />

      <ChevronDownIcon className="absolute top-1/2 -translate-y-1/2 right-4 h-6 w-6 text-slate-500 pointer-events-none" />

      {isExpand ? (
        <div className="absolute top-full left-0 right-0  bg-white shadow mt-1 px-4 py-2 flex items-center gap-x-2">
          <span className="flex-1">Persons</span>

          <button
            className="focus:outline-slate-500"
            type="button"
            onClick={handleDecrease}
          >
            <MinusCircleIcon className="w-6 h-6 text-slate-500" />
          </button>

          <Input
            className={classNames(
              '!px-2 !py-1 text-center w-10 h-10',
              classes.input,
            )}
            value={value}
            type="number"
            readOnly
            min={min}
            {...rest}
          />

          <button
            className="focus:outline-slate-500"
            type="button"
            onClick={handleIncrease}
          >
            <PlusCircleIcon className="w-6 h-6 text-slate-500" />
          </button>
        </div>
      ) : null}
    </div>
  );
};
