import Layout from "@/components/chats/layout";
import axios from 'axios';

async function getPageData() {
    const response = await axios.get("https://orderflow.site/chats.json");
    return [
        {
            "preview": "https://i.gyazo.com/87b3b4c3a9ba988d85cb4faf5202781b.png",
            "title":"Exhaustion Conversation",
            "date":"01-27-2024",
            "chat": [
                {
                    "message": "is this exhaustion and if so, where would you sell ?",
                    "attachment": "https://i.gyazo.com/87b3b4c3a9ba988d85cb4faf5202781b.png",
                    "author": "Reeve"
                },
                {
                    "message": "Why would you sell with just exhaustion.  What else do you have????",
                    "author": "David Dosch"
                },
                {
                    "message": "nothing this is all you have \n everyone now looking for the answer \n thats cheating",
                    "author": "Reeve"
                },
                {
                    "message": "can be both exhaustion or absorption",
                    "author": "Praveen"
                },
                {
                    "message": "how are you going to trade this, we have been taught how \n how do I know if I must buy the top or sell for exhaustion ?",
                    "author": "Reeve"
                },
                {
                    "message": "I will look for above delta and go long",
                    "author": "Praveen"
                },
                {
                    "message": "why not sell , looks just like exhaustion",
                    "author": "Reeve"
                },
                {
                    "message": "for exhaustion - I dont know where it will turn \n there are many levels of pivots \n or liquidity levels before it can decide to turn",
                    "author": "Praveen"
                },
                {
                    "message": "thats very easy, for exhaustion it will always run the stop at the top",
                    "author": "Reeve"
                },
                {
                    "message": "without book - I cannot decide where the stop run will come",
                    "author": "Praveen"
                },
                {
                    "message": "no if this is exhaustion this is where I would place my sell, I know this in advance \n you don`t need the book here this is pure delta read",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201180999342628884/image.png?ex=65c8e1fb&is=65b66cfb&hm=9408a0035b2907badff9360879a481cf76f5aec21339e87816007f57255b9adc&",
                    "author": "Reeve"
                },
                {
                    "message": "I was thnking about that level as well - but how can you do that with confidence ?",
                    "author": "Praveen"
                },
                {
                    "message": "The problem here is, is this is NOT exhaustion, I am going to buy for the top, now you guys need to tell me why, Ray never stressed or taught this in the beginning and it screwed me on numerous occasions as I would sell that as exhaustion",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201181941869838436/image.png?ex=65c8e2db&is=65b66ddb&hm=1cbfa680d94c00ac2f5a5a78946f5b2f9db6f36945a2193cedf21351a212bd56&",
                    "author": "Reeve"
                },
                {
                    "message": "So your point is?",
                    "author": "David Dosch"
                },
                {
                    "message": "the point is how do you know to buy that and not sell it ?",
                    "author": "Reeve"
                },
                {
                    "message": "Because sellers never succeeded in the previous auction - never broke the previous pivot to the down side",
                    "author": "Praveen"
                },
                {
                    "message": "mark that auction and show me ",
                    "author": "Reeve"
                },
                {
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201182520377626754/image.png?ex=65c8e365&is=65b66e65&hm=ff5b39d4dcee85b2e2d07427e26a30fffae609ffe64676b69657e6dbd95ad527&",
                    "author": "Praveen"
                },
                {
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201182531702231221/image.png?ex=65c8e368&is=65b66e68&hm=b53857c0d65a95f7ac977e00b17801bdcf4111bba7a48d98da9d1fb0970ab1e3&",
                    "author": "David Dosch"
                },
                {
                    "message": "not quite but on the right track",
                    "author": "Reeve"
                },
                {
                    "message": "Here the low was never taken out so its a failed auction once it took out the high of the pivot",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201182966794158080/image.png?ex=65c8e3d0&is=65b66ed0&hm=c96d2674a3413836b3f71f11dbad55ac3d17b379c101582a1d3d962f207d99c2&",
                    "author": "Reeve"
                },
                {
                    "message": "That is what my chart shows.  FA in circle.  But also you mention it took out high.",
                    "author": "David Dosch"
                },
                {
                    "message": "Untill that happens you don`t know if delta is leading or not, if price is leading then that is not exhaustion and in this case price was leading",
                    "author": "Reeve"
                },
                {
                    "message": "here is the high it took out \n the problem is you could very easily be tricked by that setup, the tick was also down so previously I would of been prepared to sell that HARD",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201183184814100571/image.png?ex=65c8e404&is=65b66f04&hm=2348d54fc85d7c98bb64a9ed86bdea15fcde3ad1a5ada0d3019a3aa4f43ef5bb&",
                    "author": "Reeve"
                },
                {
                    "message": "Yes - but I was looking too short term for auction",
                    "author": "Praveen"
                },
                {
                    "message": "you need to know if price is leading or lagging",
                    "author": "Reeve"
                },
                {
                    "message": "So we have to wait for Higher High - higher low and then break the pivot",
                    "author": "Praveen"
                },
                {
                    "message": "yes but not always the immediate one, go through a couple of examples so you get it",
                    "author": "Reeve"
                },
                {
                    "message": "sell here ?",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201184001940000841/image.png?ex=65c8e4c6&is=65b66fc6&hm=37fd1a1efba2cdb4a813a665f1e3aaa5fc1066ee81822f94ed0984765aea505d&",
                    "author": "Reeve"
                },
                {
                    "message": "NO Buy",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201184015839940711/image.png?ex=65c8e4ca&is=65b66fca&hm=1d36c6fc40b24fc305dd5e9177cce23e0109cf87c4109dd5f8b68135e9211f1c&",
                    "author": "Reeve"
                },
                {
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201184027940503694/image.png?ex=65c8e4cd&is=65b66fcd&hm=6ce175c41ff835750b793270517b9115e4f9c65d39c356400b36968b438e9709&",
                    "author": "Reeve"
                },
                {
                    "message": "Are you buying this because you expect the market maker to run the stops to the north to shake the deltas out?",
                    "author": "Andy Investor"
                },
                {
                    "message": "no if price is leading you are a buyer not a seller",
                    "author": "Reeve"
                },
                {
                    "message": "exhaustion or not you buying or selling ?",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201185432038297660/image.png?ex=65c8e61b&is=65b6711b&hm=9aa5a18255445852b6727e7394a00d6b5f5cff03b974b9628d5847733adbba41&",
                    "author": "Reeve"
                },
                {
                    "message": "it`s exhaustion delta is leading you going to buy",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201185487784779977/image.png?ex=65c8e629&is=65b67129&hm=d7942de10a463a4509edd91f458cb8815e3e75b4e2662e5b48f980d212f58d06&",
                    "author": "Reeve"
                },
                {
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201185693758664714/image.png?ex=65c8e65a&is=65b6715a&hm=92b9d6ab01bce1b31a7f44f4b91e39a0b507455ea795604860b57e5fa95dc247&",
                    "author": "Reeve"
                },
                {
                    "message": "Ok, one thing that I think is clouding this in a major way is the notion of what is leading.  In order to determine if something is leading, we need to be very clear as to exactly what two points in time are being used as a reference. \n Ok, so you seem to be using a previous high or low in delta as to your frame of reference",
                    "author": "Andy Investor"
                },
                {
                    "message": "Andy, that is not something I`m going to go down the path with you need to watch Rays vid on that one \n You are the trader you need to know of the prior auction failed and if price has now reversed",
                    "author": "Reeve"
                },
                {
                    "message": "at this point, delta is still leading",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201186007798788267/image.png?ex=65c8e6a5&is=65b671a5&hm=e2b0ca9f83d83da80a8645ce82c5f1cc0008e5434ac57b1a039daea4ed55a8cd&",
                    "author": "Reeve"
                },
                {
                    "message": "This trade is hard for me",
                    "author": "Praveen"
                },
                {
                    "message": "I know its hard but you have to figure out of delta is leading or not or else you are going to be buying when you should be selling \n You can use the book and pink line to help you as well however this is solely delta based \n even I struggle at times as the can be a micro within the macro \n I think it was Thursday where I posted a few trades that I said that I had bought the top or sold the bottom which is something I never do, I`m a fader \n but I could see very clearly that price was leading and we had to buy not sell as much as it goes against my grain",
                    "author": "Reeve"
                },
                {
                    "message": "Reeve how do you use the pink line ?",
                    "author": "Praveen"
                },
                {
                    "message": "Praveen I`m not to concerned about the pink line, I`m happy to trade against it, so if it lines up with the trade I know its good, if it doesn`t I still take the trade but am prepared for  the trade to reverse against me so I`m more cautious but I`ll still take it, Ray wont take a trade against the pink line \n It gives a heads up",
                    "author": "Reeve"
                },
                {
                    "message": "Ok - so the red/orange line and price should go together for the most mart right ?",
                    "author": "Praveen"
                },
                {
                    "message": "ok like here, how is price going down when both tick and delta are going up ?",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201186890938859520/image.png?ex=65c8e777&is=65b67277&hm=87a53340a2edd6fd6827cedd60f363048359059c3f63c26f1ac80fc50077446c&",
                    "author": "Reeve"
                },
                {
                    "message": "This is what I`m aware of. so you don`t want to just ignore that pink line",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201186905518252042/image.png?ex=65c8e77b&is=65b6727b&hm=dd3ed46ab6951a1e5cedd919f6a5fa64ca788787711c2a40fd2402992a7d7bdd&",
                    "author": "Reeve"
                },
                {
                    "message": "That looks like Delta Vol is dropping off.",
                    "author": "David Dosch"
                },
                {
                    "message": "no delta carried on up. tick started leveling off but swas still going up while price came down",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201187208082772048/image.png?ex=65c8e7c3&is=65b672c3&hm=bd166738c3656f3cc1b1f1777d9debe4d89143332630d5a069b4301503f817db&",
                    "author": "Reeve"
                },
                {
                    "message": "Why not here Reeve ?",
                    "attachment": "https://cdn.discordapp.com/attachments/1200183617398259797/1201187538522615888/image.png?ex=65c8e812&is=65b67312&hm=6e3baaeaaa1e47d2f42b442ab7893bea72e6deb5bb189e0266392bad4cd9467c&",
                    "author": "Praveen"
                },
                {
                    "message": "deltas and tick are up, thats not set up as a potential exhaustion, as my example",
                    "author": "Reeve"
                },
                {
                    "message": "I thought that was absorption long",
                    "author": "Praveen"
                },
                {
                    "message": "I was using exhaustion as an example but if you wat to buy that then buy it, thats actually a competative auction",
                    "author": "Reeve"
                }
            ]
        }
    ]
}

export default async function Chats() {
    const data = await getPageData();
    return <Layout defChats={data}/>
}