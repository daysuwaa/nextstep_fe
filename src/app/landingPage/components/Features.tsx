import { Folder, MessageSquare, Target } from 'lucide-react';
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare/>,
      title: 'Reflect Daily',
      description: 'Write and record your thoughts effortlessly.'
    },
    {
      icon: <Folder/>,
      title: 'Stay Organized',
      description: 'Tag, sort, and revisit moments that matter.'
    },
    {
      icon:<Target/>,
      title: 'Track Growth',
      description: 'See how your mindset evolves over time.'
    }
  ];

  return (
    <section 
      id='features' 
      className='min-h-screen flex items-center justify-center px-4 py-16 mx-4'
    >
      <div className='max-w-7xl w-full'>
        {/* Section Header */}
        
        <div className='lg:text-center mb-16'>
            <div className='mb-4 inline-block'>
              <span className=' text-sage-600 font-semibold text-sm tracking-wider uppercase bg-sage-100  py-2 rounded-full'>
               Features
              </span>
            </div>
          <h2 className='text-4xl md:text-5xl font-bold text-[#527967] mb-4'>
            Everything You Need
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Simple tools to help you capture, organize, and grow through your daily reflections
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div 
              key={index}
              className='group bg-[#a3b9ae90] shadow-lg hover:shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2  border-[#6d8f7b]'
            >
              {/* Icon */}
              <div className='mb-6 text-6xl transform group-hover:scale-110 transition-transform duration-300'>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className='mt-6 h-1 w-12 bg-gradient-to-r from-sage-400 to-sage-600 rounded-full group-hover:w-full transition-all duration-500'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;