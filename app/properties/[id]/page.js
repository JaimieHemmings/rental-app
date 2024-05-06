import Link from "next/link"
import { FaArrowLeft, FaLocationArrow, FaBed, FaBath, FaRulerCombined, FaCheck, FaBookmark, FaShare, FaPaperPlane } from 'react-icons/fa'
import Image from "next/image"

const PropertyPage = () => {
  return (
    <>
      <section>
        <div class="container-xl m-auto">
          <div class="grid grid-cols-1">
            <Image
              src="/images/properties/a1.jpg"
              alt=""
              class="object-cover h-[400px] w-full"
              sizes='100vw'
              width={0}
              height={0}
            />
          </div>
        </div>
      </section>
      <section>
        <div class="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2 mt-1"/> Back to Properties
          </Link>
        </div>
      </section>
      <section class="bg-blue-50">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div
                class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div class="text-gray-500 mb-4">Apartment</div>
                <h1 class="text-3xl font-bold mb-4">Boston Commons Retreat</h1>
                <div
                  class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <FaLocationArrow className="text-lg text-orange-700 mr-2 mt-1" />
                  <p class="text-orange-700">
                    120 Tremont Street Boston, MA 02111
                  </p>
                </div>

                <h3 class="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                  Rates & Options
                </h3>
                <div class="flex flex-col md:flex-row justify-around">
                  <div
                    class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                  >
                    <div class="text-gray-500 mr-2 font-bold">Nightly</div>
                    <div class="text-2xl font-bold">
                      <i class="fa fa-xmark text-red-700"></i>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                  >
                    <div class="text-gray-500 mr-2 font-bold">Weekly</div>
                    <div class="text-2xl font-bold text-blue-500">£1,100</div>
                  </div>
                  <div class="flex items-center justify-center mb-4 pb-4 md:pb-0">
                    <div class="text-gray-500 mr-2 font-bold">Monthly</div>
                    <div class="text-2xl font-bold text-blue-500">£4,200</div>
                  </div>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-lg font-bold mb-6">Description & Details</h3>
                <div
                  class="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
                >
                  <p>
                    <FaBed /> 3
                    <span class="hidden sm:inline"> Bed&#40;s&#41;</span>
                  </p>
                  <p>
                    <FaBath /> 2
                    <span class="hidden sm:inline"> Bath&#40;s&#41;</span>
                  </p>
                  <p>
                    <FaRulerCombined />
                    1,500 <span class="hidden sm:inline">sqft</span>
                  </p>
                </div>
                <p class="text-gray-500 mb-4">
                  This is a beautiful apartment located near the commons
                </p>
                <p class="text-gray-500 mb-4">
                  We have a beautiful apartment located near the commons. It is a
                  2 bedroom apartment with a full kitchen and bathroom. It is
                  available for weekly or monthly rentals.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-lg font-bold mb-6">Amenities</h3>

                <ul
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
                >
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Wifi
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Full
                    kitchen
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Washer &
                    Dryer
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Free
                    Parking
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Hot Tub
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />24/7
                    Security
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Wheelchair Accessible
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Elevator
                    Access
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Dishwasher
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Gym/Fitness Center
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Air
                    Conditioning
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Balcony/Patio
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Smart TV
                  </li>
                  <li>
                    <FaCheck className="fas fa-check text-green-600 mr-2 mb-1 inline" />Coffee
                    Maker
                  </li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <div id="map"></div>
              </div>
            </main>

            <aside class="space-y-4">       
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
              >
                <FaBookmark className="mr-2" /> Bookmark Property
              </button>
              <button
                class="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
              >
                <FaShare className="mr-2" /> Share Property
              </button>

              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-6">Contact Property Manager</h3>
                <form>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    for='name'
                  >
                    Name:
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='name'
                    type='text'
                    placeholder='Enter your name'             
                    required
                  />
                </div>
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="email"
                    >
                      Email:
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      className='block text-gray-700 text-sm font-bold mb-2'
                      for='phone'
                    >
                      Phone:
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='phone'
                      type='text'
                      placeholder='Enter your phone number'
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="message"
                    >
                      Message:
                    </label>
                    <textarea
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                      id="message"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                      type="submit"
                    >
                      <FaPaperPlane className="mr-2" /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </> 
  )
}

export default PropertyPage
