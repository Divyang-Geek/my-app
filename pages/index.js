import Menu from "../components/common/Menu";

const index = () => {
    return (
        <>
            <header className="main_header">
                <Menu />
            </header>
            <main className="main">
                <div className="service_box">
                    <h3 className="h3_title">Index Page</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi dolores ipsa vitae temporibus vel laudantium ut laboriosam, dolor sapiente natus, recusandae deleniti voluptate id earum illum dicta. Mollitia, natus.</p>
                </div>
            </main>
        </>
    );
};

export default index;
