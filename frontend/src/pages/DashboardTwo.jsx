import trVideo from '../assets/tr.webm'

function DashboardTwo() {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-6xl font-bold mb-8">
                    Where the world does<br />markets
                </h1>
                <p className="text-xl text-gray-300 mb-12">
                    Join 100 million traders and investors taking the future into their own hands.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="text-gray-300 hover:bg-gray-800 rounded-lg px-4 py-2">Chart</button>
                    <button className="text-gray-300 hover:bg-gray-800 rounded-lg px-4 py-2">Trade</button>
                    <button className="text-gray-300 hover:bg-gray-800 rounded-lg px-4 py-2">Screen</button>
                    <button className="text-gray-300 hover:bg-gray-800 rounded-lg px-4 py-2">Analyze</button>
                    <button className="text-gray-300 hover:bg-gray-800 rounded-lg px-4 py-2">Learn</button>
                    <button className="text-gray-300 hover:bg-gray-800 rounded-lg px-4 py-2">Chat</button>
                </div>
            </div>
            <div className="mt-8">
                <div className="relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-[#1E222D] rounded-lg p-4 shadow-xl">
                            <video src={trVideo} autoPlay muted loop />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTwo