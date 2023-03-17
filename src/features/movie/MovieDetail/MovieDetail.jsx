

import Navbar from "../../navbar/Navbar";
import MovieHeader from "../MovieHerader/MovieHeader";
import styles from "./MovieDetail.module.css"

function MovieDetail() {


    return (
        <div>
            <Navbar />

            <div className={styles.container}>
                <section className={styles.header}>


                    <div className={styles.container2}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" className={styles.headerimg} />
                    </div>
                </section>
                <section className={styles.movieheader}>
                    <MovieHeader />
                </section>

                <section className={styles.banner}>
                    <div className={styles.container2}>
                        <div className={styles.left_side_rating}>
                            <div className={styles.items}>
                                <div className={styles.items_tums}>
                                    <img src="" alt="" />
                                    <p>Tomatometer</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.items_tums}>
                                    <img src="" alt="" />
                                    <p>Tomatometer</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.items_tums}>
                                    <img src="" alt="" />
                                    <p>Tomatometer</p>
                                </div>
                            </div><div className={styles.items}>
                                <div className={styles.items_tums}>
                                    <img src="" alt="" />
                                    <p>Tomatometer</p>
                                </div>
                            </div>
                        </div>
                        <button className={styles.btn1}>Book Show</button>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default MovieDetail;