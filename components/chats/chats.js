import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger, DialogTitle } from "../ui/dialog";
import { cn } from "@/lib/utils";

export function Chats({ chats }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative space-y-2 px-5 cursor-pointer">
                    <div className="relative w-full h-[300px] rounded-lg">
                        <div className="z-10 absolute h-full w-full bg-gradient-to-b from-transparent to-[#0C0A09] rounded-lg"/>
                        <Image
                            src={chats.preview}
                            alt="Your Image Alt Text"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <div className="font-medium leading-none">
                            <span>{chats.title}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {chats.date}
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="h-[calc(100vh-80px)] sm:max-w-[1450px] justify-start space-y-3">
                <DialogHeader>
                    <DialogTitle>
                        <span>{chats.title}</span>
                    </DialogTitle>
                    <DialogDescription>
                        {chats.date}
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full h-[calc(100%-44px)] overflow-y-scroll pr-1">
                    <div className="flex flex-col w-full h-full space-y-5">
                        {chats.chat.map((chat, chatIndex) => (
                            <div key={chatIndex} className="space-y-1">
                                <p className="text-sm text-muted-foreground">{chat.author}</p>
                                <div className={cn("rounded-lg inline-block", chat.attachment && chat.attachment[chatIndex] ? "py-2 px-3 bg-stone-800" : null)}>
                                    {
                                        chat.attachment ? 
                                            <Image
                                                src={chat.attachment}
                                                alt={"img" + String(chatIndex)}
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="w-full h-auto mb-1"
                                            />
                                        :
                                        null
                                    }
                                    {chat?.message?.split(' \n ').map((line, lineIndex) => (
                                        <div key={lineIndex}>
                                            <p className="bg-stone-800 rounded-lg py-2 px-3 inline-block font-light">
                                                {line}
                                                <br/>
                                            </p>
                                            {
                                                chat.attachment == null
                                                ?
                                                <div className="h-2"/>
                                                :
                                                null
                                            }
                                            
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
