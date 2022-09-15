import React from "react";
import {useShoppingCart} from "../../../../utils";
import {buyitem} from "../../../../types/proptypes/item/buyitemid";
import { ButtonGroup} from "@primer/react";
import {Button, Icon} from "@chakra-ui/react";
import {AddIcon, SearchIcon} from "@chakra-ui/icons";



export const ShopButton = (props:buyitem)=>{
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    const quantity = getItemQuantity(props.id);

    return (
        <>
            <div className="mt-auto">
                {quantity === 0 ? (
                            <ButtonGroup>
                                <Button onClick={() => increaseCartQuantity(props.id)}
                                        >
                                    <Icon as={AddIcon}/>
                                </Button>
                                <Button onClick={() => increaseCartQuantity(props.id)}>Ajouter à mon Pannier</Button>
                            </ButtonGroup>
                ) : (
                    <div
                        className="d-flex align-items-center flex-column"
                        style={{ gap: ".5rem" }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ gap: ".5rem" }}
                        >
                            <ButtonGroup>
                                <Button onClick={() => decreaseCartQuantity(props.id)}>-</Button>
                            </ButtonGroup>

                            <div>
                                <span className="fs-3">{quantity}</span> En panier
                            </div>
                            <ButtonGroup>
                                <Button onClick={() => increaseCartQuantity(props.id)}>+</Button>
                            </ButtonGroup>

                        </div>
                        <ButtonGroup>
                            <Button
                                onClick={() => removeFromCart(props.id)}
                                colorScheme='red'
                                size="sm"
                            >
                                Annuler
                            </Button>
                        </ButtonGroup>

                    </div>
                )}
            </div>
        </>
    )
}