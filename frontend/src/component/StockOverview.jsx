import React from 'react'

function StockPriceDetails() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4">Stock Price Details</h2>

            {/* stock col view */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="space-y-4">
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">Open</span>
                        <span className="font-medium">1,33,154.00</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">High</span>
                        <span className="font-medium">1,35,801.05</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">Low</span>
                        <span className="font-medium">1,32,601.05</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">Previous Close</span>
                        <span className="font-medium">1,34,500.00</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">Average Price</span>
                        <span className="font-medium">1,34,257.87</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">Volume</span>
                        <span className="font-medium">35</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">Open Interest</span>
                        <span className="font-medium">-</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="text-gray-600">Bid / Ask</span>
                        <span className="font-medium">0.00 / 0.00</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Fundamental Ratios</h3>
                <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Market Cap</div>
                        <div className="font-medium">Rs 2,672 Cr</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Sector Return</div>
                        <div className="font-medium">11.8%</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Market Return</div>
                        <div className="font-medium">3.27%</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">1 year Return</div>
                        <div className="font-medium">396431.36%</div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Know Your Stocks</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Quality</span>
                            <span className="text-sm text-gray-500">1/5</span>
                        </div>
                        <span className="text-sm text-gray-600">Below Average</span>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Valuation</span>
                            <span className="text-sm text-gray-500">3/5</span>
                        </div>
                        <span className="text-sm text-gray-600">Attractive</span>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Financial</span>
                            <span className="text-sm text-gray-500">1/5</span>
                        </div>
                        <span className="text-sm text-gray-600">Expensive</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

function StockOverview() {
    return (
        <div className="min-h-screen bg-white">
            <StockPriceDetails />
        </div>
    )
}

export default StockOverview