import useSWR from "swr";
import "./App.css";

const fetcher = async (url, headers) => {
  return fetch(url, { headers }).then((res) => res.json());
}

const useStatus = () => {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const { data, error } = useSWR([url, headers], ([url, headers]) => fetcher(url, headers));
  return { data, error }
}

function App() {
  const { data, error } = useStatus()

  if (error) return <p>Failed</p>
  if (!data) return <p>Loading</p>

  return <p>{data.description}</p>
}

export default App;
