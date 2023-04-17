// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

/*Book1*/
const book1 = document.getElementById('book1');
const statusBook1 = book1.querySelector('.status');
const reserveBook1 = book1.querySelector('.reserve');
const checkoutBook1 =book1.querySelector('.checkout');
const checkinBook1 = book1.querySelector('.checkin');

checkinBook1.style.color = "black";
statusBook1.style.color = STATUS_MAP.overdue.color;

if (reserveBook1.disabled=true) {
    STATUS_MAP.overdue.canReserve
} 
if (checkoutBook1.disabled=true) {
    STATUS_MAP.overdue.canCheckout
} 
if (checkinBook1.disabled=false) {
    STATUS_MAP.overdue.canCheckIn
}  

/*Book2*/
const book2 = document.getElementById('book2');
const statusBook2 = book2.querySelector('.status');
const reserveBook2 = book2.querySelector('.reserve');
const checkoutBook2 =book2.querySelector('.checkout');
const checkinBook2 = book2.querySelector('.checkin');

checkinBook2.style.color = "black";
statusBook2.style.color = STATUS_MAP.reserved.color;

if (reserveBook2.disabled=true) {
    STATUS_MAP.reserved.canReserve
} 
if (checkoutBook2.disabled=false) {
    STATUS_MAP.reserved.canCheckout
} 
if (checkinBook2.disabled=true) {
    STATUS_MAP.reserved.canCheckIn
} 

/*Book3*/
const book3 = document.getElementById('book3');
const statusBook3 = book3.querySelector('.status');
const reserveBook3 = book3.querySelector('.reserve');
const checkoutBook3 =book3.querySelector('.checkout');
const checkinBook3 = book3.querySelector('.checkin');

checkinBook3.style.color = "black";
statusBook3.style.color = STATUS_MAP.shelf.color;

if (reserveBook3.disabled=false) {
    STATUS_MAP.shelf.canReserve
} 
if (checkoutBook3.disabled=false) {
    STATUS_MAP.shelf.canCheckout
} 
if (checkinBook3.disabled=true) {
    STATUS_MAP.shelf.canCheckIn
} 
 
