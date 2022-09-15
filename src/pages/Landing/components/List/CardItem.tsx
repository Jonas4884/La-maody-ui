import { Center, useColorModeValue, Stack, Heading, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {item} from "../../../../types/proptypes/item/item";
import {formatCurrency} from "../../../../utils";
import {ShopButton} from "./ActionButton";

const STATIC_IMAGE = 'https://th.bing.com/th/id/R.ac730cf7f9f5a5b84e732b80e600d24e?rik=%2bE5ijXu%2b%2byT44g&pid=ImgRaw&r=0';

export const CardItem = (props :item) => (
  <Center py={10} ml={7} width={'300px'}>
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.500')}
      boxShadow={'1xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      borderWidth='2px'
      borderRadius='lg'
      overflow='hidden'>
      <Box
        rounded={'lg'}
        mt={3}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${STATIC_IMAGE})`,
          filter: 'blur(5px)',
          zIndex: -2,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(6px)',
          },
        }}>
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={STATIC_IMAGE}
        />
      </Box>
      <Stack pt={8} align={'center'}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {props.category}
        </Text>
        <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
              {props.name}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={500} fontSize={'lg'}>
              {formatCurrency(props.price)}
          </Text>
        </Stack>
          <ShopButton id={props.id} />
      </Stack>
    </Box>
  </Center>
)
