'use client';
import useSWR from 'swr';

const fetcher = (path) =>
  fetch(`https://jsonplaceholder.typicode.com/${path}`).then((res) =>
    res.json()
  );

const BlogSingle = ({ params }) => {
  const { data, error } = useSWR(`posts/${params.slug}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className='page'>
      <h5>Blog detail page</h5>
      <p>{data?.title}</p>
    </div>
  );
};

export default BlogSingle;
