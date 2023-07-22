import useSWR from "swr";
import "./App.css";

const fetcher = (url) => {
  const headers = { Accept: "application/json" }
  return fetch(url, { headers }).then((res) => res.json());
}

function App() {
  const url = "https://httpstat.us/200?sleep=2000";

  const { data, error } = useSWR(url, fetcher);

  if (error) return <p>Failed</p>
  if (!data) return <p>Loading</p>

  return <p>{data.description}</p>
}

export default App;
