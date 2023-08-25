import { IJobs } from "@/app/models/IJobs";
import { GetStaticProps, InferGetStaticPropsType } from "next";


export const getStaticProps: GetStaticProps<
{data: IJobs[]}> = async() => {
    const response = await fetch("api/jobs")
    const data = await response.json()
    return {props: {data}}
}

const Search = ({
    data} : InferGetStaticPropsType<typeof getStaticProps>) => {
        console.log(data)
    return <>
    <div>
        {JSON.stringify(data)}
    </div>
    </>
}

export default Search;