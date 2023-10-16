import { useResultStore } from "../store/useResultStore";
import SearchResult from "./SearchResult";

const SearchResultList = () => {
  const { result } = useResultStore();
  return (
    <section className="w-[300px] display: flex justify-start ml-6">
      <ul className="w-[200px] bg-slate-100 display: flex flex-col rounded-xl mt-1 max-h-72 overflow-y-auto">
        {result?.map((result) => (
          <li key={result.id}>
            <SearchResult result={result.name} id={result.id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchResultList;
