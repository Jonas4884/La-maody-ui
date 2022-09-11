import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
    borderTopWidth={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('gray.200', 'gray.700')}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={'14'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Nos contact</ListHeader>
            <Link href={'#'}>+261 34 12 025 20</Link>
            <Link href={'#'}>+261 33 12 025 20</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Nos messagerie </ListHeader>
            <Link href={'#'}>mysite@gmail.com</Link>
          </Stack>

          <Stack align={'flex-end'}>
          <Text>© Copyright</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
