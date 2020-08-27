import React, {useEffect, useState} from "react";
import VideoCard from "./VideoCard";
import './Results.css'
import axios from './axios'
import requests from "./requests";
import FlipMove from "react-flip-move";

export default function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[selectedOption])

    return(
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie}/>
                ))}
            </FlipMove>
        </div>
    )
}