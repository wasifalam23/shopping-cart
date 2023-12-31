'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput('');
    router.push(`/search/${input}/`);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search by name"
        className="text-black border border-black px-3 py-2 rounded-sm pr-6 max-md:text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-[.55rem] bg-gray-800 text-white rounded-sm max-md:py-[.6rem] max-md:text-sm"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
