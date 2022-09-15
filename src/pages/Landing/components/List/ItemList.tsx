import {
    Box,
    Button, Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Wrap, WrapItem
} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import { CardItem } from './CardItem';
import {useData} from "../../../../utils/hooks/use-data";
import {item} from "../../../../types/proptypes/item/item";
import {DishCategory} from "../../../../types/models/DishCategory";
import {Dish} from "../../../../types/models/Dish";
import {useNavigate} from "react-router-dom";

export const ItemList = () => {
  const [size, setSize] = React.useState('')
  const [dataSet,setDateSet] = useState<any[]>([])
  const {getList} = useData();
  const  navigate =useNavigate();
  useEffect(() => {
      const fetch = async () => {
      try {
        const { data } = await getList('topitem');
        setDateSet(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);


  return (
    <>
        <div id={"#top5item"}>
            <Box justifyContent={"center"}>
                <Wrap alignSelf={"center"}>
                    {
                        dataSet.map((data)=>(
                            <Box justifyContent={"center"} alignContent={"center"}>
                                <Center m={"6"} textAlign={"center"}>

                                    <WrapItem>
                                        <CardItem id={data.id} name={data.name} category={data.category} price={data.price}/>
                                    </WrapItem>
                                </Center>
                            </Box>
                        ))
                    }

                </Wrap>
                <Center mb={"5"}>
                    <Button onClick={()=>{navigate("/shop")}} size={"lg"}> Voir plus d'article</Button>
                </Center>

            </Box>


        </div>

    </>
  )

}
