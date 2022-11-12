import style from './Home.module.scss';

function Home() {
    return (
        <div className="home__wrapper">
            <h1 className={style.heading}>Home page</h1>
            <p className={style.content}>
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world
            </p>
        </div>
    );
}

export default Home;
