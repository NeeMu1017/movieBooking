import React from "react";
import {Card} from "primereact/card";
import styles from "./Moviecard.module.css"

export function MovieCard({movie}){
    const header = (
        <img src={movie.posterUrl} alt="card" />
    );
    const footer =(
        <div>
            <div className={styles.content}>
                <hr/>
                <div className={styles.rating}>
                    <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png' />
                    <span>{movie.rating}</span>                    
                </div>
                <div>
                    <img src="https://pixner.net/boleto/demo/assets/images/movie/cake.png" />
                    <span>{movie.rating}</span>                    
                </div>
            </div>
        </div>
    )
return(
    <div className={styles.card}>
      <Card title={movie.name} header={header} className="md:w-25rem" footer ={footer}
      ></Card>
    </div>
)
}