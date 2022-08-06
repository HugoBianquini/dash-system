import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dash
      <Text as="span" color="pink.500" mx="0.5">
        -
      </Text>
      sys
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
}
