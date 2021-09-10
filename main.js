function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sNJu5Jbea/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var horse=0;
var dog=0;
var wolf=0;
img=document.getElementById('alien1').src;
img2=document.getElementById('alien2').src;
img3=document.getElementById('alien3').src;
img4=document.getElementById('alien4').src;
function gotResults(error,results)
if(error){
    console.error(error);
}
else{
    console.log("got Results");
    var random_number_r=Math.floor(Math.random()*255)+1;
    var random_number_g=Math.floor(Math.random()*255)+1;
    var random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML=results[0].label;
    document.getElementById("result_count").innerHTML='Detected Dog - '+dog+ ' Detected horse - '+horse+ 'Detected wolf - '+wolf;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
if(results[0].label=='dog')
{
    img.src="aliens-01.gif";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
}
else if(results[0].label=='horse')
{
    img.src="aliens-01.png";
    img2.src="aliens-02.gif";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
}
else if(results[0].label=='wolf')
{
    img.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.gif";
    img4.src="aliens-04.png";
}
else if(results[0].label=='background noise')
{
    img.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.gif";
}
}
}
