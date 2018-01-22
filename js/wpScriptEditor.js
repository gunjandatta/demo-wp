<div id="demo"></div>
<script type="text/javascript" src="/sites/dev/siteassets/sprest/gd-sprest.js"></script>
<script type="text/javascript">
$REST.Helper.WebPart({
    elementId: "demo",
    onRenderDisplay: function(wp) { wp.el.innerHTML = "<h3>The page is being displayed.</h3>"; },
    onRenderEdit: function(wp) { wp.el.innerHTML = "<h3>The page is being edited.</h3>"; }
});
</script>