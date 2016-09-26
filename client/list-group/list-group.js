function ListGroup(items, type, title){
    var html = '<div class="list-group $type$">\
        <div class="list-group-item active">$title$</div>\
        <div class="list-group-item btn" data-toggle="modal" data-target="#$type$Modal"><span class="glyphicon glyphicon-plus"></span> </div>\
        </div>';
    this.items = items || [];
    var domElement;
    function getView() {
        if(!domElement){

        }
    }

}