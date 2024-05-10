import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { GlobalProvider } from '@/context/GlobalContext'
import '@/assets/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: 'Dreckly Rentals',
  description: '',
  keywords: '',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default MainLayout
