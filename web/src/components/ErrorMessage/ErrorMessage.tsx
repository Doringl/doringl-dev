import { Flex } from '@chakra-ui/react';
import React from 'react';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return (
    <Flex justifyContent='center' alignItems='center' mb='1em'>
      <h1 style={{ color: 'darkred' }}>{text}</h1>
    </Flex>
  );
};

export default ErrorMessage;
