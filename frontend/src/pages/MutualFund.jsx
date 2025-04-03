import { useState } from 'react';
import Navbar from '../component/Navbar';
import mm from '../assets/mm.png'

function MutualFund() {
    const [showMore, setShowMore] = useState(false);

    const quickLinks = [
        { label: 'All', active: true },
        { label: 'SIP With 100', price: 100 },
        { label: 'SIP With 500', price: 500 },
        { label: 'High Return' },
        { label: 'Best of SBI' },

    ];

    const initialFunds = [
        {
            name: 'SBI PSU Fund',
            type: 'Direct • Growth',
            minSip: 500,
            investors: '2.1L',
            returns: 31,
            logo: '🏦'
        },
        {
            name: 'Invesco India PSU Equity Fund',
            type: 'Direct • Growth',
            minSip: 500,
            investors: '4.8K',
            returns: 30,
            logo: '📈'
        },
        {
            name: 'HDFC Infrastructure Fund',
            type: 'Direct • Growth',
            minSip: 100,
            investors: '5.3K',
            returns: 30,
            logo: '🏗️'
        },
        {
            name: 'Aditya Birla Sun Life PSU Equity Fund',
            type: 'Direct • Growth',
            minSip: 100,
            investors: '5.2L',
            returns: 29,
            logo: '💰'
        },
        {
            name: 'ICICI Prudential Infrastructure Fund',
            type: 'Direct • Growth',
            minSip: 100,
            investors: '6.9K',
            returns: 29,
            logo: '🏢'
        }
    ];

    const additionalFunds = [
        {
            name: 'Axis Small Cap Fund',
            type: 'Direct • Growth',
            minSip: 500,
            investors: '8.2L',
            returns: 28,
            logo: '📊'
        },
        {
            name: 'Nippon India Small Cap Fund',
            type: 'Direct • Growth',
            minSip: 100,
            investors: '7.5L',
            returns: 27,
            logo: '💎'
        },
        {
            name: 'Tata Digital India Fund',
            type: 'Direct • Growth',
            minSip: 150,
            investors: '3.2L',
            returns: 26,
            logo: '💻'
        },
        {
            name: 'Kotak Emerging Equity Fund',
            type: 'Direct • Growth',
            minSip: 1000,
            investors: '4.1L',
            returns: 25,
            logo: '📈'
        },
        {
            name: 'DSP Midcap Fund',
            type: 'Direct • Growth',
            minSip: 500,
            investors: '6.3L',
            returns: 24,
            logo: '🚀'
        }
    ];

    const news = [
        {
            text: 'news data news data news data news data news data news data news data',
            image: 'src',
            change: -2,
            source: 'dj',
            time: '3 min',
            type: 'stock'
        },
        {
            text: 'news data news data news data news data news data news data news data',
            image: 'src',
            change: 3,
            source: 'cvm',
            time: '2 min',
            type: 'crypto'
        },
        {
            text: 'news data news data news data news data news data news data news data',
            image: 'src',
            change: -8,
            source: 'dry',
            time: '1 min',
            type: 'stock'
        },
        {
            text: 'news data news data news data news data news data news data news data',
            image: 'src',
            change: 5,
            source: 'kju',
            time: '5 min',
            type: 'stock'
        },
    ]

    const funds = showMore ? [...initialFunds, ...additionalFunds] : initialFunds;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-6xl mx-auto">

                {/* Explore Section */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Explore Mutual Funds</h2>
                    </div>

                    {/* Quick Filters */}
                    <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                        {quickLinks.map((link, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${link.active
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Funds List */}
                    <div className="space-y-4">
                        {funds.map((fund, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-4 border-b last:border-0"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">{fund.logo}</span>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{fund.name}</h3>
                                        <p className="text-sm text-gray-500">{fund.type}</p>
                                        <div className="flex gap-4 mt-1 text-sm text-gray-600">
                                            <span>Min. SIP ₹{fund.minSip}</span>
                                            <span>•</span>
                                            <span>Investors: {fund.investors}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-semibold text-green-600">{fund.returns}%</div>
                                    <div className="text-sm text-gray-500">per year</div>
                                </div>
                            </div>
                        ))}

                        <button
                            className="w-full text-center text-blue-600 py-2 hover:bg-blue-50 rounded-md transition-colors"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? 'SHOW LESS ↑' : 'VIEW MORE →'}
                        </button>
                    </div>



                </div>

                {/* news */}
                <div className='w-full my-5'>
                    <div>
                        <h1 className="text-2xl font-bold mb-6">News</h1>
                        <div className="grid grid-cols-4 gap-4  overflow-y-auto">

                            {news.map((news, idx) => (
                                <div key={idx} className="border rounded-lg p-2 bg-white">
                                    <div className='flex items-center justify-center gap-4 '>
                                        <img src={mm} className='w-20 h-20 rounded-lg' alt="Market News" />
                                        <p className="text-base pb-1 text-gray-600">{news.text}</p>
                                    </div>
                                    <div className='flex items-center justify-center gap-5 pb-2'>
                                        <span className='bg-indigo-100 border border-gray-200 px-2 py-1 rounded-full'><p className='text-gray-500 text-sm'>{news.type}</p></span>
                                        <span className='bg-indigo-100 border border-gray-200 px-2 py-1 rounded-full'><p className='text-gray-500 text-sm'>{news.change < 0 ? '' : '+'}{news.change}</p></span>
                                    </div>
                                    <hr />
                                    <div className='flex items-center justify-between '>
                                        <p>Source from: <span className='text-blue-600'>{news.source}</span></p>
                                        <p>{news.type}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MutualFund;