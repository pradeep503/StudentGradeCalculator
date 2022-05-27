function getMarks(){
    var hindi = Number(document.getElementById('h').value);
    var english = Number(document.getElementById('e').value);
    var maths = Number(document.getElementById('m').value);
    var physics = Number(document.getElementById('p').value);
    var chemistry = Number(document.getElementById('c').value);
    var totalMarks = 500;
    var marksObtained=hindi + english + maths + physics + chemistry;
    var percentage = (marksObtained/totalMarks)*100;
    var grade="";
    
    document.getElementById("percentage").innerHTML= percentage + "%";

    if(percentage > 90){
        grade="A+";
    }
    else if(percentage < 90 && percentage > 80){
        grade="A";
    }
    else if(percentage < 80 && percentage > 60){
        grade="B";
    }
    else if(percentage < 60){
        grade="F";
    }

    document.getElementById("grade").innerHTML=grade;

    if(percentage < 60){
        document.getElementById("pass").innerHTML ="Sorry! you failed! please try next time.";
    }
    else{
        document.getElementById("pass").innerHTML ="Congratulations! you have passed.";
    }
}