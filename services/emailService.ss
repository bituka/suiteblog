/**
 * @NApiVersion 2.x
 * emailService.ss
 */
define(['./emailHandler.js', 'N/https'],function(emailHandler, https){
    function service(context) {
        if(context.request.method == https.Method.POST) {
            var result = {};
            var emailData = JSON.parse(context.request.body);
            emailData.author = -5;
            emailData.recipients = convertToArray(emailData.recipients);
            emailData.cc = convertToArray(emailData.cc);
            emailData.bcc = convertToArray(emailData.bcc);

            try {
                switch(emailData.emailtype) {
                    case "Send Email":
                        result.response = emailHandler.sendSingleEmail(emailData);
                        break;
                    case "Send Email In Bulk":
                        result.response = emailHandler.sendBulkEmail(emailData);
                        break;
                    default:
                        throw {name: "NotImplementedError", message: "Unknown email type!"};
                }
            }
            catch(e) {
                result.error = e.name + ': ' + e.message;
            }

            context.response.write(JSON.stringify(result));
        }
    }

    function convertToArray(input)
    {
        if(input) {
            return input.replace(/\s/g,'').split(",");
        }
    }

    return{
        service : service
    };
});