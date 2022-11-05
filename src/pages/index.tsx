import * as React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Input, PersonInput } from 'src/components';

export default function HomePage() {
  const [value, setValue] = React.useState(0);

  function handleChange(value: number) {
    setValue(value);
  }

  return (
    <main className="w-screen h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-96 rounded-2xl h-96 bg-white p-4">
        <form className="flex flex-col" action="POST">
          <PersonInput value={value} onValueChange={handleChange} />

          <DatePicker
            onChange={(date, event) => {
              console.log(date);
            }}
            placeholderText="Select Date & Time"
            customInput={
              <Input
                aria-label="Select Date & Time"
                className='w-full'
              />
            }
          />

          <button type="submit">Request to book</button>
        </form>
      </div>
    </main>
  );
}
