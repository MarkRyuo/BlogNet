import { useState } from "react" ;

//* This nav is style via root in main.jsx

//* Using hook(useState) to change the nav title

export const NavBar = () => {

    const [navTitle, setNavTitle ] = useState("BlogNet")

    const handleChange = () => {
        setNavTitle("Blog.Net")
    }

    return (
        <nav>
            <h1 className="nav-Title">{navTitle}</h1>
            <div className="nav-link">
                <a href="/Home ">Home</a>
                <a href="/Create">New Blog</a>
                <button type="button" onClick={() => handleChange()}>Change</button>
            </div>
        </nav>
    )
}