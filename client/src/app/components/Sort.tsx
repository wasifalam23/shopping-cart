'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

type SortOption = 'name' | '-name' | 'price' | '-price';

const Sort = () => {
  const [sortValue, setSortValue] = useState<SortOption>('name');
  const router = useRouter();

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value as SortOption);
    console.log(sortValue);

    router.push(`/sort/${sortValue}/`);
  };

  const sortHandler = () => {
    router.push(`/sort/${sortValue}/`);
  };

  return (
    <div>
      <label htmlFor="sort-select">Sort by: &nbsp;</label>
      <select
        className="bg-gray-300 px-2 py-[.33rem] text-gray-800 rounded-sm"
        id="sort-select"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value as SortOption)}
      >
        <optgroup label="Name">
          <option value="name">A-Z</option>
          <option value="-name">Z-A</option>
        </optgroup>

        <optgroup label="Price">
          <option value="price">0-9</option>
          <option value="-price">9-0</option>
        </optgroup>
      </select>
      <button
        onClick={sortHandler}
        className="bg-gray-800 text-white ml-3 px-2 py-1 rounded-sm"
      >
        Sort
      </button>
    </div>
  );
};

export default Sort;
