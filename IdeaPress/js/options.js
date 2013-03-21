/*
IdeaPress Version 2.0
File: options.js
Author: IdeaNotion
Description: Configures the application and the modules.  Please go to https://github.com/ideanotion/ideapress for how to apply the options
*/
(function () {
    "use strict";

    ideaPress.importModulesAndSetOptions(
        /* import module */
        ["/modules/wordpress/js/wp.module.js", "/modules/wordpressCom/js/wpcom.module.js"],

        function() {
            ideaPress.options = {
                appTitleImage: null,                      // App title image (approx. 600px x 80px)
                appTitle: "Tyler's Azure Developer Blog", // App title text
                cacheTime: 3600000,                       // Global cache time to try fetch   
                mainUrl: "http://blog.tylerdoerksen.com", // Main promoting site
                privacyUrl: "http://miguelapps.azurewebsites.net",      // Privacy URL
                modules: [
                    { name: wordpressModule, options: { apiUrl: 'http://blog.tylerdoerksen.com', title: "Pages", typeId: wordpressModule.PAGES, pageIds: [2, 891] } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.tylerdoerksen.com', title: "Recent News", typeId: wordpressModule.MOSTRECENT, hubItemsCount: 7 } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.tylerdoerksen.com', title: "Bookmark", typeId: wordpressModule.BOOKMARKS } },
                ],
                searchModule: { name: wordpressModule, options: { apiUrl: 'http://blog.tylerdoerksen.com', title: "Search" } },
                liveTileModule: { name: wordpressModule, options: { apiUrl: 'http://blog.tylerdoerksen.com', title: "Live Tile" } },
            };
        });
})();
