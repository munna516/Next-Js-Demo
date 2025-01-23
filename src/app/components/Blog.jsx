import Link from "next/link";

const Blog = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allBlogs = await response.json();

  return (
    <>
      <div>
        <h1 className="text-4xl text-center my-10 font-bold text-blue-500">
          All Blog Post
        </h1>
      </div>
      <div className="flex flex-col gap-7 mb-10">
        {allBlogs.map((blogs) => (
          <li key={blogs.id}>
            <Link
              href={`/blogs/${blogs.id}`}
              className="text-lg md:text-xl lg:text-2xl hover:underline hover:text-blue-500"
            >
              {blogs.title}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Blog;
