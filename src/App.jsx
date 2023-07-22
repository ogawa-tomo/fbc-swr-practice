import useSWR from "swr";
import "./App.css";

const fetcher = async (url, headers) => {
  return fetch(url, { headers }).then((res) => res.json());
};

const useStatus = () => {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const { data, error, isLoading } = useSWR([url, headers], ([url, headers]) =>
    fetcher(url, headers)
  );
  return {
    status: data?.description,
    isError: error,
    isLoading,
  };
};

function App() {
  const { status, isError, isLoading } = useStatus();

  if (isError) return <p>Failed</p>;
  if (isLoading) return <p>Loading</p>;

  return <p>Status: {status}</p>;
}

export default App;
