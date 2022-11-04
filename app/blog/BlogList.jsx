'use client';
import useSWR from 'swr';

const fetcher = (path) =>
  fetch(`https://jsonplaceholder.typicode.com/${path}`).then((res) =>
    res.json()
  );

console.log();

const BlogList = () => {
  const blogs = useSWR('posts/', fetcher);

  return (
    <div>
      {blogs.data?.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
