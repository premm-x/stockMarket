import React from 'react';

const StockList = ({ stockData, selectedUser, onSelectUser }) => {

    return (
        <div className="border-r w-96 bg-[#ffffff] h-screen flex flex-col">
            <div className="p-4 border-b">
                <h2 className="text-lg text-gray-500 font-semibold">Stock</h2>
            </div>
            <div className="overflow-auto flex-1">
                {stockData.map((stock, idx) => (
                    <div
                        key={idx}
                        onClick={() => onSelectUser(stock.name)}
                        className={`py-2 px-6 cursor-pointer border-b-[0.5px] border-gray-200 hover:bg-indigo-100 transition ${selectedUser === stock.name ? 'bg-indigo-100' : ''
                            }`}
                    > 

                        <div key={idx} className={`rounded-lg ${selectedUser === stock.name ? 'bg-indigo-100' : ''}`}>
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
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockList;