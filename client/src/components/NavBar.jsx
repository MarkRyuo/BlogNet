

//* This nav is style via root in main.jsx

export const NavBar = () => {

    const handleClick = (user) => {
        console.log("Clicked by: " + user)
    }

    return (
        <nav>
            <h1 className="nav-Title">BlogNet</h1>
            <div className="nav-link">
                <a href="/Home">Home</a>
                <a href="/Create">New Blog</a>
                <button type="button" onClick={() => handleClick('moda')}>Click</button>
            </div>
        </nav>
    )
}