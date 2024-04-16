Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera")
function take_snapshot() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
})
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="Thumbs-Up"
    speak_data2="Ok"
    speak_data3="peace"
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2 + speak_data3);
    synth.speak(utterThis);
}

console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/56EO5wUYK/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model has succsesfully loaded.")
}

function check(){
    image=document.getElementById("captured_image");
    classifier.classify(image,gotResult);
}

function gotResult(error,results){
    var synth=window.speechSynthesis;
if(error){
    console.error(error);
   
}
else{
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label; 
}

}