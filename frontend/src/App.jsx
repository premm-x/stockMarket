import { Routes, Route } from 'react-router-dom'
import DashboardHome from './pages/dashboardHome'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Profile from './component/Profile'
import StockPage from './pages/StockPage'
import Market from './pages/Market'
import Portfolio from './pages/Portfolio'
import MutualFund from './pages/MutualFund'
import HomePage from './pages/HomePage'
import StockOverview from './component/StockOverview'
import Testing from './pages/testing'
import { Sensex, Nifty } from './component/IndexStock'


function App() {


  return (
    <div>
      <Routes>
          <Route path='/' element={ <DashboardHome/> }  />
          <Route path='/login' element={ <SignIn/> }  />
          <Route path='/register' element={ <SignUp/> }  />
          <Route path='/profile' element={ <Profile/> }  />

          <Route path='/sensex' element={ <Sensex/> }  />
          <Route path='/nifty' element={ <Nifty/> }  />

          <Route path='/homepage' element={ <HomePage/> }  />
          <Route path='/watchlist' element={ <StockPage/> }  />
          <Route path='/market' element={ <Market/> }  />
          <Route path='/portfolio' element={ <Portfolio/> }  />
          <Route path='/mutual-fund' element={ <MutualFund/> }  />
          <Route path='/stockv' element={ <StockOverview/> }  />
          <Route path='/testing' element={ <Testing/> }  />
      </Routes>  
    </div>
  )
}

export default App
