import Search from './Search';
import Sort from './Sort';

type Props = {};
const Operations = (props: Props) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 mt-5 mb-8 flex justify-center items-center gap-10">
      <Search />
      <Sort />
    </section>
  );
};
export default Operations;
