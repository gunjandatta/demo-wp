import { Helper, List, SPTypes, Types } from "gd-sprest";

/**
 * Configuration
 */
export const Configuration = {
    // WebPart
    WebPart: new Helper.SPConfig({
        WebPartCfg: [
            {
                FileName: "wpContacts_vuejs.webpart",
                Group: "Demo",
                XML: `<?xml version="1.0" encoding="utf-8"?>
<webParts>
    <webPart xmlns="http://schemas.microsoft.com/WebPart/v3">
        <metaData>
            <type name="Microsoft.SharePoint.WebPartPages.ScriptEditorWebPart, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" />
            <importErrorMessage>$Resources:core,ImportantErrorMessage;</importErrorMessage>
        </metaData>
        <data>
            <properties>
                <property name="Title" type="string">My Contacts (VueJS)</property>
                <property name="Description" type="string">Demo displaying my contacts.</property>
                <property name="ChromeType" type="chrometype">TitleOnly</property>
                <property name="Content" type="string">
                    &lt;script type="text/javascript" src="/sites/dev/siteassets/demo-vue.js"&gt;&lt;/script&gt;
                    &lt;div id="wp-contacts-vuejs"&gt;&lt;/div&gt;
                    &lt;script type="text/javascript"&gt;SP.SOD.executeOrDelayUntilScriptLoaded(function() { VueJSDemo.init(); }, 'demo-vue.js');&lt;/script&gt;
                </property>
            </properties>
        </data>
    </webPart>
</webParts>`
            }
        ]
    })
};