import React, { useEffect } from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = (currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Marissa Martinez
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {
                        categories.map((category) => (
                            <li className={
                                `mx-1 ${currentCategory.name === category.name
                                && !contactSelected && 'navActive'
                                }`}
                                key={category.name} >
                                
                                <span
                                    onClick={() => {
                                        setCurrentCategory(category);
                                        setContactSelected(false);
                                    }}
                                >
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