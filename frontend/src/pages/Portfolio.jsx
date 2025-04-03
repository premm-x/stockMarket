import { useState } from 'react'
import Navbar from '../component/Navbar';

function Portfolio() {
    const [showMarketValue, setShowMarketValue] = useState(true);

    const investments = [
        { type: 'Equity', icon: '📈', amount: 0.00, marketValue: 0.00 },
        { type: 'Mutual Funds', icon: '💰', amount: 0.00, marketValue: 0.00 },
        { type: 'SGB', icon: '🏦', amount: 0.00, marketValue: 0.00 },
        { type: 'Bonds', icon: '📊', amount: 0.00, marketValue: 0.00, gain: { overall: 0.00, today: 0.00 } }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <div className="max-w-4xl mx-auto h-[calc(100vh-90px)] flex flex-col items-center justify-center gap-10">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-600">📊</span>
                            <span className="text-gray-600">Invested Amount</span>
                        </div>
                        <div className="text-xl font-semibold">₹ 0.00</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-600">📈</span>
                            <span className="text-gray-600">Current Value</span>
                        </div>
                        <div className="text-xl font-semibold">₹ 0.00</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-green-600">📊</span>
                            <span className="text-gray-600">Overall Gain</span>
                        </div>
                        <div className="text-xl font-semibold text-green-500">₹ 0.00 <span className="text-sm">0%</span></div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-green-600">📈</span>
                            <span className="text-gray-600">Today's Gain</span>
                        </div>
                        <div className="text-xl font-semibold text-green-500">₹ 0.00 <span className="text-sm">0%</span></div>
                    </div>
                </div>

                {/* Investment Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Investment Amt.</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Market Value</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Overall G/L</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Today's G/L</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {investments.map((investment, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-2">{investment.icon}</span>
                                            <span className="font-medium text-gray-900">{investment.type}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">₹{investment.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">₹{investment.marketValue.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap text-green-500">
                                        {investment.gain && `₹${investment.gain.overall.toFixed(2)}`}
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap text-green-500">
                                        {investment.gain && `₹${investment.gain.today.toFixed(2)}`}
                                    </td>
                                    {/* <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            {investment.type === 'Mutual Funds' ? 'START SIP' : 'GET STARTED'}
                                        </button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default Portfolio;