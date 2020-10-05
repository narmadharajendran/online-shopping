import * as actionTypes from './actionTypes'

export const start=()=>{
    return{
        type:actionTypes.START,
    }
}
export const addProducts=(product,category)=>{
    return{
        type:actionTypes.ADD_PRODUCTS,
        product:product,
        category:category,
    }
}
export const listBooks=()=>{
    return{
        type:actionTypes.LIST_BOOKS,
    }
}
export const listBags=()=>{
    return{
        type:actionTypes.LIST_BAGS,
    }
}
export const listMics=()=>{
    return{
        type:actionTypes.LIST_MICS,
    }
}
export const uploadImage=(image)=>{
    return{
        type: 'UPLOAD_IMAGE',
        image: image,
    }

}

