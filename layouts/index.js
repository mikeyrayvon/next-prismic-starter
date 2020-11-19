import Header from 'components/Header'
import Footer from 'components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
};

export default DefaultLayout;
