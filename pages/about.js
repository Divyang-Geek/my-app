import Menu from "../components/common/Menu";

const About = () => {
    return (
        <>
            <Menu />
            <div className="about">
                <h1>ABout</h1>
            </div>

            <style jsx>
                {`
                    h1 {
                        color: #000;
                        font-size: 150px;
                    }
                `}
            </style>
        </>
    );
};

export default About;
