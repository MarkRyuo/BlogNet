import MainContent from './Home.module.css' ;


export const Bloglist = (props) => {

    const blogs = props.blogs ;
    const title = props.title ;

    return (
        <>
            <div className={MainContent.blogContainer}>
                <h1>{title}</h1>
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