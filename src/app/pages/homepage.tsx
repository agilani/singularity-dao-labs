"use client"
import SearchBar from "@/components/searchBar";
import { useState, useEffect } from "react"


const Home = () => {
    const searchQuery = "adeel";
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <SearchBar defaultValue={searchQuery} />
        </div>
    )
}

export default Home;