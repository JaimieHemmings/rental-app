import '@/assets/styles/global.css'

export const metadata = {
  title: 'Dreckly Rentals',
  description: '',
  keywords: '',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
