import { Types } from "gd-sprest";
import { Fabric, WebParts } from "gd-sprest-js";
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
    private renderItems = (wpInfo: WebParts.Types.IWPListInfo, items: Array<IDemoItem>) => {
        var listItems = [];

        // Parse the items
        for (var i = 0; i < items.length; i++) {
            // Add the item
            listItems.push(Fabric.Templates.ListItem({
                primaryText: items[i].Title,
                metaText: items[i].Id.toString()
            }));
        }

        // Render the list
        Fabric.List({
            el: wpInfo.el,
            items: listItems
        });
    }
}