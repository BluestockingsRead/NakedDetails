// ==UserScript==
// @name         Naked Details
// @namespace    https://bluestockingsread.com/
// @version      1.0.0
// @description  Universal details revealer. A very simple userscript to automatically open all <details> tags on any website.
// @author       bluestockingsread@gmail.com
// @match        *://*/*
// @grant        none
// @license      MIT
// ==/UserScript==


(function() {
    'use strict';

    // Function to open all <details> tags
    function revealAllDetails() {
        document.querySelectorAll('details').forEach((details) => {
            details.open = true;
        });
    }

    // Run the function to reveal all <details> tags
    try {
        revealAllDetails();
    } catch (error) {
        console.error('Error revealing <details> tags:', error);
    }

})();
