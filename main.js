menu_list_array=["Chicken tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Veg Extravaganza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    } 
    htmldata=htmldata+"<ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var htmldata1;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata1="<section class='cards'>";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata1=htmldata1+'<div class="card">'+'<img src="pizzaImg.png">'+menu_list_array[i]+'</div>'
    }
    htmldata1=htmldata1+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata1;
}