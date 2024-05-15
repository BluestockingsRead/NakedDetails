### Naked Details
A very simple userscript to automatically open all `<details>` tags on any website. It's super basic so you can customize it however you wish.

- **File:** NakedDetails.user.js
- **Description:** Opens all `<details>` HTML tags on any website. Easily tweakable to target specific sites or details tags with specific classes.
- **Usage:** Install the script using a userscript manager (such as Tampermonkey) to reveal details tags on any website.

#### Notes
I'm still learning, but here are some potentially helpful tips from a friend:

- **Page Load Timing:** The script doesn't check if the page has fully loaded before it runs. If the script runs before all `<details>` elements are loaded, some may not be opened. To address this, you could run the script after the DOMContentLoaded event or use a MutationObserver to watch for changes in the DOM.
- **Dynamic Content:** If `<details>` elements are dynamically added to the page after the script runs (for example, through AJAX calls or user interaction), those won't be opened by this script. A MutationObserver could also help in this case.
- **Error Handling:** The script catches errors and logs them to the console. However, it might be helpful to provide more context in the error message, such as the current URL or other relevant information.

#### License
This script is licensed under the MIT License.
