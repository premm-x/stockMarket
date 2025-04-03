import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import mm from '../assets/mm.png'

function ProductCard({ icon, title, badge, className }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-3 cursor-pointer hover:bg-gray-100">
            <span className={`text-2xl ${className}`}>{icon}</span>
            <span className="font-medium">{title}</span>
            {badge && (
                <span className={`text-xs px-2 py-1 rounded ${badge === 'NEW' ? 'bg-blue-600 text-white' : 'bg-red-500 text-white'
                    }`}>
                    {badge}
                </span>
            )}
        </div>
    );
}

function CourseCard({ image, level, enrolled, title, description, duration }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    <span className="w-4 h-4">⏰</span>
                    {duration}
                </span>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">{level}</span>
                    <span className="text-sm text-gray-500">{enrolled} ENROLLED</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}

function HomePage() {

    const [panel, setPanel] = useState('Stock Market');

    const category = [
        { name: 'Stock Market' },
        { name: 'Investment' },
        { name: 'Trading' },
        { name: 'Mutual Fund' },
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

    return (
        <div className="min-h-screen bg-gray-100 mb-9">
            <Navbar />
            <div className="max-w-6xl mx-auto space-y-4">

                {/* Products Section */}
                <section className='bg-white p-2 rounded-lg'>
                    <h2 className="text-xl font-semibold mb-6">Products</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ProductCard
                            icon="📢"
                            title="IPO"
                            badge="2 OPEN IPO"
                            className="text-blue-500"
                        />
                        <ProductCard
                            icon="💰"
                            title="Mutual Funds"
                            className="text-yellow-500"
                        />
                        <ProductCard
                            icon="🏆"
                            title="Gold Bonds"
                            className="text-yellow-600"
                        />
                        <ProductCard
                            icon="📈"
                            title="ETF"
                            badge="NEW"
                            className="text-green-500"
                        />
                    </div>

                </section>

                {/* Learning Section */}
                <section className='bg-white rounded-lg p-4'>
                    <h2 className="text-xl font-semibold mb-6">Learn with Smart Money by Angel One</h2>

                    <div className="flex gap-2 mb-8 flex-wrap">
                        {category.map((data, idx) => (
                            <span key={idx} onClick={() => { setPanel(data.name) }} className="px-4 cursor-pointer py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
                                {data.name}
                            </span>
                        ))}
                    </div>

                    {/* learning */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {panel === 'Stock Market' ?
                            <>
                                <CourseCard
                                    image="https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Stock+Market"
                                    level="INTERMEDIATE"
                                    enrolled="11.0K"
                                    duration="2 hours"
                                    title="How Does the Stock Market Work?"
                                    description="Demystify the mechanics of the market! Learn how the stock market operates in India, from choosing a broker to order placement and analysis."
                                />
                                <CourseCard
                                    image="https://placehold.co/600x400/10B981/FFFFFF/png?text=Investing"
                                    level="ADVANCED"
                                    enrolled="5,451"
                                    duration="< 1 hour"
                                    title="How To Start Investing in the Stock Market?"
                                    description="This module guides you on how to start investing in the stock market in India. Understand the entire process - from setting goals to choosing your investments and executing orders."
                                />
                                <CourseCard
                                    image="https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Basics"
                                    level="BEGINNER"
                                    enrolled="42.8K"
                                    duration="1 hour"
                                    title="Why To Invest in The Stock Market?"
                                    description="Understand how investing in the Indian stock market offers opportunities for financial growth and wealth creation. Learn how to invest in the Indian stock market and understand the basics of the market."
                                />
                            </> :
                            panel === 'Investment' ?
                                <>
                                    <CourseCard
                                        image="https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Stock+Market"
                                        level="INTERMEDIATE"
                                        enrolled="11.0K"
                                        duration="2 hours"
                                        title="How trading Does the Stock Market Work?"
                                        description="Demystify the mechanics of the market! Learn how the stock market operates in India, from choosing a broker to order placement and analysis."
                                    />
                                    <CourseCard
                                        image="https://placehold.co/600x400/10B981/FFFFFF/png?text=Investing"
                                        level="ADVANCED"
                                        enrolled="5,451"
                                        duration="< 1 hour"
                                        title="How To Start trading in the Stock Market?"
                                        description="This module guides you on how to start investing in the stock market in India. Understand the entire process - from setting goals to choosing your investments and executing orders."
                                    />
                                </> : panel === 'Trading' ?
                                    <>
                                        <CourseCard
                                            image="https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Stock+Market"
                                            level="INTERMEDIATE"
                                            enrolled="11.0K"
                                            duration="2 hours"
                                            title="How Does the Stock Market Work?"
                                            description="Demystify the mechanics of the market! Learn how the stock market operates in India, from choosing a broker to order placement and analysis."
                                        />
                                    </> : panel === 'Mutual Fund' ?
                                        <>
                                            <CourseCard
                                                image="https://placehold.co/600x400/10B981/FFFFFF/png?text=Investing"
                                                level="ADVANCED"
                                                enrolled="5,451"
                                                duration="< 1 hour"
                                                title="How To Start Investing in the Stock Market?"
                                                description="This module guides you on how to start investing in the stock market in India. Understand the entire process - from setting goals to choosing your investments and executing orders."
                                            />
                                            <CourseCard
                                                image="https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Basics"
                                                level="BEGINNER"
                                                enrolled="42.8K"
                                                duration="1 hour"
                                                title="Why To Invest in The Stock Market?"
                                                description="Understand how investing in the Indian stock market offers opportunities for financial growth and wealth creation. Learn how to invest in the Indian stock market and understand the basics of the market."
                                            />
                                        </> : <p>Invalid Syntax Error</p>

                        }
                    </div>



                </section>

                {/* news */}
                <div className='w-full my-5 '>
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

export default HomePage;