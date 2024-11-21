import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  
  );
}
export function CarouselDemo() {
  return (
    <Carousel>
  <CarouselContent>
    <CarouselItem>hello</CarouselItem>
    <CarouselItem>nohello</CarouselItem>
    <CarouselItem>allhello</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}