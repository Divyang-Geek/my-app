import Image from "next/image";
import logoImage from "../assets/images/icons8-logo-500.svg";
import Head from "next/head";

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Portfolio Page</title>
                <meta charset="UTF-8" />
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div className="Image">
                {/* <Image src={logoImage} alt="Logo" width={200} height={150}/> */}
                <Image src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo" width={200} height={150} />
            </div>
        </>
    );
};

export default Portfolio;
