/**
 * @NApiVersion 2.x
 * blogService.ss
 */
define(['./postHandler'], function(postHandler) {
    function service(context) {
        if (context.request.method === 'POST') {
            const postData = JSON.parse(context.request.body);
            try {
                const newPost = postHandler.savePost(postData);
                context.response.write(postHandler.postTemplate(newPost));
            } catch (e) {
                context.response.write(JSON.stringify({ 
                    error: e.message 
                }));
            }
        }
        else if (context.request.method === 'GET') {
            const posts = postHandler.getPosts();
            const html = posts.map(postHandler.postTemplate).join('');
            context.response.write(html);
        }
    }

    return {
        service: service
    };
});
