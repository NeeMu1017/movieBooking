import React from "react";
import styles from  "./Bookingsummary.module.css"

function BookinfSummary() {
    return (
        <div className={styles.banner_bs}>
            <div className={styles.seateno_bs}>
                <p>You have choosed seat</p>
                <h3>D5,D6</h3>
            </div>
            <div className={styles.price_bs}>
                <p className={styles.price_p_bs} >Totale Price</p>
                <h2 >150$</h2>
            </div>
           <button className={styles.procced_bs}>Procceds</button>
        </div>
    )
}

export default BookinfSummary;