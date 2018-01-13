import { Helper } from "gd-sprest";
import Vue from "vue"
import { Configuration } from "./cfg";
import WebPart from "./wp"

/**
 * Vue JS Demo
 */
window["VueJSDemo"] = {
    // Configuration
    Configuration: Configuration,

    // Initialize the webpart
    init: function () {
        // Create an instance of the webpart
        new Helper.WebPart({
            elementId: "wp-contacts-vuejs",
            onRenderDisplay: (wp) => {
                /* Render the webpart */
                new Vue({
                    el: wp.el,
                    template: '<WebPart />',
                    components: { WebPart }
                });
            },
            onRenderEdit: (wp) => {
                // Render a message
                wp.el.innerHTML = "<h2>The page is being edited...</h2>";
            }
        });
    }
};

// Let SharePoint know the script has been loaded
SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("demo-vue.js");