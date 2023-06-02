import { useRouter } from "next/router";

const pageNo = () => {
    const router = useRouter();

    const pageNum = router.query.pageNo;

    console.log(pageNum);
    return <>Single {pageNum}</>;
};

export default pageNo;
