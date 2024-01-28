import Layout from "@/components/chats/layout";
import axios from 'axios';

async function getPageData() {
    const response = await axios.get("https://orderflow.site/chats.json");
    return response.data
}

export default async function Chats() {
    const data = await getPageData();
    return <Layout defChats={data}/>
}
