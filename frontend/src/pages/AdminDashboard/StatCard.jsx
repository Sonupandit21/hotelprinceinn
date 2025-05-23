import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = () => {
  const cards = [
    {
      title: 'Total Sales',
      value: '₹3.456K',
      iconBg: 'bg-green-400',
      percentage: '0.43%',
      isPositive: true,
     
    },
    {
      title: 'Total Profit',
      value: '₹42.2K',
      iconBg: 'bg-orange-400',
      percentage: '4.35%',
      isPositive: true,
      
    },
    {
      title: 'Total Client Message',
      value: '1000',
      iconBg: 'bg-purple-500',
      percentage: '2.59%',
      isPositive: true,
      link: '/products'
    },
    {
      title: 'Total Users',
      value: '3.465',
      iconBg: 'bg-blue-400',
      percentage: '-0.95%',
      isPositive: false,
      link: '/users'
    },
  ];

  return (
    <div className="min-h-screen-45 bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 flex flex-col justify-between gap-4">
            <div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconBg}`}>
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <div className="text-2xl font-semibold mt-4">{card.value}</div>
              <div className="text-gray-500 text-sm">{card.title}</div>
              <div className={`text-sm flex items-center mt-1 ${card.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {card.isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                {card.percentage}
              </div>
            </div>
            <a
              href={card.link}
              className="text-blue-500 hover:underline text-sm mt-2"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard;
