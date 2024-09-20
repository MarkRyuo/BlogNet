import MainContent from './Home.module.css' ;


export const Bloglist = (props) => {

    return (
        <>
            <div className={MainContent.blogContainer}>
                {blogs.map((blog) => (
                    <div className={MainContent.blogContent} key={blog.id}>
                        <h1>Title: {blog.title}</h1>
                        <p>Written by: {blog.author}</p>
                    </div>
                ))}
            </div>
        </>
    )
}