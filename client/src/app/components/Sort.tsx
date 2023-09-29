'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

type SortOption = '' | 'name' | '-name' | 'price' | '-price';

const Sort = () => {
  const [sortValue, setSortValue] = useState<SortOption>('');
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
      <label htmlFor="sort-select">Sort by &nbsp;</label>
      <select
        className="text-black"
        id="sort-select"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value as SortOption)}
      >
        <option value="name">A-Z</option>
        <option value="-name">Z-A</option>
        <option value="price">0-9</option>
        <option value="-price">9-0</option>
      </select>
      <button onClick={sortHandler}>Sort</button>
    </div>
  );
};

export default Sort;
