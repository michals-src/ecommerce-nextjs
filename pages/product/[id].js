import { useRouter } from "next/router";
import Layout from "../../src/components/layout";

import products from "../fakeData/products.json";

export default function Product() {
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}
