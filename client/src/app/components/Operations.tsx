import Search from './Search';
import Sort from './Sort';

type Props = {};
const Operations = (props: Props) => {
  return (
    <section className="mt-5 mb-6 flex justify-center items-center gap-10">
      <Search />
      <Sort />
    </section>
  );
};
export default Operations;
