import React, {ReactNode, useRef} from "react";
import {AlertDialogBody, AlertDialogContent,
    AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure} from "@chakra-ui/react";
import {useShoppingCart} from "../../../../utils";
import {buyitem} from "../../../../types/proptypes/item/buyitemid";

function AlertDialog(props: { onClose: () => void, isOpen: boolean, leastDestructiveRef: React.MutableRefObject<undefined>, children: ReactNode }) {
    return null;
}

export const Confirmer  =(props : buyitem) =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const{removeFromCart} = useShoppingCart();
    const cancelRef = useRef()

    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>
                Annuler
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>

                        </AlertDialogHeader>

                        <AlertDialogBody>
                            En cliquant ici,vous être entrain d'annuler toute les commandes sur cette Article
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button  onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => removeFromCart(props.id)} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}