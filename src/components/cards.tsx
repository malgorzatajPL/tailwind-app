import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, image }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="relative w-full h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-800">{price}</span>
        </div>
      </div>
    </div>
  );
};

const PricingCards: React.FC = () => {
  const cards = [
    {
      title: 'Basic Plan',
      description: 'A great plan for starters.',
      price: '£10/month',
      image: 'https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg',
    },
    {
      title: 'Pro Plan',
      description: 'Perfect for professionals.',
      price: '£30/month',
      image: 'https://cdn.pixabay.com/photo/2023/08/18/01/32/cat-8197577_1280.jpg',
    },
    {
      title: 'Enterprise Plan',
      description: 'Large teams and organizations.',
      price: '£50/month',
      image: 'https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 pb-20">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default PricingCards;