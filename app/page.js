import Layout from "@/components/layout";
import axios from 'axios';

async function getPageData() {
    const response = await axios.get("https://orderflow.site/data.json");
    return response.data
}

export default async function Landing() {
    const data = await getPageData();
    return <Layout defSnaps={data}/>
}
