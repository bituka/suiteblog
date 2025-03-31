/**
* @NApiVersion 2.x
* emailHandler.js
*/
define(['N/email'], function(email){
    function sendSingleEmail(data){
        return email.send(data);
    }

    function sendBulkEmail(data){
        throw {name: "NotImplementedError", message: "Bulk email not implemented!"};
    }

    return{
        sendSingleEmail : sendSingleEmail,
        sendBulkEmail : sendBulkEmail
    };
});