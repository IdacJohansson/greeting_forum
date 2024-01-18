import { useQuery } from "@tanstack/react-query";
import GreetingStream from "./GreetingStream";
import React from "react";


const fetchData = async () => {
    const res = await fetch("http://localhost:8080/posts/all")
    return res.json();
}

const Page3 = () => {

    const { data, isPending, error } = useQuery({queryKey:['posts'], queryFn: fetchData })

    if (isPending) return "Loading..."
    if (error) return `An error has occurred!: ${error.message}`

    const reversedData = data.slice().reverse();

    return (
        <>
        <br/>
        <div className="thirdPage">
            <div className="box">
                <div className="greetings">
                    <h2>Greetings</h2>
                </div>
                <br/>
                <GreetingStream posts={reversedData} />
            </div>
        </div>
        </>
    );
}

export default Page3;