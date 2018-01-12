import { WebPart, IWebPart } from "gd-sp-webpart";
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
        new WebPart({
            elementId: "wp-demo",
            onRenderDisplay: this.renderDisplay,
            onRenderEdit: this.renderEdit
        });
    }

    // Render the display component
    private renderDisplay = (wp: IWebPart) => {
        // Set the display content
        wp.el.innerHTML = "<h3>The page is being displayed.</h3>";
    }

    // Render the edit component
    private renderEdit = (wp: IWebPart) => {
        // Set the display content
        wp.el.innerHTML = "<h3>The page is being edited.</h3>";
    }
}