import Link from "next/link";

const Blog = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allBlogs = await response.json();

  return (
    <>
      <div>
        <h1 className="text-4xl text-center my-10 font-bold">All Blog Post</h1>
      </div>
      <div className="flex flex-col gap-7 mb-10">
        {allBlogs.map((blogs) => (
          <Link href={`/blogs/${blogs.id}`} key={blogs.id}>
            <li className="text-lg md:text-xl lg:text-2xl hover:underline hover:text-blue-500">{blogs.title}</li>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
