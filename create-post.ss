<%@ NApiVersion 2.x %>
<%@ ScriptType Suitelet %>

define(['N/record', 'N/response'], function(record, response) {
    function onRequest(context) {
        if (context.request.method === 'POST') {
            var title = context.request.parameters.title;
            var content = context.request.parameters.content;

            var postRecord = record.create({ type: 'customrecord_blog_post' });
            postRecord.setValue({ fieldId: 'custrecord_post_title', value: title });
            postRecord.setValue({ fieldId: 'custrecord_post_content', value: content });
            postRecord.save();

            response.write('Post created successfully.');
        }
    }

    return { onRequest: onRequest };
});
