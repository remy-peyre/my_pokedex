/*function request(callback) {

    var xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseXML);
        }
    };

    xhr.open("GET", "XMLHttpRequest_getXML.xml", true);
    xhr.send(null);
}

function readData(oData) {
    var nodes = oData.getElementsByTagName("soft");
    var ol = document.createElement("ol"), li, cn;

    for (var i=0, c=nodes.length; i<c; i++) {
        li = document.createElement("li");
        cn = document.createTextNode(nodes[i].getAttribute("name"));

        li.appendChild(cn);
        ol.appendChild(li);
    }

    document.getElementById("output").appendChild(ol);
}*/













/*window.onload = function() {










    /*var goal = document.querySelector('#goal');

    goal.onclick = function(){
        goal.style.background = '#000';
        goal.style.color = '#fff';
    };

    var goGoal = document.querySelectorAll('.gogoal');

    for(var i = 0; i < goGoal.length; i++){
        goGoal[i].onclick = function(){
            this.style.background = '#33CC33';
            this.style.color = '#FFFF00';
        };
    }

    var p_list = document.querySelectorAll('p');

    for(var i = 0; i < p_list.length; i++){
        p_list[i].onclick = function(){
            this.parentNode.removeChild(this.nextSibling);
        };


};*/
