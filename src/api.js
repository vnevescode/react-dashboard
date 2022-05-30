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
const userInfo = async () => {
    return await axios.get("https://628bf017667aea3a3e387e51.mockapi.io/me");
}

// API endpoint 02
const dailyAverageTicket = async () => {
    return await axios.get("https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-day");
    
} 
// API endpoint 03
const monthAverageTicket = async () => {
    return await axios.get("https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-month");
}

//API endpoint 04
const productsUnderRepair = async () =>{
    return await axios.get("https://628bf017667aea3a3e387e51.mockapi.io/alerts");
}

//API endpoint 05
const finishingStock = async () =>{
    return await axios.get("https://628bf017667aea3a3e387e51.mockapi.io/alerts");
}

//API endpoint 06
const ordersPlacedInTheMonth = async () =>{
    return await axios.get("https://628bf017667aea3a3e387e51.mockapi.io/orders-month");
}

//API endpoint 07
const productsSoldMonth = async () =>{
    return await axios.get("https://628bf017667aea3a3e387e51.mockapi.io/sells-month");
}




export const fetchData =  () => {
    return {
        userInfo: wrapPromise(userInfo()),
        dailyAverageTicket: wrapPromise(dailyAverageTicket()),
        monthAverageTicket: wrapPromise(monthAverageTicket()),
        productsUnderRepair: wrapPromise(productsUnderRepair()),
        finishingStock: wrapPromise(finishingStock()),
        ordersPlacedInTheMonth: wrapPromise(ordersPlacedInTheMonth()),
        productsSoldMonth: wrapPromise(productsSoldMonth()),
    }
    
}