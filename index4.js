function cal()
{
    var m1=document.getElementById("m1").value;
    var m2=document.getElementById("m2").value;
    var m3=document.getElementById("m3").value;

    var total = parseFloat(m1)+parseFloat(m2)+parseFloat(m3);
    var average = total/3;
    var grade;
    
    if(average>=70 && average<=100)
    {
        grade = "A";

    }
    else if(average>=50 && average<=69)
    {
        grade = "B";
    }
    else if(average>=35 && average<=49)
    {
        grade = "c";
    }
    else
        grade="D";
    
    insertTable(0,"MARKS 1",m1);
    insertTable(1,"MARKS 2",m2);
    insertTable(2,"MARKS 3",m3);
    insertTable(3,"TOTAL",total);
    insertTable(4,"AVERAGE",average);
}
function insertTable(row,text1,text2)
{
    var table =  document.getElementById("details");
    var r1 = table.insertRow(row);
    var c1 = r1.insertCell(0);
    var c2 = r1.insertCell(1);
    c1.innerHTML = text1;
    c2.innerHTML = text2;
}