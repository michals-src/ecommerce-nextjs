import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Dashboard() {
  const [data, error] = useSWR("api/user", fetcher);

  return <div>dashboard</div>;
}
