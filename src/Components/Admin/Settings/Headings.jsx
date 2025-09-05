import React from 'react';

function Headings({ heading }) {
  return (
    <h2 class='mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
      {heading}
    </h2>
  );
}

export default Headings;
