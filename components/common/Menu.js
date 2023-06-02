import Link from "next/link";

const Menu = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;
