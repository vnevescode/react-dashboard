import axios from 'axios';

const wrapPromise = (promise) => {
    let result;
    let status = "pending";
    let suspender = promise.then((res)=>{
        status = "success"
        result = res;
    }, (err)=>{
        status="error"
        result = err;
    });
    return{
        read(){
            if(status === "pending") throw suspender;
            else if (status === "error") throw result;
            else if (status === "success") return result;
        }
    };
};

// API endpoint 01
const userInfo = "https://628bf017667aea3a3e387e51.mockapi.io/me";

// API endpoint 02
const dailyAverageTicket = "https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-day";
    
 
// API endpoint 03
const monthAverageTicket = "https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-month";

//API endpoint 04
const productsUnderRepair = "https://628bf017667aea3a3e387e51.mockapi.io/alerts";

//API endpoint 05
const finishingStock = "https://628bf017667aea3a3e387e51.mockapi.io/alerts";

//API endpoint 06
const ordersPlacedInTheMonth = "https://628bf017667aea3a3e387e51.mockapi.io/orders-month";

//API endpoint 07
const productsSoldMonth = "https://628bf017667aea3a3e387e51.mockapi.io/sells-month";

//API endpoint 08
const ordersPerMonth = "https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month";

//API endpoint 09
let sellPerMonthURL = 'https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month';
let profitPerMonthURL = 'https://628bf017667aea3a3e387e51.mockapi.io/profit-per-month';


    /* return await axios.all([sellPerMonthURL,profitPerMonthURL])
                    .then(axios.spread((...response)=>{
                        const sellPerMonth = response[0];
                        const profitPerMonth = response[1];
                    })).catch( err => {
                        return err;
                    })
} */

//API endpoint 10 
let orderPerMonthURL = 'https://628bf017667aea3a3e387e51.mockapi.io/orders-per-month';
let orderCanceledPerMonthURL = 'https://628bf017667aea3a3e387e51.mockapi.io/canceled-orders-per-month';
    

//API endpoint 11
const tableProducts = "https://628bf017667aea3a3e387e51.mockapi.io/products";

//API endpoint 12
const ageTransactions = "https://628bf017667aea3a3e387e51.mockapi.io/users-resume";

//API endpoint 13
const viewProducts = "https://628bf017667aea3a3e387e51.mockapi.io/conversions-resume";


const allCalls = [
    userInfo,
    dailyAverageTicket,
    monthAverageTicket,
    productsUnderRepair,
    finishingStock,
    ordersPlacedInTheMonth,
    productsSoldMonth,
    ordersPerMonth,
    sellPerMonthURL,
    profitPerMonthURL,
    orderPerMonthURL,
    orderCanceledPerMonthURL,
    tableProducts,
    ageTransactions,
    viewProducts,
]


export const fetchData = () => {
    return  axios.all(allCalls.map((endpoint)=> axios.get(endpoint)))
                .then(( data )=>{                     
                    return data
                })    
}

