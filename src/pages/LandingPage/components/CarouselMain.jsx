import { useState, useEffect } from "react"

import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselMain(props) {
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="bg-foreground-50/75 w-full flex flex-col justify-center rounded">
            <Carousel setApi={setApi} className="w-full rounded overflow-hidden" plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}>
                <CarouselContent className="w-full min-h-[400px] sm:min-h-[300px] !p-0 !ml-0">
                    {props.children}
                </CarouselContent>
            </Carousel>
            <div className="py-2 text-center text-sm text-foreground-900">
                {current} of {count}
            </div>
        </div>
    )
}