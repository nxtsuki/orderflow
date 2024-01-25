import fsPromises from 'fs/promises';
import path from 'path'
import Layout from "@/components/layout";
import axios from 'axios';

async function getPageData() {
    const response = await axios.get("https://github.com/nxtsuki/orderflow/blob/main/data.json");
    return [
        {
            title: "GC Absorption 1",
            date: "01-03-2024",
            cover: ["https://i.imgur.com/BEByMF0.png", "https://i.imgur.com/BEByMF0.png"],
            messages: [
                {
                    "texts": ["ciao", "lezzo"] 
                },
                {
                    "texts": ["mazzo", "ccecco"]
                }
            ]
        }
    ]
}

export default async function Landing() {
    const data = await getPageData();
    return <Layout defSnaps={data}/>
}
