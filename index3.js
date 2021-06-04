function add()
{
    var a = document.getElementById("vala").value;
    var b = document.getElementById("valb").value;
    var res = parseInt(a)+parseInt(b);
    document.getElementById("sum").innerHTML = "ADDITION = " + res;
}
function sub()
{
    var a = document.getElementsByName("vala")[0].value;
    var b = document.getElementsByName("valb")[0].value;
    var res = parseInt(a)-parseInt(b);
    document.getElementById("diff").innerHTML = "SUBTRACT= " + res;
}