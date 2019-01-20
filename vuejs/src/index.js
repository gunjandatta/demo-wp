// Libraries
import { WebParts } from "gd-sprest-bs";
import * as Vue from "vue";

// Local
import { Configuration } from "./cfg";

/**
 * Vue JS Demo
 */
window["VueJSDemo"] = {
    // Configuration
    Configuration: Configuration,

    // Initialize the webpart
    init: function () {
        // Create an instance of the webpart
        WebParts.WPList({
            odataQuery: {
                OrderBy: ["Title"],
                Select: ["MCCategory", "MCPhoneNumber", "Title"]
            },
            cfgElementId: "wp-vuejs-cfg",
            elementId: "wp-vuejs",
            wpClassName: "fabric",
            onRenderItems: function (wpInfo, items) {
                // Render the webpart
                new Vue({
                    el: wpInfo.el,
                    data: () => {
                        return { contacts: items };
                    },
                    template: [
                        '<div class="table">',
                        '<div class="row" v-for="contact in contacts" :key="contact.Id">',
                        '<div>{{ contact.MCCategory }}</div>',
                        '<div>{{ contact.Title }}</div>',
                        '<div>{{ contact.MCPhoneNumber }}</div>',
                        '</div>',
                        '</div>'
                    ].join('\n')
                });
            }
        });
    }
};

// Let SharePoint know the script has been loaded
SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("demo-vue.js");