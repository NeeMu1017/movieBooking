import Navbar from "../../navbar/Navbar"
import { Banner } from "../banner/Banner"
import { SearchPanel } from "../searchPanel/SearchPanel"

import style from "./Home.module.css"

export function Home() {
    return (
        <div>
            <Navbar />
            <div className={style.homecontainer}>
                <div>
                    <Banner />
                </div>

                <SearchPanel />
                <div className="text-light">
                    here movie grid
                </div>
            </div>
        </div>
    )
}