import Search from './Search';
import Sort from './Sort';

const Operations = () => {
  return (
    <section className="mt-8 mb-12 flex justify-center items-center gap-10 max-md:flex-col max-md:items-start max-md:gap-6 max-md:mb-8">
      <Search />
      <Sort />
    </section>
  );
};
export default Operations;
