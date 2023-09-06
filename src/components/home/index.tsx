import Hero from "./Hero";
import Products from "./Products";
import Waitlist from "../common/Waitlist";
import RoadMap from "./RoadMap";

export default function HomeComponent() {
  return (
    <>
      <Hero />
      <RoadMap />
      <Products />
      <Waitlist />
    </>
  )
}
