var customerName = 'bob'
var bestCustomer 
const leastFavoriteCustomer = 'ted'

function upperCaseCustomerName() { 
   customerName=customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer='not bob'
}

function overwriteBestCustomer(name) {
    bestCustomer=name
}

function changeLeastFavoriteCustomer(name) {
    leastFavoriteCustomer = name
}