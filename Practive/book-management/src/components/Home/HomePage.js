import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export default function HomePage(){

    const books = useSelector(state => state.books)

    useEffect(() => {
        console.log(books)
    });

    return(
        <div>
            HomePage
        </div>
    )
}