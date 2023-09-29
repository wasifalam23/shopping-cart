'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {};

const Search = (props: Props) => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput('');
    router.push(`/search/${input}/`);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="search by name"
        className="text-black border border-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-gray-400">
        Search
      </button>
    </form>
  );
};

export default Search;
