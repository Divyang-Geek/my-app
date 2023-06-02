import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const repo = await res.json();
    return { props: { repo } };
};

const Blog = ({ repo }) => {
    console.log(repo);

    return (
        <>
            <div className="main_blog">
                {repo.slice(0, 10).map((dataD) => {
                    {
                        /* console.log(dataD); */
                    }
                    return (
                        <div key={dataD.id}>
                            <h2>{dataD.id}</h2>
                            <Link href={`/blog/${dataD.id}`}>
                                <h3>{dataD.title}</h3>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Blog;
