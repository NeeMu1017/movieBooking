import { useEffect, useState } from "react"
import Navbar from "../../navbar/Navbar"
import { Banner } from "../banner/Banner"
import { MovieCard } from "../moviecard/Moviecard"
import { SearchPanel } from "../searchPanel/SearchPanel"

import style from "./Home.module.css"

export function Home() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/api/movie")
            .then((res) => res.json())
            .then(movies => {
                setMovies(movies);
            })
    }, [])

    return (
        <div>
            <Navbar />
            <div className={style.homecontainer}>
                <div>
                    <Banner />
                </div>
                <div className="mb-3">  <SearchPanel /></div>


                <div className="row">
                    {
                        movies.map(m => (
                            <div key={m._id} className="col-md-2 ">
                                <MovieCard key={m._id} movie ={m} />
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}