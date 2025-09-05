import React from 'react';
import Headings from './Settings/Headings';
import Form from '../Common/Form';
import Label from '../Common/Label';
import Input from '../Common/Input';
import Hr from '../../Components/Common/Hr';

function AddUserMain() {
  return (
    <div className='p-4 sm:ml-64'>
      <div className='p-4 border-2 border-gray-200  border-dashed rounded-lg dark:border-gray-700'>
        <>
          <Headings heading={'Add New User'} />
          <Form>
            <div className='mt-5'>
              <Label text='User Name' />
              <Input />
            </div>
            <div className='mt-3'>
              <Label text={'Email'} />
              <Input />
            </div>
            <div className='mt-3'>
              <Label text={'Password'} />
              <Input />
            </div>
          </Form>
          <Hr className={'my-6'} />
        </>
      </div>
    </div>
  );
}

export default AddUserMain;
