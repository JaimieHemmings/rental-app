import Link from "next/link"

export const metadata = {
  title: 'Dreckly Rentals | Homepage',
  description: 'Find rental properties available in Cornwall',
  keywords: 'Rental, Cornwall, Rent',
}
const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1> 
      <Link href="/properties">View Properties</Link>    
    </div>
  )
}

export default HomePage
