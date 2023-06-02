import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error404 = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);
    return (
        <>
            Error404
            {/* <a
                onClick={() => {
                    router.push("/");
                }}
            >
                Go to Home
            </a> */}
            <Link href="/" style={{ marginLeft: "50px" }}>
                Go to Home
            </Link>
        </>
    );
};

export default Error404;
