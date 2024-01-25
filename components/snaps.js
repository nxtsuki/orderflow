import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger, DialogTitle } from "./ui/dialog";

export function Snapshots({ snaps }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative space-y-2 px-5 cursor-pointer">
                    <div className="relative w-full h-[300px] rounded-lg">
                        <div className="z-10 absolute h-full w-full bg-gradient-to-b from-transparent to-[#0C0A09] rounded-lg"/>
                        <Image
                            src={snaps.cover[0]}
                            alt="Your Image Alt Text"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <div className="font-medium leading-none">
                            <span>{snaps.title}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {snaps.date}
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="h-[calc(100vh-80px)] sm:max-w-[1450px] justify-start space-y-3">
                <DialogHeader>
                    <DialogTitle>
                        <span>{snaps.title}</span>
                    </DialogTitle>
                    <DialogDescription>
                        {snaps.date}
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full h-[calc(100%-44px)] overflow-y-scroll pr-1">
                    <div className="flex flex-col w-full h-full space-y-10">
                        {snaps.cover.map((item, index) => (
                            <div key={index}>
                                <Image
                                    src={item}
                                    alt="Your Image Alt Text"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                                <div className="pt-2">
                                    <span className="text-sm text-muted-foreground">Reeve Messages</span>
                                    {snaps.messages.map((item2, index2) => (
                                        <span key={index2} className="flex flex-col">
                                            {"[08:01 PM] " + item2.texts[index]}
                                        </span>
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