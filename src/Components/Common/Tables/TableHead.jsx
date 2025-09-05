import React from 'react';

function TableHead({ heading }) {
  return (
    <th scope='col' className='px-6 py-3'>
      {heading}
    </th>
  );
}

export default TableHead;
