
export const hamburgerClicked =()=>{
    return{
        type: "HAMBURGER_CLICKED",
        payload: {
            
        }
    }   
}
export const sidebarStopAnim =()=>{
    return{
        type: "SIDEBAR_STOP_ANIM",
        payload: {
            
        }
    }   
}
export const HomeClicked =()=>{
    return{
        type: "HOME_CLICKED",
        payload: {
        }
    }   
}
export const ReturnClicked =()=>{
    return{
        type: "RETURN_CLICKED",
        payload: {
        }
    }   
}
export const RedirectReset =()=>{
    return{
        type: "REDIRECT_RESET",
        payload: {
        }
    }   
}
export const YourCartClicked =()=>{
    return{
        type: "YOURCART_CLICKED",
        payload: {
        }
    }   
}
export const CartClicked =(productImage,productInfo,productPrice,QuantityInCart)=>{
    return{
        type: "CART_CLICKED",
        payload: {
            productImage, productInfo, productPrice,QuantityInCart,
        }
    }   
}
export const PlusClicked =(selectedProductTab, productInfo)=>{
    return{
        type: "PLUS_CLICKED",
        payload: {
            selectedProductTab, productInfo
        }
    }   
}
export const MinusClicked =(selectedProductTab, productInfo)=>{
    return{
        type: "MINUS_CLICKED",
        payload: {
            selectedProductTab, productInfo
        }
    }   
}
export const DeleteClicked =(selectedProductTab,productInfo)=>{
    return{
        type: "DELETE_CLICKED",
        payload: {
            selectedProductTab,productInfo
        }
    }   
}
export const textFilter =(eventText)=>{
    return{
        type: "TEXT_FILTER",
        payload: {
            eventText
        }
    }   
}
export const DetailClicked =(image, info, prop2,prop3)=>{
    return{
        type: "DETAIL_CLICKED",
        payload: {
               image, info, prop2,prop3     
        }
    }   
}
