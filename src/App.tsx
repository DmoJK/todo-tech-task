import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainProductContainer from './components/mainPage/products/MainProductContainer'
import HeaderContainer from './components/header/HeaderContainer'
import Categories from './components/mainPage/categories/Categories'
import ProductPageContainer from './components/productPage/ProductPageContainer'
import AboutUs from './components/aboutUsPage/AboutUs'
import AlertNotification from './components/common/Alert'
import CabinetPageContainer from './components/cabinetPage/CabinetPageContainer'
import { FC } from 'react'

const App: FC = () => {
  return (
    <div className='App'>
      <HeaderContainer />
      <AlertNotification />
      <div className='content'>
        <Routes>
          <Route path='/' element={<> <div className='presentation'></div> <Categories /></>} />
          <Route path='/dogs' element={<><div className='presentation'></div> <Categories /> </>} />
          <Route path='/dogs/:category' element={<><div className='presentation'></div> <Categories /> </>} />
          <Route path='/cats' element={<><div className='presentation'></div> <Categories /> </>} />
          <Route path='/cats/:category' element={<><div className='presentation'></div> <Categories /> </>} />
        </Routes>
        <Routes>
          <Route path='/cabinet' element={<CabinetPageContainer />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/' element={<MainProductContainer />} />
          <Route path='/dogs' element={<MainProductContainer />} />
          <Route path='/dogs/:category' element={<MainProductContainer />} />
          <Route path='/dogs/:category/:id' element={<ProductPageContainer />} />
          <Route path='/cats' element={<MainProductContainer />} />
          <Route path='/cats/:category' element={<MainProductContainer />} />
          <Route path='/cats/:category/:id' element={<ProductPageContainer />} />
          <Route path='*' element={<div className='not-found'>404 not found</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App