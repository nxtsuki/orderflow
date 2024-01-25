import Layout from "@/components/layout";
import axios from 'axios';

async function getPageData() {
    const response = await axios.get("https://orderflow.site/data.json");
    return [
        {
            "title": "GC Absorption 1",
            "date": "01-03-2024",
            "snapinfos": [
                {
                    "img": ["https://i.imgur.com/BEByMF0.png", "https://i.imgur.com/BEByMF0.png"],
                    "texts": ["prova"]
                },
                {
                    "img": ["https://i.imgur.com/BEByMF0.png", "https://i.imgur.com/BEByMF0.png"],
                    "texts": ["prova"]
                }
            ]
        }
    ]
}

export default async function Landing() {
    const data = await getPageData();
    return <Layout defSnaps={data}/>
}
