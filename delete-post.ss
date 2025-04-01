<%@ NApiVersion 2.x %>
<%@ ScriptType Suitelet %>

define(['N/record', 'N/response'], function(record, response) {
    function onRequest(context) {
        if (context.request.method === 'DELETE') {
            var id = context.request.parameters.id;

            record.delete({ type: 'customrecord_blog_post', id: id });

            response.write('Post deleted successfully.');
        }
    }

    return { onRequest: onRequest };
});
