"use client"

import { Snapshots } from "./snaps";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { format } from "date-fns"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import moment from "moment";
import 'moment/locale/it';
import Link from "next/link";
import { usePathname } from 'next/navigation'
moment.locale('it');

export default function Layout({defSnaps}) {
    const [date, setDate] = useState({});
    const [snaps, setSnaps] = useState(defSnaps);
    const pathname = usePathname();

    const search = (query) => {
        if (!query) {
            setSnaps(defSnaps);
            return;
        }
    
        const filteredSnaps = defSnaps.filter(item =>
            item.title && item.title.toLowerCase().includes(query.toLowerCase())
        );
    
        setSnaps(filteredSnaps);
    };

    const filteredSnaps = snaps?.filter(snap => {
        if (date?.from && date?.to) {
            const snapDate = moment(snap.date, "MM-DD-YYYY");
            console.log(snapDate)
            return snapDate.isSameOrAfter(moment(date.from, "DD-MM-YYYY")) && snapDate.isSameOrBefore(moment(date.to, "DD-MM-YYYY"));
        }
        return true;
    });

    return (
        <div className="relative flex flex-col h-screen pt-14 max-w-6xl mx-auto">
            <div className="flex flex-col h-[11rem]">
                <div className="absolute top-5 right-0 gap-4 flex">
                    <Link href={"/chats"}>
                        <Button variant={pathname === "/chats" ? "default" : "ghost"}>Chats</Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={pathname === "/" ? "default" : "ghost"}>Snapshots</Button>
                    </Link>
                </div>
                <div className="mt-6 space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Reeve&apos;s Vault
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        An archive of Reeve Order Flow snapshots.
                    </p>
                    <div className="flex space-x-3 pt-2">
                        <Input type="ticker" placeholder="Search by title" className="w-[280px]" onChange={(e) => search(e.target.value)}/>
                        <div className={"grid gap-2"}>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        id="date"
                                        variant={"outline"}
                                        className={cn(
                                            "w-fit justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                        
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date?.from ? (
                                            date.to ? (
                                                <>
                                                    {format(date.from, "LLL dd, y")} -{" "}
                                                    {format(date.to, "LLL dd, y")}
                                                </>
                                            ) : (
                                                format(date.from, "LLL dd, y")
                                            )
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        initialFocus
                                        mode="range"
                                        defaultMonth={date?.from}
                                        selected={date}
                                        onSelect={setDate}
                                        numberOfMonths={2}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
                <Separator className="my-4" />
            </div>
            <div className="flex-1 text-lg h-full overflow-hidden">
                <div className="relative h-full">
                    <ScrollArea className="h-full">
                        {filteredSnaps?.length === 0 && <p className="text-sm text-muted-foreground text-center">No results found</p>}
                        <div className="flex pb-4 gap-x-4 gap-y-10 grid grid-cols-3">
                            {filteredSnaps?.map((snap, index) => (
                                <Snapshots snaps={snap} key={index}/>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}