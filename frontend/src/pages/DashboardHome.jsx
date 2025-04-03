import React from 'react';
import DashboardTwo from './DashboardTwo';
import StockNews from '../component/StockNews';
import StockDetail from '../component/StockDetail';
import { Link } from 'react-router-dom'
import trading from '../assets/trading.jpg'
import CircularText from '../component/CircularText';

function DashboardHome() {
    return (
        <div className="min-h-screen bg-[#060606] text-white">
            {/* Navigation */}
            <nav className="bg-[#060606] border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold">T•/</div>
                            <div className="hidden md:block ml-10">
                                <div className="flex items-center space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Products</a>
                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Community</a>
                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Markets</a>
                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Brokers</a>
                                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">More</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-300 hover:text-white">EN</button>
                            <Link to={'/login'} className="text-gray-300 hover:text-white">Sign In</Link>
                            <Link to={'/register'} className="bg-[#2962FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        <div>
                            <h1 className="text-6xl font-bold mb-6">
                                Look first /<br />
                                Then leap.
                            </h1>
                            <p className="text-xl mb-8">
                                The best trades require research, then commitment.
                            </p>
                            <div className="space-y-4">
                                <Link to={'/register'} className="bg-gradient-to-r from-[#2962FF] to-[#A259FF] text-white px-8 py-3 rounded-lg text-lg font-medium w-full sm:w-auto">
                                    Get started for free
                                </Link>
                                <p className="text-gray-400 text-sm">
                                    $0 forever, no credit card needed
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                            <img
                                src={trading}
                                alt="Climber"
                                className="relative rounded-2xl z-10 w-full h-auto"
                            />
                            
                        </div>

                    </div>
                </div>

    

            </div>

            {/* section two */}
            <DashboardTwo />
            <StockDetail />
            <StockNews />
        </div>
    );
}

export default DashboardHome;