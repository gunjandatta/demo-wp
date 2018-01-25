import { Helper, Types } from "gd-sprest";
import { Configuration } from "./cfg";

/**
 * Demo WebPart
 */
export class DemoWebPart {
    // Configuration
    static Configuration = Configuration;

    /**
     * Constructor
     */
    constructor() {
        // Create an instance of the demo webpart
        new Helper.WebPart({
            elementId: "wp-demo",
            onRenderDisplay: this.renderDisplay,
            onRenderEdit: this.renderEdit
        });
    }

    // Render the display component
    private renderDisplay = (wp: Types.Helper.IWebPartInfo) => {
        // Set the display content
        wp.el.innerHTML = "<h3>The page is being displayed.</h3>";
    }

    // Render the edit component
    private renderEdit = (wp: Types.Helper.IWebPartInfo) => {
        // Set the display content
        wp.el.innerHTML = "<h3>The page is being edited.</h3>";
    }
}