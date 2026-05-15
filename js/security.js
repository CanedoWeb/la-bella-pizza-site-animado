/**
 * La Bella Pizza - Security & Protection
 * This script provides a layer of protection against DevTools usage and code tampering.
 * While not 100% foolproof (nothing on client-side is), it discourages basic inspections.
 */

(function() {
    'use strict';

    // 1. Protect Console from modification and keep it clear
    try {
        Object.defineProperty(window, "console", {
            value: console,
            writable: false,
            configurable: false
        });
        
        setInterval(function() {
            // Only clear if DevTools is likely open or to maintain a clean slate
            console.clear();
        }, 1000);
    } catch (e) {}

    // 2. Disable Right-Click (Context Menu)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 3. Disable Shortcuts (F12, Ctrl+Shift+I/C/J, Ctrl+U)
    document.onkeydown = function(e) {
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) || // Ctrl+Shift+I, C, J
            (e.ctrlKey && e.keyCode === 85) // Ctrl+U (View Source)
        ) {
            return false;
        }
    };

    // 4. Debugger Trap
    // This creates a loop that pauses execution if DevTools is open
    const trap = function() {
        function d(i) {
            if (("" + i / i).length !== 1 || i % 20 === 0) {
                (function() {}.constructor("debugger")());
            } else {
                (function() {}.constructor("debugger")());
            }
            d(++i);
        }
        try {
            // d(0); // Uncomment this to be VERY aggressive, but it might lag some browsers
        } catch (e) {}
    };

    // 5. Anti-Tampering Check
    // Prevent the page from being rendered inside an iframe (optional)
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }

})();
