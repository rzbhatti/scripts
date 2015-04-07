// Add a menu item to create Index of all pages in the active document
app.addMenuItem({ cName: "CreateIndex", cParent: "Tools", cExec: "createIndex();", cEnable: "event.rc = (event.target != null);", nPos: 0 });
function createIndex() {
this.importDataObject("myIndex");
var oFile = this.getDataObjectContents("myIndex");
var bkMrkIndex = util.stringFromStream(oFile, "utf-8");
var indexList = bkMrkIndex.split("\n");
	for(var i=0;i<indexList.length;i++) {
		var indexFields = indexList[i].split("/");
		this.bookmarkRoot.createChild(indexFields[0], "this.pageNum=".concat(indexFields[1]), i+1);
	}
this.removeDataObject("myIndex");
}