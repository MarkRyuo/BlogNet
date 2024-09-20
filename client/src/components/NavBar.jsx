

//* This nav is style via root in main.jsx

export const NavBar = () => {

    return (
        <nav>
            <h1 className="nav-Title">BlogNet</h1>
            <div className="nav-link">
                <a href="#">Home</a>
                <a href="/Create">New Blog</a>
            </div>
        </nav>
    )
}