import Menu from "../components/common/Menu";
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <>
            <header className="main_header">
                <Menu />
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.service_box}>
                        <div className={`${styles.service_box_inr} ${styles.service_box_inr2}`}>
                            <h3 className="h3_title">Home Page</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi dolores ipsa vitae temporibus vel laudantium ut laboriosam, dolor sapiente natus, recusandae deleniti voluptate id earum illum dicta. Mollitia, natus.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
