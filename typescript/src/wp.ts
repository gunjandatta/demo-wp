import { Types } from "gd-sprest";
import { Components, WebParts } from "gd-sprest-bs";
import { Configuration } from "./cfg";

/**
 * Dev Item
 */
interface IDemoItem extends Types.SP.IListItemQueryResult {
    Title: string;
}

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
        WebParts.WPList({
            odataQuery: {
                OrderBy: ["Title"]
            },
            cfgElementId: "demo-cfg",
            elementId: "demo",
            onRenderItems: this.renderItems,
            wpClassName: "fabric"
        });
    }

    // Method to render the list items
    private renderItems = (wpInfo: WebParts.IWPListInfo, items: Array<IDemoItem>) => {
        // Render a table
        Components.Table({
            el: wpInfo.el,
            columns: [
                {
                    name: "Id",
                    title: "Item ID"
                },
                {
                    name: "Title",
                    title: "Title"
                }
            ]
        });
    }
}