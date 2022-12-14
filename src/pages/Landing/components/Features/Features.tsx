import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {

    IoLogoBitcoin,

} from 'react-icons/io';
import { ReactElement } from 'react';
import Carousel from "./Carousel";
import FollowButton from "./Followbutton";

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {

    // Reusable features components

    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

    // Features default page

export default function Features() {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Votre boutique en ligne
                    </Text>
                    <Heading>Votre mode où que vous soyez</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                      Une livraison gratuite pour :
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon  color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={' Vos 5 premières commandes à moins de 100 $'}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Une fidélité clientèle'}
                        />
                        <Feature
                            icon={
                                <Icon  color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={"Une achat à +3 articles toutes l'année"}
                        />
                        <button type="button" className="btn btn-outline-primary"><a href={"#card"}> Les top 5 des commandes de nos clients</a></button>
                    </Stack>

                </Stack>
                <Flex>
                    <Carousel/>
                </Flex>
            </SimpleGrid>
        </Container>
    );
}