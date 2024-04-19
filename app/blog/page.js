
const Blog = async () => {
    const blogPosts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()

    return (
        <div>
            <div>
                <h2> BLOG</h2>
                <p>
                  Explore from our wide range of blog collections
                </p>
            </div>
            <div style={{display: "flex", flexFlow: 'row wrap'}}>
                {blogPosts.map((blog) => (
                    <div
                    key={blog.key}
                    style={{border: '2px solid indigo', margin: '20px', padding: '20px', width: '200px'}}
                    >
                    <a href={`/blog/${blog.id}`}>
                        <h3>{blog.title}</h3>    
                    </a>
                    <p>{`“${blog.body.substring(0,200)}”...`}</p>
                    </div>
                ))}
             </div>
          </div>
    )
}

export default Blog