import React from 'react';
import Card from './Hero/Card';
import MessageCard from './Messages/MessageCard';
import MessageDate from './Messages/MessageDate';

function DashboardMain() {
  return (
    <div className='p-4 sm:ml-64'>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
        <div className='grid  gap-4 mb-4 sm:grid-cols-1 lg:grid-cols-3'>
          <Card title={'Latest Booking'} />
          <Card title={'Revenue Information'} />
          <Card title={'Login Users'} />
        </div>
        <div className=' p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white mb-5'>
            Messages
          </h5>
          <div className='p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
            <MessageDate date='January 13th, 2022' />
            <ol className='mt-3 divide-y divide-gray-200 dark:divide-gray-700'>
              <MessageCard
                name='Bonnie Green'
                message='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                time='2h ago'
              />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
