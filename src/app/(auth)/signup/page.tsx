import SignupScreen from '@/components/user/auth/SingupScreen';
import { getMetadata } from '@/utils/metadata/getMetaData';
import React from 'react';
export const metadata = getMetadata('signup');
const signup = () => {
  return (
    <div>
      <SignupScreen/>
    </div>
  );
};

export default signup;
