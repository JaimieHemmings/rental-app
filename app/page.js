import Link from "next/link"
import Hero from "@/components/Hero"
import InfoBoxes from "@/components/InfoBoxes"
import HomeProperties from "@/components/HomeProperties"

export const metadata = {
  title: 'Dreckly Rentals | Homepage',
  description: 'Find rental properties available in Cornwall',
  keywords: 'Rental, Cornwall, Rent',
}
const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  )
}

export default HomePage
