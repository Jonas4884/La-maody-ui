import {ShoppingCartProps} from "../../../types/proptypes";
import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../../../utils";
import {formatCurrency} from "../../../utils";
import {useData} from "../../../utils";
import {useEffect, useState} from "react";
import {CardItems} from "./CardItem";
import {Box} from "@chakra-ui/react";



export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    const [dataSet,setDateSet] = useState<any[]>([])
    const {getList} = useData();
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await getList('articles');
                setDateSet(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetch();
    }, []);
    return (
        <Box zIndex={"modal"}>
            <Offcanvas show={isOpen} onHide={closeCart} placement="end">
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {cartItems.map((item) => (
                            <CardItems key={item.id} {...item} />
                        ))}
                        <div className="ms-auto fw-bold fs-5">
                            Total{" "}
                            {formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const item = dataSet.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0)
                            )}
                        </div>
                    </Stack>
                </Offcanvas.Body>
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title>Your Bags Items</Offcanvas.Title>
                </Offcanvas.Header>
            </Offcanvas>
        </Box>

    )
}
