import React from "react";
import Navbar from "../../navbar/Navbar";
import styles from "./Seatplan.module.css"

function Seatplan() {
    return (
        <div>
            <Navbar />
            <div>
                <section className={styles.bg_sp}>
                    <div className="container text-center ">
                        <h1 className={styles.header_sp}>soul</h1>
                        <p className={styles.plase_sp}>cd wload 3D</p>
                    </div>
                </section>
                <section>
                    <div className={styles.banner_sp}>
                        <div className="container">
                            <div className={styles.bannerItems_sp} >
                                <li className={styles.itemsList_sp}>
                                    <div><button className={styles.Back_button}>{"<<back"}</button></div>
                                </li>
                                <li className={styles.itemsList_sp}>date/time<button>dropdown</button></li>
                                <li ><h1>time</h1><p>mint left</p></li>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Seatplan;