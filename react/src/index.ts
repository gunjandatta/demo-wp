import { FabricWebPart, WebPartListCfg } from "gd-sprest-react";
import { Configuration } from "./cfg";
import { ContactsWebPart } from "./wp";
declare var SP;

/**
 * Contacts Demo
 */
export class Contacts {
    // The configuration for the demo
    static Configuration = Configuration;

    /**
     * Constructor
     */
    constructor() {
        // Create an instance of the contacts webpart
        new FabricWebPart({
            cfgElementId: "wp-contactsCfg",
            displayElement: ContactsWebPart,
            editElement: WebPartListCfg,
            targetElementId: "wp-contacts",
        });
    }
}

// Set the global variable
window["Contacts"] = Contacts;

// Let SharePoint know the script has been loaded
SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("demo-react.js");