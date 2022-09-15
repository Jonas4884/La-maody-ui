import { Button, ButtonProps, Flex } from '@chakra-ui/react';

export default function FollowButton(props: ButtonProps) {
    return (
        <Flex my={'5'} justifyContent="center" alignItems="center">
            <Button
                {...props}
                /* flex={1} */
                px={4}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                    bg: 'blue.500',
                }}
                _focus={{
                    bg: 'blue.500',
                }}>
                <a href={"#top5item"}>
                    Les top 5 des commandes de notre client
                </a>

            </Button>
        </Flex>
    );
}