import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Skeleto() {
  return (
      <>
        <Stack spacing={1} className="hidden sm:block lg:block">      
        <Skeleton variant="rectangular" width={260} height={170} />
        <Skeleton variant="text" width={260} height={20} />
        <Skeleton variant="text" width={260} height={20}/>
        <div className='flex space-x-16'>
        <Skeleton variant="rectangular" className="mr-3" width={80} height={50} />
        <Skeleton variant="rectangular" width={80} height={50} />
        </div>
        </Stack>
        <Stack spacing={1} className='block sm:hiden lg:hidden'>      
        <Skeleton variant="rectangular" width={"100%"} height={170} />
        <Skeleton variant="text" width={"100%"} height={20} />
        <Skeleton variant="text" width={"100%"} height={20}/>
        <div className='flex space-x-36'>
        <Skeleton variant="rectangular" className="mr-3" width={100} height={60} />
        <Skeleton variant="rectangular" width={100} height={60} />
        </div>
        </Stack>
      </>
    
  );
}
