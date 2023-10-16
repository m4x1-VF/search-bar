import CardUser from "./componets/CardUser";
import SearchBar from "./componets/SearchBar";
import SearchResultList from "./componets/SearchResultList";
import { useResultStore } from "./store/useResultStore";

function App() {
  const { result, user } = useResultStore();
  return (
    <>
      <main className="container  h-screen  display: flex flex-col justify-center items-center ">
        <h1 className="font-black text-5xl">Search User</h1>
        <SearchBar />
        {result && result.length > 0 && <SearchResultList />}
        {user.name && <CardUser />}
      </main>
    </>
  );
}

export default App;
