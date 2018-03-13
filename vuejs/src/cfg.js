var $REST = require("gd-sprest");

/**
 * Configuration
 */
export const Configuration = {
    // List
    List: new $REST.Helper.SPConfig({
        ListCfg: [{
            CustomFields: [
                {
                    choices: ["Business", "Family", "Personal"],
                    name: "MCCategory",
                    type: $REST.Helper.SPCfgFieldType.Choice
                },
                {
                    name: "MCPhoneNumber",
                    type: $REST.Helper.SPCfgFieldType.Text
                }
            ],
            ListInformation: {
                BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
                Title: "My Contacts"
            },
            ViewInformation: [
                {
                    ViewName: "All Items",
                    ViewFields: ["MCCategory", "LinkTitle", "MCPhoneNumber"],
                    ViewQuery: "<OrderBy><FieldRef Name='MCCategory' /><FieldRef Name='Title' /></OrderBy>"
                }
            ]
        }]
    }),

    // WebPart
    WebPart: new $REST.Helper.SPConfig({
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
                    &lt;div id="wp-vuejs"&gt;&lt;/div&gt;
                    &lt;div id="wp-vuejs-cfg" style="display:none;"&gt;&lt;/div&gt;
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

// Create the test data function
Configuration.List.createTestData = () => {
    // Test Data
    let data = [
        {
            MCCategory: "Business",
            MCPhoneNumber: "111-111-1111",
            Title: "John A. Doe"
        },
        {
            MCCategory: "Business",
            MCPhoneNumber: "222-222-2222",
            Title: "John B. Doe"
        },
        {
            MCCategory: "Family",
            MCPhoneNumber: "333-333-3333",
            Title: "John C. Doe"
        },
        {
            MCCategory: "Family",
            MCPhoneNumber: "444-444-4444",
            Title: "John D. Doe"
        },
        {
            MCCategory: "Personal",
            MCPhoneNumber: "555-555-5555",
            Title: "John E. Doe"
        },
        {
            MCCategory: "Personal",
            MCPhoneNumber: "666-666-6666",
            Title: "John F. Doe"
        }
    ];

    // Log
    console.log("Creating the items.");

    // Get the list
    var list = $REST.List("My Contacts");

    // Parse the data
    for (let i = 0; i < data.length; i++) {
        // Add the item
        list.Items().add(data[i], true).execute(true);
    }

    // Wait for the items to be added
    list.done(() => {
        // Log
        console.log("The items were created.");
    });
}