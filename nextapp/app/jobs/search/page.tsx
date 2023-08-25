"use client"

import { useState, useEffect } from 'react';
import { IJobs } from "@/app/models/IJobs";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Search() {
    const [data, setData] = useState<IJobs[]>([]); 

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:3000/api/jobs");
                const responseData = await response.json();
                setData(responseData); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData(); 
    }, []);

    return (
        <>
            <div>
                {data.map((job) => (
                    <div key={job.id}> 
                        <h2>{job.title}</h2> 
                    </div>
                ))}
            </div>
        </>
    );
}

