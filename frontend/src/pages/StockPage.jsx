import React, { useState } from 'react';
import ChartWindow from '../component/ChartWindow';
import StockList from '../component/StockList';
import Navbar from '../component/Navbar';

function StockPage() {


    const [users] = useState([
        { name: 'Alice', exchange: 'BSE', price: 1245, pchange: '-1.2', change: '-45' },
        { name: 'Bob', exchange: 'BSE', price: 767, pchange: '+3.8', change: '+6' },
        { name: 'Charlie', exchange: 'NSE', price: 45, pchange: '-2.4', change: '-5' },
        { name: 'Darvid', exchange: 'BSE', price: 245, pchange: '+2.1', change: '+15' },
        { name: 'Alice', exchange: 'BSE', price: 1245, pchange: '-1.2', change: '-45' },
        { name: 'Bob', exchange: 'BSE', price: 767, pchange: '+3.8', change: '+6' },
        { name: 'Charlie', exchange: 'NSE', price: 45, pchange: '-2.4', change: '-5' },
        { name: 'Darvid', exchange: 'BSE', price: 245, pchange: '+2.1', change: '+15' },
        { name: 'Alice', exchange: 'BSE', price: 1245, pchange: '-1.2', change: '-45' },
        { name: 'Bob', exchange: 'BSE', price: 767, pchange: '+3.8', change: '+6' },
        { name: 'Charlie', exchange: 'NSE', price: 45, pchange: '-2.4', change: '-5' },
        { name: 'Darvid', exchange: 'BSE', price: 245, pchange: '+2.1', change: '+15' },
    ]);

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

    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState({
        Alice: [],
        Bob: [],
        Charlie: [],
        David: []
    });



    return (
        <div>
            <Navbar />
            <div className="flex h-[100vh] -mt-4 bg-white">
                <StockList
                    stockData={stockData}
                    selectedUser={selectedUser}
                    onSelectUser={setSelectedUser}
                />
                    <div className="flex-1">
                        <ChartWindow
                            selectedUser={selectedUser}
                            messages={messages[selectedUser]}

                        />
                    </div>
                
            </div>
        </div>
    );
}

export default StockPage;