import {CartItemProps} from "../../../types/proptypes";
import {formatCurrency, useData, useShoppingCart} from "../../../utils";
import {useEffect, useState} from "react";

import "./assets/assets.css"
import { Button } from "@primer/react";
import { Stack } from "react-bootstrap";


export const CardItems = ({ id, quantity }: CartItemProps) =>{
    const { removeFromCart } = useShoppingCart()
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
    const item = dataSet.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.imgUrl}
                className={"item__image"}
                style={{ }}
            />
            <div className="me-auto m-4">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>Danger</Button>

        </Stack>
    )
}
