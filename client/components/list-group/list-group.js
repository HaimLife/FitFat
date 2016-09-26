function ListGroup(items, type, title){
    var html = '<div class="list-group $type$">\
        <div class="list-group-item active">$title$</div>\
        <div class="list-group-item btn" data-toggle="modal" data-target="#$type$Modal"><span class="glyphicon glyphicon-plus"></span> </div>\
        </div>';
    var that = this;
    that.items = items || [];
    var domElement;
    function getView() {
        if(!domElement){
            html = html.replace(/\$type\$/g, type);
            html = html.replace(/\$title\$/g, title);
            domElement = htmlToElement(html);
            that.items.forEach(function (item) {
                var listGroupItem = new
                domElement.appendChild()
            })

        }
    }

}