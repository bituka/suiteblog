<%@ NApiVersion 2.x %>
<%@ ScriptType Suitelet %>

define(['N/record', 'N/response'], function(record, response) {
    function onRequest(context) {
        if (context.request.method === 'POST') {
            var id = context.request.parameters.id;
            var title = context.request.parameters.title;
            var content = context.request.parameters.content;

            var postRecord = record.load({ type: 'customrecord_blog_post', id: id });
            postRecord.setValue({ fieldId: 'custrecord_post_title', value: title });
            postRecord.setValue({ fieldId: 'custrecord_post_content', value: content });
            postRecord.save();

            response.write('Post updated successfully.');
        }
    }

    return { onRequest: onRequest };
});
