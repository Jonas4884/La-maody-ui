import React from 'react';
import {Box, IconButton, Image, useBreakpointValue} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = [
        'https://firebasestorage.googleapis.com/v0/b/login-54234.appspot.com/o/home-caroussel%2Fshopping-mode-1-1920x960.jpg?alt=media&token=d80d9812-aea2-4a91-b5d5-1dd5b7d92215',
        'https://th.bing.com/th/id/R.d0ebe27fdc9b7e4665eba18ab1d03d45?rik=pAsXuxknC6aeXg&pid=ImgRaw&r=0',
        'https://firebasestorage.googleapis.com/v0/b/login-54234.appspot.com/o/home-caroussel%2Fe1bfb11b38a78d30a419c57c73514e75.jpg?alt=media&token=1883d5fc-1cdf-4c98-9a51-076e08717164'
    ];

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>

                {cards.map((url, index) => (
                    <Image
                        key={index}
                        h={"lg"}
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            url
                        }
                        objectFit={'cover'}
                    />

                    // <Box
                    //     key={index}
                    //     height={'6xl'}
                    //     position="relative"
                    //     backgroundPosition="center"
                    //     backgroundRepeat="no-repeat"
                    //     backgroundSize="cover"
                    //     backgroundImage={`url(${url})`}
                    // />
                ))}
            </Slider>
        </Box>
    );
}