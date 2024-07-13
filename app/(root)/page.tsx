import Collections from "@/components/Collections";
import ImageCarousal from "@/components/ImageCarousal";
import ProductList from "@/components/ProductList";
import InfiniteAnimations from "@/components/InfiniteAnimations";
import Image from "next/image";

import BgVideo from "@/components/BgVideo";

export default function Home() {
  let images : Array<Object> = [    {
      imgSrc:
        "/bannerImage_3.jpg",
      title:
        "Enchanting Beauty: A Captivating Journey through Elegance and Graceful Presence",
    },
    {
      imgSrc:
        "/bannerImage_2.jpg",
      title:
        "Majestic Splendor: Radiating Confidence and Charm in Every Graceful Movement",
    },
    {
      imgSrc:
        "/bannerImage_1.jpg",
      title:
        "Timeless Elegance: Embracing the Essence of Glamour and Empowered Femininity",
    },
    {
      imgSrc:
        "/bannerImage_4.jpg",
      title:
        "Timeless Elegance: Embracing the Essence of Glamour and Empowered Femininity",
    }
  ];

  let brandImage : Array<String> = ["/allenSoly.png", "/fabIndia.png", "/gucci.png",  "/levi.png", "/nike.png", "/puma.png"];

  return (
    <div className="bg-[#f0d8af]">
      {/* <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" /> */}
      <ImageCarousal  imageProps={images}/>
      <Collections />
      <ProductList />
      <BgVideo/>
      <InfiniteAnimations brandImage={brandImage}/>
    </div>
  );
}

export const dynamic = "force-dynamic";
