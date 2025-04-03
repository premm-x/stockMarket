import React from 'react';
import LineChartComponent from './LineChartComponent';

const ChartWindow = ({ selectedUser, messages, sendMessage }) => {

    const [newMessage, setNewMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            sendMessage(selectedUser, newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="bg-gray-100 p-4 border-b">
                {!selectedUser && <h2 className="text-xl font-semibold">SBIN</h2>}
                <h2 className="text-xl font-semibold">{selectedUser}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <LineChartComponent />
            </div>

            
        </div>
    );
};

export default ChartWindow;