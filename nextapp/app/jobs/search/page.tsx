import { IJobs } from "@/app/models/IJobs";
import { GetStaticProps, InferGetStaticPropsType } from "next";



export default async function Search() {
   

    const response = await fetch("http://localhost:3000/api/jobs")
    const data = await response.json()
    console.log(data)

    return (
        <>
        <div>
            {JSON.stringify(data)}
        </div>
        </>
    )
}

