import { useRouter } from "next/router";

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const repoData = await response.json();

    const paths = repoData.map((curElem) => {
        return {
            params: {
                singleBlog: curElem.id.toString(),
            },
        };
    });

    return {
        paths: [...paths],
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.singleBlog;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const repo = await res.json();
    return { props: { repo } };
};

const singleBlog = ({ repo }) => {
    const router = useRouter();

    const pageNum = router.query.singleBlog;

    const { id, title, body, userId } = repo;

    console.log(repo);

    return (
        <>
            <div className="sec" key={id}>
                <h1 className="title">Single {pageNum}</h1>
                <div className="box">
                    <h3>{title}</h3>
                    <h4>{body}</h4>
                    <p>{userId}</p>
                </div>
            </div>
        </>
    );
};

export default singleBlog;
