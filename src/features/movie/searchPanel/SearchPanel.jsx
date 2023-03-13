import styles from "./SearchPanel.module.css"
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import { classNames } from 'primereact/utils';



export function SearchPanel() {
    return (
        <div className={styles.Container}>
            <div>
                <p className={styles.header1}>
                    WELCOME TO BOLETO
                </p>
                <h1 className={styles.header2}>WHAT ARE YOU LOOKING FOR</h1>
            </div>
            <div className={styles.searchBox}>
                <div className={styles.searchWrapper}>
                    <input className={styles.searchInput}
                        placeholder="Search for Movies"
                        type="text" />
                    <svg className={styles.searchIcon + ' bi bi-search'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <div className={styles.searchOption}>
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png" alt="" />
                    <label className={styles.opotionLable}>City</label>
                   <Dropdown placeholder="selectcity"></Dropdown>
                </div>
                <div className={styles.searchOption}>
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/date.png" alt="" />
                    <label className={styles.opotionLable}>Date</label>
                   <Dropdown placeholder="selectcity"></Dropdown>
                </div>
                <div className={styles.searchOption}>
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png" alt="" />
                    <label className={styles.opotionLable}>Cinema</label>
                   <Dropdown placeholder="selectcity"
                    className={classNames({'p-dropdown' :styles.pdropdown })} ></Dropdown>
                </div>
            </div>
        </div>
    )
}

