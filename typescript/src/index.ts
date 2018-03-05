import "gd-sprest-js/lib/css/fabric.min.css";
import "gd-sprest-js/lib/css/fabric.components.min.css";
import "gd-sprest-js/lib/css/gd-sprest-js.css";
import { DemoWebPart } from "./wp";

// Add the global variable
window["WebPartDemo"] = DemoWebPart;

// Let SharePoint know the script has been loaded
window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("wpDemo.js");