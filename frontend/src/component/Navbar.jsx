import React, { useContext } from 'react';
import { FiHome } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../config/usercontext';

const Navbar = () => {

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <div className='w-full mb-4'>
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="w-f px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div onClick={()=>{navigate('/sensex')}} className="flex cursor-pointer items-center space-x-4">
                            <span className="text-gray-900 font-semibold">SENSEX</span>
                            <div>
                                <span className="text-green-600">76,617.44</span>
                                <span className="text-green-600 ml-1">+592.31(+0.78%)</span>
                            </div>
                        </div>
                        <div onClick={()=>{navigate('/nifty')}} className="flex cursor-pointer items-center space-x-4">
                            <span className="text-gray-900 font-semibold">NIFTY</span>
                            <div>
                                <span className="text-green-600">23,332.35</span>
                                <span className="text-green-600 ml-1">+166.65(+0.72%)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link to={'/homepage'}><FiHome className="w-5 h-5 text-gray-600" /></Link>
                        <Link to={'/market'}>Markets</Link>
                        <Link to={'/watchlist'}>Watchlist</Link>
                        <Link to={'/portfolio'}>Portfolio</Link>
                        <Link to={'/mutual-fund'}>Mutual fund</Link>
                        <div className='flex items-center justify-center gap-2'>
                            <p>{user.username}</p>
                            <Link to={'/profile'} className="bg-blue-600 text-white px-2 py-1 rounded-full">PS</Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;