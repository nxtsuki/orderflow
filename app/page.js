import Layout from "@/components/snapshots/layout";
import axios from 'axios';

async function getPageData() {
    const response = await axios.get("https://orderflow.site/data.json");
    return [
            {
                "title": "CL Exhaustion 6",
                "date": "01-26-2024",
                "snapinfos": [
                    {
                        "img": ["https://i.gyazo.com/a8ae60aae446e05ab1671eff05decb14.png","https://i.gyazo.com/91a7633b844bff27c1dce9529b6d6f9e.png","https://i.gyazo.com/dc8c27ec7e335e8cb5fd5a7476193bd1.png","https://i.gyazo.com/95442f2e789446ef8a6e1757c926d584.png"],
                        "texts": ["> oil was going short like it or not \n >  this is where it gets a little tricky, it is exhaustion HOWEVER price is leading delta so it`s going to go long no where does it change from going long to being exhaustion and becoming a sell, you normally look for a failed buy auction for that change \n > that is something I don`t think the guys are aware of yet"]
                    }
                ]
            }
        ]
}

export default async function Landing() {
    const data = await getPageData();
    return <Layout defSnaps={data}/>
}
