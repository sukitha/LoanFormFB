(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));


window.extAsyncInit = function() {
    /* MessengerExtensions.getSupportedFeatures(function success(result) {
         let features = result.supported_features;
         if (features.indexOf("context") != -1) {
             MessengerExtensions.getContext('325273401439022',
                 function success(thread_context) {
                     // success
                     alert(thread_context.psid);

                     // More code to follow
                 },
                 function error(err) {
                     console.log(err);
                 }
             );
         }
     }, function error(err) {
         console.log(err);
     });*/
    /* var isSupported = MessengerExtensions.isInExtension();
     alert(isSupported);*/
    MessengerExtensions.getContext('325273401439022',
        function success(result) {
            //alert("Success: "+result.psid);
        },
        function error(result) {
            //alert("Error"+JSON.stringify(result));
        }
    );


    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        // https://developers.line.me/ja/reference/liff/#liffsendmessages()

        let message = {
            "text":"loan request has been send to the loan department",
            "attachment":{
                "type":"image",
                "payload":{
                    "url":"http://www.messenger-rocks.com/image.jpg",
                    "is_reusable":true
                }
            }

            //"text":"loan request has been send to the loan department"
            // "attachment": {
            //     "type": "template",
            //     "payload": {
            //         "template_type": "generic",
            //         "elements": [{
            //             "title": "I took Peter's 'Which Hat Are You?' Quiz",
            //             "image_url": "https://bot.peters-hats.com/img/hats/fez.jpg",
            //             "subtitle": "My result: Fez",
            //             "default_action": {
            //                 "type": "web_url",
            //                 "url": "https://bot.peters-hats.com/view_quiz_results.php?user=24601"
            //             },
            //             "buttons": [{
            //                 "type": "web_url",
            //                 "url": "https://bot.peters-hats.com/hatquiz.php?referer=24601",
            //                 "title": "Take the Quiz"
            //             }]
            //         }]
            //     }
            // }
        };

        MessengerExtensions.beginShareFlow(function (share_response) {
                // User dismissed without error, but did they share the message?
                if (share_response.is_sent) {
                    // The user actually did share.
                    // Perhaps close the window w/ requestCloseBrowser().
                }

                MessengerExtensions.requestCloseBrowser(function success() {
                    // webview closed
                    alert("Your request submitted successfully ");
                }, function error(err) {
                    // an error occurred

                });



            }, function (errorCode, errorMessage) {

            },
            message,
            "current_thread");


    });
};