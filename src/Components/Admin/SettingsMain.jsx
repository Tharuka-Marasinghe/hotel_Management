import React from 'react';
import Headings from './Settings/Headings';
import Form from '../Common/Form';
import Label from '../Common/Label';
import Input from '../Common/Input';
import Hr from '../../Components/Common/Hr';

function SettingsMain() {
  return (
    <div className='p-4 sm:ml-64'>
      <div className='p-4 border-2 border-gray-200  border-dashed rounded-lg dark:border-gray-700'>
        <>
          <Headings heading={'Basic Information'} />
          <Form>
            <div className='mt-5'>
              <Label text='Company Name' />
              <Input />
            </div>
            <div className='mt-3'>
              <Label text={'Company Logo Url'} />
              <Input />
            </div>
          </Form>
          <Hr className={'my-6'} />
        </>
        <>
          <Headings heading={'Color Sheme'} />
          <Form>
            <div className='mt-5'>
              <Label text='Primary Color' />
              <Input />
            </div>
            <div className='mt-5'>
              <Label text='Secondary Color' />
              <Input />
            </div>
          </Form>
          <Hr className={'my-6'} />
        </>
        <>
          <Headings heading={'Typography'} />
          <Form>
            <div className='mt-5'>
              <Label text='Font Family' />
              <Input />
            </div>
            <div className='mt-3'>
              <Label text={'Base Font Size'} />
              <Input />
            </div>
          </Form>
          <Hr className={'my-6'} />
        </>
        <>
          <Headings heading={'Live Preview'} />
        </>
      </div>
    </div>
  );
}

export default SettingsMain;
