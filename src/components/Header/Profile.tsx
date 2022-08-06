import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Hugo Bianquini</Text>
        <Text color="gray.300" fontSize="small">
          hugobianquini@email.com
        </Text>
      </Box>

      <Avatar size="md" name="Hugo Bianquini" />
    </Flex>
  );
}
