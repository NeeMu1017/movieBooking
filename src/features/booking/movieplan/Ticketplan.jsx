import { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import styles from "./Ticketplan.module.css";
import { Dropdown } from "primereact/dropdown";

import { Link, useParams } from "react-router-dom";

function Ticketplan() {
    const [cinema, setcinema] = useState([]);
    const [movie,setmovie] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch("http://localhost:4000/api/movie/cinema/" + id)
            .then(res => res.json())
            .then((res) => setcinema(res));
    }, [])

    useEffect(()=>{
        fetch("http://localhost:4000/api/movie/" +id)
        .then(res => res.json())
        .then((res)=> setmovie(res))
    },[])
    return (
        <div>
            <Navbar />
            <section>
                <div className={styles.namemm_tp}>
                    <div className="container">
                        <h1 className={styles.tp_head}>{movie.name}</h1>
                        <p className={styles.tp_lang}>{movie.languages}</p>
                    </div>
                </div>
            </section>
            <section>


                <div className={styles.banner}>

                    <div className={styles.dropdown_manu}>
                        <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png" alt="" />
                        <label htmlFor="">city</label>
                        <Dropdown placeholder="slect"></Dropdown>
                    </div>
                    <div className={styles.dropdown_manu}>
                        <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png" alt="" />
                        <label htmlFor="">city</label>
                        <Dropdown placeholder="slect"></Dropdown>
                    </div>
                    <div className={styles.dropdown_manu}>
                        <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png" alt="" />
                        <label htmlFor="">city</label>
                        <Dropdown placeholder="slect"></Dropdown>
                    </div>
                    <div className={styles.dropdown_manu}>
                        <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png" alt="" />
                        <label htmlFor="">city</label>
                        <Dropdown placeholder="slect"></Dropdown>
                    </div>

                </div>
            </section>
            <div className={styles.ticketplan}>
                <div className="container">
                    <div className="row ">
                        <div className="col-9 d-flex ">
                            <ul className={styles.tp_ul}>
                                {
                                    cinema.map(c => (

                                        <li className={styles.tp_li}>
                                            <div className={styles.tp_cinema}>
                                                <div>
                                                    <i className="pi pi-heart m-3"></i>
                                                </div>
                                                <span className={styles.tp_ctnm}>{c.name}</span>
                                                <div>
                                                    <i className="pi pi-map-marker m-3"></i>
                                                </div>
                                            </div>
                                            <div className={styles.tp_time}>
                                                {
                                                    c.timings.map(t => (
                                                        <Link to={"/seatplan"}>
                                                        <div className={styles.tp_tti}>{t.time}</div>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        </li>


                                    ))
                                }
                            </ul>

                        </div>
                        <div className="col-3">
                            <img src="https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner03.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ticketplan;