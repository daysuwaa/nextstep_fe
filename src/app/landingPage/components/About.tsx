import React from 'react';

const About = () => {
  return (
    <section 
      id='about' 
      className='min-h-screen flex items-center justify-center px-4 py-20 mx-4 '
    >
      <div className='max-w-6xl w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left side - Text content */}
          <div className='space-y-6'>
            <div className='inline-block'>
              <span className='text-sage-600 font-semibold text-sm tracking-wider uppercase bg-sage-100 px-4 py-2 rounded-full'>
                About Momento
              </span>
            </div>
            
            <h2 className='text-3xl md:text-5xl font-bold text-[#527967] leading-tight'>
              Your Journey, 
              <span className='text-sage-600'> Beautifully Preserved</span>
            </h2>
            
            <div className='space-y-4 text-gray-600 leading-relaxed text-lg'>
              <p>
                Momento is more than just a digital diary, it&apos;s a sacred space for your thoughts, 
                dreams, and daily reflections. We believe that taking time to pause and reflect 
                is essential for personal growth and mental well-being.
              </p>
              
              <p>
                Born from the simple idea that everyone&apos;s story matters, Momento provides 
                a peaceful, distraction-free environment where you can be completely yourself. 
                No judgment, no pressure,just you and your thoughts.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-sage-600'>10k+</div>
                <div className='text-sm text-gray-600 mt-1'>Active Users</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-sage-600'>1M+</div>
                <div className='text-sm text-gray-600 mt-1'>Entries Written</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-sage-600'>100%</div>
                <div className='text-sm text-gray-600 mt-1'>Private & Secure</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className='relative'>
            <div className='relative bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl lg:p-12 shadow-2xl'>
              {/* Decorative elements */}
              <div className='absolute top-8 right-8 text-6xl opacity-20'>🕯️</div>
              <div className='absolute bottom-12 left-8 text-5xl opacity-20'>🪶</div>
              <div className='absolute top-1/2 right-12 text-4xl opacity-20'>🌿</div>
              
              {/* Main content box */}
              <div className='bg-white rounded-2xl p-8 shadow-lg relative z-'>
                <div className='space-y-6'>
                  <div className='lg:flex items-start gap-4'>
                    <div className='bg-sage-100 p-3 rounded-lg'>
                      <svg className='w-6 h-6 text-sage-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>Our Mission</h3>
                      <p className='text-gray-600 text-sm'>
                        To make self-reflection accessible, meaningful, and a natural part of everyday life.
                      </p>
                    </div>
                  </div>

                  <div className='lg:flex items-start gap-4'>
                    <div className='bg-sage-100 p-3 rounded-lg'>
                      <svg className='w-6 h-6 text-sage-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>Your Privacy</h3>
                      <p className='text-gray-600 text-sm'>
                        Your thoughts are yours alone. We use end-to-end encryption to keep your entries completely private.
                      </p>
                    </div>
                  </div>

                  <div className='lg:flex items-start gap-4'>
                    <div className='bg-sage-100 p-3 rounded-lg'>
                      <svg className='w-6 h-6 text-sage-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>Built with Care</h3>
                      <p className='text-gray-600 text-sm'>
                        Every feature is thoughtfully designed to support your mental wellness and personal growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative bottom accent */}
              <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-sage-300 rounded-full opacity-20 blur-2xl'></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;