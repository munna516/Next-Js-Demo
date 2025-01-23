const BlogDetails = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const blogs = await response.json();
  return (
    <>
      <div className="card  shadow-xl mt-20 p-5 border">
        <div className="card-body">
          <h2 className="text-center font-bold text-lg md:-text-xl lg:text-3xl">
            Title - {blogs.title}
          </h2>
          <p className="text-lg text-gray-500 mt-5">
            Description : {blogs.body}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
