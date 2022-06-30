import { useEffect } from 'react';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Dashboard() {
  const { data, error } = useSWR("api/user", fetcher);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <p>Hello World</p>
    </>
  )
}
