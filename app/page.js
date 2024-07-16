import Hero from "@/components/Hero";
import MiniCard from "@/components/MiniCard";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="container px-8 py-12 flex gap-4">
        <MiniCard imgSrc={"/images/sale.avif"} title={""}  />
        <MiniCard imgSrc={"/images/hiking.jpg"} title={"Hiking Pants"}  />
        <MiniCard imgSrc={"/images/summer.webp"} title={"Summer Collection"}  />
        <MiniCard imgSrc={"/images/party.jpg"} title={"Party Dress"}  />
      </div>

      <div className="bg-orange-300 h-[300px]">
        testing
      </div>
    </div>
  );
}
