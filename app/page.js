import Hero from "@/components/Hero"
import InfoBoxes from "@/components/InfoBoxes"
import HomeProperties from "@/components/HomeProperties"
import FeaturedProperties from "@/components/FeaturedProperties"

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
      <FeaturedProperties />
      <HomeProperties />
    </>
  )
}

export default HomePage
