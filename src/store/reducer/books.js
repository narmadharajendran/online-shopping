import * as actionTypes from '../action/actionTypes'
const initialState={
    loading:false,
    image:null,
    //books datas
    books:
    [{
        src:'womenwhowon-book.png',
        name:"WomenWhomWOn-Book",
        price:"320"
    },
    {
        src:'books3.png',
        name:"Camilla Lack Berg",
        price:"199"
    },
    {
        src:'ramayanam.png',
        name:"Ramayanam",
        price:"299"
    },
    {
        src:'thirukural.jpg',
        name:"Thirukural",
        price:"170"
    },
    {
    src:'2states.png',
    name:"2 states",
    price:"199"
    },
        {
            src:'fall-books.png',
            name:"Fall-Books",
            price:"230"
        },
    {
        src:'books2.png',
        name:"Stephen King",
        price:"299"
    },
    {
        src:'chasing-red.png',
        name:"Chasing-red",
        price:"390"
    },
        {
            src:'white-stag.png',
            name:"White-Stag",
            price:"279"
        },
        {
        src:'stargirl.png',
        name:"Star Girl",
        price:"99"
    },

    ],
    // bags datas
    bags:[{
        src:'bag1.jpg',
        name:"Hand bag",
        price:"299"
    },
        {
            src:'laptop-bag.jpg',
            name:"Laptop bag",
            price:"290"
        },
        {
            src:'laptop.jpg',
            name:"Laptop bag",
            price:"390"
        },
        {
            src:'backbag.jpg',
            name:"Back bag",
            price:"150"
        },
        {
            src:'leather.jpg',
            name:"Leather bag",
            price:"720"
        },
        {
            src:'trolly.jpg',
            name:"Trolly bag",
            price:"1020"
        }],
    //default datas
    default:[{
        src:'bag1.jpg',
        name:"Hand bag",
        price:"299"
    },
        {
            src:'ebook.jpg',
            name:"Ebook Reader",
            price:"899"
        },
        {
            src:'iphone.jpg',
            name:"Iphone",
            price:"1099"
        },
        {
            src:'mug.png',
            name:"Mug",
            price:"249"
        },
        {
            src:'notebook.jpg',
            name:"NoteBook",
            price:"499"
        },
        {
            src:'poster1.png',
            name:"Poster Mockup",
            price:"679"
        },
        {
            src:'iphone.png',
            name:"Iphone",
            price:"1119"
        },
    ],
    //Mics datas
    mics:[
        {
            src:'microphone.jpg',
            name:"Clipart vintage mic",
            price:"199"
        },
        {
            src:'mic4.png',
            name:"Multiple Wave mic",
            price:"799"
        },
        {
            src:'mic2.jpg',
            name:"Headset mic",
            price:"499"
        },
        {
            src:'mic3.png',
            name:"Microphone",
            price:"190"
        },
        {
            src:'mic5.png',
            name:"Recording mic",
            price:"690"
        },
        {
            src:'microphone10.png',
            name:"Radio station mic",
            price:"590"
        },
        {
            src:'microphone2.png',
            name:"Normal Microphone",
            price:"399"
        },
        {
            src:'microphone6.png',
            name:"Microphone",
            price:"99"
        },
        {
            src:'mic6.jpg',
            name:"Transparent mic",
            price:"499"
        },
        {
            src:'microphone8.jpg',
            name:"Guayaba golden mic",
            price:"890"
        },



    ],
    //Tshirts datas
    tshirts:[
        {
            src:'puma.jpg',
            name:"Puma Hoodie",
            price:"399"
        },
        {
            src:'puma-track.jpg',
            name:"Tracksuit Sleeve Puma",
            price:"360"
        },
       ,{
            src:'tshirt3.jpg',
            name:"Sinalkar",
            price:"499"
        },
        {
            src:'tshirt4.jpg',
            name:"FTB Dont quit",
            price:"250"
        }, {
            src:'tshirt5.jpg',
            name:"Versace",
            price:"129"
        },
        {
            src:'tshirt6.jpg',
            name:"Cotton printed",
            price:"260"
        },
        {
            src:'adidas.jpg',
            name:"Adidas original sweater",
            price:"859"
        },
        {
            src:'puma-hoodie.png',
            name:"Puma Hoodie Tshirt",
            price:"590"
        }
    ],
    topProducts:[ {
        src:'microphone8.jpg',
        name:"Guayaba golden mic",
        price:"890"
    },
        {
            src:'tshirt3.jpg',
            name:"Sinalkar",
            price:"499"
        },
        {
            src:'ramayanam.png',
            name:"Ramayanam",
            price:"299"
        },]
}
const booksReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.START: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.ADD_PRODUCTS: {
            console.log("entering")
            let product=[];
            let topProduct=[];
          if(action.category === 'books' && action.topProduct ){
              product=state.books.concat(action.product);
              topProduct=state.topProducts.concat(action.product)
          }
          else if(action.category === 'books'){
              product=state.books.concat(action.product);
              topProduct=state.topProducts
          }
          else if(action.category === 'bags' && action.topProduct){
              product=state.bags.concat(action.product);
              topProduct=state.topProducts.concat(action.product)
          }
          else if(action.category === 'bags'){
              product=state.bags.concat(action.product);
              topProduct=state.topProducts
          }
          else if(action.category === 'mics' && action.topProduct){
              console.log('mics')
              product=state.mics.concat(action.product)
              topProduct=state.topProducts.concat(action.product)
          }
          else if(action.category === 'mics'){
              console.log('mics')
              product=state.mics.concat(action.product);
              topProduct=state.topProducts
          }
          else if(action.category === 'tshirts' && action.topProduct){
              product=state.tshirts.concat(action.product)
              topProduct=state.topProducts.concat(action.product)
          }
          else if(action.category === 'tshirts'){
              product=state.tshirts.concat(action.product);
              topProduct=state.topProducts
          }
            return {
                ...state,
                [action.category]:product,
                topProducts:topProduct,
                loading: false,

            }
        }
        case actionTypes.UPLOAD_IMAGE: {
            return {
                ...state,
                loading: false,
                image: action.image,

            }
        }
        default:
            return state
    }
}
export default booksReducer;