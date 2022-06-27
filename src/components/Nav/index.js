import React from "react";

function Nav() {
    const categories = [
        { name: 'Portfolio', description: 'A portfolio with some of my past projects' },
        { name: 'Contact', description: 'Form to input information to contact me' },
        { name: 'Resume', description: 'Form with resume, skills, and experience about me' }
    ];

    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Marissa Martinez
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    {
                        categories.map((category) => (
                            <li className="mx-1" key={category.name} >
                                <span onClick={() => { handleClick(); }}>
                                    {category.name}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;