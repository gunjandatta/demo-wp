<div id="demo"></div>
<div id="demo-cfg" style="display:none;"></div>
<script src="https://cdn.rawgit.com/gunjandatta/sprest-js/master/dist/gd-sprest-fabric.min.js"></script>
<script type="text/javascript">
    SP.SOD.executeOrDelayUntilScriptLoaded(function() {
        $REST.JS.WebParts.WPList({
            odataQuery: {
                OrderBy: ["Title"]
            },
            cfgElementId: "demo-cfg",
            elementId: "demo",
            wpClassName: "fabric",
            onRenderItems: function (wpInfo, items) {
                var listItems = [];

                // Parse the items
                for (var i = 0; i < items.length; i++) {
                    // Add the item
                    listItems.push($REST.JS.Fabric.Templates.ListItem({
                        primaryText: items[i].Title,
                        metaText: items[i].Id
                    }));
                }

                // Render the list
                $REST.JS.Fabric.List({
                    el: wpInfo.el,
                    items: listItems
                });
            }
        });
    }, "gd-sprest-js.js");
</script>