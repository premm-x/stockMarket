import { useContext, useState } from 'react';
import { FiHome, FiSettings, FiLogOut, FiPlus } from 'react-icons/fi';
import { BiBell } from 'react-icons/bi';
import { RiDownload2Line, RiFileList2Line } from 'react-icons/ri';
import { BsGraphUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../config/usercontext';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

function Profile() {

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [stocks] = useState([
    { name: 'ELCIDIN', exchange: 'BSE', price: '1,34,500.00', change: '+1,746.85', changePercent: '+1.32%', isPositive: true },
    { name: 'APARINDS', exchange: 'NSE', price: '5,475.75', change: '-7.55', changePercent: '-0.14%', isPositive: false },
    { name: 'BSE', exchange: 'NSE', price: '5,854.85', change: '+188.85', changePercent: '+3.45%', isPositive: true },
    { name: 'MAZDOCK', exchange: 'NSE', price: '2,603.95', change: '+25.40', changePercent: '+0.89%', isPositive: true },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex  items-center justify-end mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 font-semibold cursor-pointer text-blue-600">
              <FiSettings className="w-4 h-4 texblueay-600" /> <p>SETTING</p>
            </div>
            <div onClick={()=>{navigate('/')}} className="flex cursor-pointer items-center space-x-2 font-semibold text-blue-600">
              <FiLogOut className="w-4 h-4 text-blue-600" /> <p>LOGOUT</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <button className="text-blue-600">VIEW TRADING BALANCE SUMMARY</button>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gray-600 mb-2">Trading Balance</p>
              <p className="text-2xl font-semibold">₹0.00</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded flex items-center">
                ADD FUNDS
              </button>
              <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded flex items-center">
                WITHDRAW
              </button>
            </div>
          </div>

          <button className="text-blue-600 mb-8">VIEW FUNDS TRANSACTION DETAILS</button>


          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <RiFileList2Line className="w-8 h-8 mx-auto mb-4 text-orange-400" />
              <p>Trades & Charges</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <RiFileList2Line className="w-8 h-8 mx-auto mb-4 text-teal-400" />
              <p>Statement - Ledger</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <BsGraphUp className="w-8 h-8 mx-auto mb-4 text-red-400" />
              <p>Profit & Loss</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <RiDownload2Line className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <p>Download Reports</p>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}

export default Profile;