import { useResultStore } from "../store/useResultStore";

const SearchResult = ({ result, id }) => {
  const { getUser, clearResult } = useResultStore();
  const handleUserClick = () => {
    getUser(id);
    clearResult();
  };
  return (
    <p
      className="py-3  px-5 hover:bg-slate-300 cursor-pointer"
      onClick={handleUserClick}
    >
      {result}
    </p>
  );
};

export default SearchResult;
