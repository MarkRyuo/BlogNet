import { useState } from "react" ;

//* This nav is style via root in main.jsx

export const NavBar = () => {

    const [navTitle, setNavTitle ] = useState("BlogNet")


    return (
        <nav>
            <h1 className="nav-Title">{navTitle}</h1>
            <div className="nav-link">
                <a href="/Home ">Home</a>
                <a href="/Create">New Blog</a>
                <button type="button">Change</button>
            </div>
        </nav>
    )
}