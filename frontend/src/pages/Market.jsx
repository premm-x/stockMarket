import { useState } from 'react'
import mm from '../assets/mm.png'
import Navbar from '../component/Navbar';

const stockData = [
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 263.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 229.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 4234.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 263.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 229.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 4234.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 263.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 229.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 4234.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 263.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 229.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 4234.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 263.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 229.78, change: -0.64, changePercent: -0.28 },

]

const stockDataRight = [
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 63.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 29.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 23.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 27.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 23.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 129.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 134.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 23.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 29.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 63.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 29.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 23.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 27.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 23.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 129.78, change: -0.64, changePercent: -0.28 },
    { symbol: 'HAL', name: 'HINDUSTAN AE', exchange: 'NSE', cap: 'LARGE CAP', price: 134.40, change: 10.70, changePercent: 0.25 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'IRFC', name: 'INDIAN RAILWAY', exchange: 'NSE', cap: 'LARGE CAP', price: 127.48, change: 3.10, changePercent: 2.48 },
    { symbol: 'WIPRO', name: 'WIPRO LTD', exchange: 'NSE', cap: 'LARGE CAP', price: 23.60, change: 1.00, changePercent: 0.38 },
    { symbol: 'JIOFIN', name: 'JIO FIN SERVICES', exchange: 'NSE', cap: 'LARGE CAP', price: 29.78, change: -0.64, changePercent: -0.28 },

]

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

const lowPriceRanges = [
    { label: '<₹50', value: 50 },
    { label: '<₹100', value: 100 },
    { label: '<₹200', value: 200 }
]

function Market() {

    const [activeTab, setActiveTab] = useState('Most Bought')
    const [range, setRange] = useState(50)

    const filtedStocks = stockDataRight.filter(stock => stock.price <= range && stock.price >= (range === 50 ? 1 : range / 2))

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Trade Easy</h1>

                {/* Tabs */}
                <div className="flex gap-6 mb-6">
                    <button
                        className={`${activeTab === 'Most Bought' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} pb-2`}
                        onClick={() => setActiveTab('Most Bought')}
                    >
                        Most Bought
                    </button>
                    <button
                        className={`${activeTab === 'Popular Stocks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} pb-2`}
                        onClick={() => setActiveTab('Popular Stocks')}
                    >
                        Popular Stocks
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex gap-6">

                    {activeTab == 'Most Bought' ?
                        // most bought
                        <div className="flex-1">
                            <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        📈
                                    </div>
                                    <h2 className="font-semibold">Most bought stocks on Angel One in Last 30 Days</h2>
                                </div>
                                <p className="text-sm text-gray-600">Last updated 1 minutes ago</p>
                            </div>

                            {/* Stock Grid */}
                            <div className="grid grid-cols-3 gap-4 h-96 overflow-y-auto p-2">
                                {stockData.map((stock, idx) => (
                                    <div key={idx} className="border rounded-lg p-4 bg-white">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold">{stock.symbol}</h3>
                                                <p className="text-sm text-gray-600">{stock.name}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">₹{stock.price}</p>
                                                <p className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.change >= 0 ? '+' : ''}{stock.changePercent}%)
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{stock.exchange}</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{stock.cap}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        :  //popular
                        <div className="flex-1">
                            <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        📈
                                    </div>
                                    <h2 className="font-semibold">Popular stocks with new users</h2>
                                </div>
                                <p className="text-sm text-gray-600">Last updated 6 minutes ago</p>
                            </div>

                            {/* Stock Grid */}
                            <div className="grid grid-cols-3 gap-4 h-96 overflow-y-auto p-2">
                                {stockData.map((stock, idx) => (
                                    <div key={idx} className="border rounded-lg p-4 bg-white">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold">{stock.symbol}</h3>
                                                <p className="text-sm text-gray-600">{stock.name}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">₹{stock.price}</p>
                                                <p className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.change >= 0 ? '+' : ''}{stock.changePercent}%)
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{stock.exchange}</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{stock.cap}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    }

                    {/* Right Section */}
                    <div className="w-80 ">
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h2 className="font-semibold mb-4">Stocks with Low Market Price</h2>
                            <div className="flex gap-2 mb-4">
                                {lowPriceRanges.map((range) => (
                                    <button
                                        key={range.value}
                                        className="bg-white px-3 py-1 rounded text-sm hover:bg-gray-50"
                                        onClick={() => { setRange(range.value) }}
                                    >
                                        {range.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='w-full pl-3 pr-6'>
                            <div className=' border-b flex items-center justify-between'>
                                <h1>Company</h1>
                                <h1 className=''>LTP</h1>
                            </div>
                        </div>


                        {/* Stock Grid */}
                        <div className=" h-96 overflow-y-auto px-2 pb-2">
                            {filtedStocks.map((stock, idx) => (
                                <div key={idx} className="border-b p-2 h-14">
                                    <div className="flex justify-between items-center mb-2">
                                        <div>
                                            <h3 className="font-semibold">{stock.symbol}</h3>
                                            <p className="text-xs text-gray-400">{stock.name}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">₹{stock.price}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                {/* news */}
                <div className='w-full mt-5'>
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
                                        <span className='bg-indigo-100 border border-gray-200 px-2 py-1 rounded-full'><p className='text-gray-500 text-sm'>{news.change < 0 ? '': '+'}{news.change}</p></span>
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
    )
}

export default Market