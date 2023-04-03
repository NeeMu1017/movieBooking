import React from "react";
import Navbar from "../../navbar/Navbar";
import BookinfSummary from "../bookingsummer/BookingSumer";
import styles from "./Seatplan.module.css";


function Seatplan() {
    const length4 = new Array(4).fill(1);
    const length6 = new Array(6).fill(1);
    const slever = ["G", "F"];
    const gold = ['E', "D", "c", "B", "A"];
    const availableseate = ['F6','F7','F10','F3', 'F2','G1','G2', 'G6', 'G9', 'G10']





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
                                <li className={styles.itemsListdate_sp}>date/time
                                    <button className={styles.Back_button}>date
                                    </button>
                                </li>
                                <li ><h1>05:00</h1><h6>mint left</h6></li>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="container">
                        <div className={styles.screen_area} >
                            <hr className={styles.screen_before} />
                            <h4 className={styles.screen} id="screen">Screen</h4>
                            <hr className={styles.screen_after} />
                        </div>
                        <dir className={styles.screen_img}>
                            <img src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png" width="90%" />
                        </dir>
                        <div className={styles.screen_area} >
                            <hr className={styles.screen_before} />
                            <h4 className={styles.screen_text} id="screen">silver plush</h4>
                            <hr className={styles.screen_after} />
                        </div>
                        <div className={styles.steet_sp}>
                            {
                                slever.map(r =>
                                    <ul >
                                        <p >{r}</p>
                                        {
                                            <li >
                                                {
                                                    length4.map((item,i) =>
                                                        <img src=
                                                        {
                                                            availableseate.includes(r+(i+1)) ? 
                                                            "https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png":
                                                            "https://pixner.net/boleto/demo/assets/images/movie/seat01.png" 
                                                        }
                                                        height="45px" alt="##" />)
                                                }
                                            </li>
                                        }
                                        {
                                            <li >
                                                {
                                                    length6.map((item,i) =>  <img src=
                                                        {
                                                            availableseate.includes(r+(i+1)) ? 
                                                            "https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png":
                                                            "https://pixner.net/boleto/demo/assets/images/movie/seat01.png" 
                                                        }
                                                        height="45px" alt="##" />)
                                                }
                                            </li>
                                        }
                                        {
                                            <li >
                                                {
                                                    length4.map((item,i)=>  <img src=
                                                    {
                                                        availableseate.includes(r+(i+1)) ? 
                                                        "https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png":
                                                        "https://pixner.net/boleto/demo/assets/images/movie/seat01.png" 
                                                    }
                                                    height="45px" alt="##" />)
                                                }
                                            </li>
                                        }
                                        <p className={styles.steet_name}>{r}</p>
                                    </ul>
                                )
                            }





                        </div>
                        <div className={styles.screen_area} >
                            <hr className={styles.screen_before} />
                            <h4 className={styles.screen_text} id="screen">gold plush</h4>
                            <hr className={styles.screen_after} />
                        </div>
                        <div className={styles.steet_sp}>
                            {
                                gold.map(r =>
                                    <ul >
                                        <p >{r}</p>
                                        {
                                            <li >
                                                {
                                                    length4.map(i => <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01.png" height="45px" alt="##" />)
                                                }
                                            </li>
                                        }
                                        {
                                            <li >
                                                {
                                                    length6.map(i => <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01.png" alt="##" height="45px" />)
                                                }
                                            </li>
                                        }
                                        {
                                            <li >
                                                {
                                                    length4.map(i => <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01.png" alt="##" height="45px" />)
                                                }
                                            </li>
                                        }
                                        <p className={styles.steet_name}>{r}</p>
                                    </ul>
                                )
                            }





                        </div>
                        <div className={styles.booksummmary}>
                            <div className="container">
                                <BookinfSummary />
                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div className="container">

            </div>
            <div className={styles.flooter}>

            </div>
        </div>
    )
}

export default Seatplan;