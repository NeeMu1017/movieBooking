

import { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import MovieHeader from "../MovieHerader/MovieHeader";
import styles from "./MovieDetail.module.css"
import {useParams} from "react-router-dom"

function MovieDetail() {
    const [movie,setmovie] =useState({});
    const  {id} =useParams()

    useEffect(()=>{
         async function callapi(){
            const response = await fetch ("http://localhost:4000/api/movie/" + id)
            const prerenponce =await response.json()
            setmovie(prerenponce)
         }
         callapi();
    },[id])


    return (
        <div className={styles.body}>
            <Navbar />
            <section>
                <div className={styles.container1}>
                    <div className={styles.delitails_banner}>
                        <div >
                            <img src={movie.posterUrl} alt="" className={styles.tum_img} />
                        </div>
                        <MovieHeader movie ={movie}/>
                       
                    </div>
                </div>

            </section>
            <section >
                <div className={styles.banner}>                  
                    <div className={styles.container2}>
                        <div className={styles.banner_item}>
                            <div className={styles.item}>
                                <div className={styles.header}>
                                    <div className={styles.header_img}>
                                        <img src="https://pixner.net/boleto/demo/assets/images/movie/tomato2.png" alt="" />
                                    </div>
                                    <div>88%</div>
                                </div>
                                <p>tomatometer</p>

                            </div>
                            <div className={styles.item}>
                                <div className={styles.header}>
                                    <div className={styles.header_img}>
                                        <img src="	https://pixner.net/boleto/demo/assets/images/movie/cake2.png" alt="" />
                                    </div>
                                    <div>88%</div>
                                </div>
                                <p>Audience Score</p>                               
                            </div>
                        </div>
                        <button className={styles.btn1} >Book tickets </button>
                    </div>
                    
                </div>
                
                
                
            </section>


        </div>
    )
}

export default MovieDetail;