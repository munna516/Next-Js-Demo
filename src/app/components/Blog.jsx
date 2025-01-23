const Blog = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allBlogs = await response.json();
 
  return (
    <div>
      {allBlogs.map((blogs) => (
        <li key={blogs.id}>{blogs.title}</li>
      ))}
    </div>
  );
};

export default Blog;
