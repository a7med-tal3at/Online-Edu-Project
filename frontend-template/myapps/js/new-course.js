var targetUrl = 'file:///home/a7med/Desktop/Projects/onlineedu/src/forntend-template/myapps/res-creating.html';



// Run Code
function getData() {
    data = [];
    data[0] = document.querySelector('input[placeholder="Name"]').value;
    data[1] = document.querySelector('input[type="number"]').value;
    data[2] = document.querySelector('textarea').value;
    data[3] = document.querySelectorAll('.current');
    data[4] = data[3][0].innerHTML;
    data[5] = data[3][1].innerHTML;
    data[6] = document.querySelector('#d1').value;
    return data;
}


var btn = document.querySelector('.btn-crt');
btn.onclick = function() {

    var arr = getData();
    window.location.replace(targetUrl);
    var title  = document.querySelector('.title').innerHTML = arr[0];
    var tPPr = document.querySelector('#price').innerHTML = arr[1];
    var discrip = document.querySelector('#discrip').innerHTML = arr[2];
    var img = document.querySelector('#c-img').src = arr[4];
    var tPLg = document.querySelector('#lang').innerHTML = arr[5];
    var tPLv = document.querySelector('#level').innerHTML = arr[6];
}
    

