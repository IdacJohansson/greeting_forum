import { useQuery } from "@tanstack/react-query";
import Axios from 'axios';


const fetchData = async () => {
    const res = await fetch("http://localhost:8080/posts/all")
    return res.json();
}


const Page3 = () => {

    const { data } = useQuery({queryKey:['posts'], queryFn: fetchData })

    return (
        <>
            <h1>Tredje sidan</h1>
        <div className="thirdPage">
            <div className="box">
            {data?.map((post) => (
                <p> Alias: {post.alias} hälsning: {post.greeting}</p>
                ))}
            </div>

            </div>
        </>
    );
}

export default Page3;