const BlogDetail = async ({params}) => {
    const slug = decodeURIComponent (params.slug)
    const blog = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)).json ()
    return (
        <div className="blogDetail">
        <h2>
            {blog.title}
        </h2>
        <hr />
        <p>
            {blog.body}
        </p>
        </div>
    )
}
export default BlogDetail