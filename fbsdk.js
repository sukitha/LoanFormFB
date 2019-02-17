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
        function success(result){
            //alert("Success: "+result.psid);
        },
        function error(result){
            //alert("Error"+JSON.stringify(result));
        }
    );


    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        // https://developers.line.me/ja/reference/liff/#liffsendmessages()
        MessengerExtensions.requestCloseBrowser(function success() {
            // webview closed
            alert("Your request submitted successfully ");
        }, function error(err) {
            // an error occurred

        });
    });
};