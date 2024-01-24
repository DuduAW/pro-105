Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
 });

 camera = document.getElementById("camera");
 Webcam.attach('#camera');

 function takeSnapshot()
 {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
 }
 console.log('versão m15:', m15.version);
 classifier=m15.imageClassifier('https//teachablemachine.withgoogle.com/models/HMvpIVdjl/model.json',modelLoaded);

 function modelLoaded() {
    console.log('modelo carregado!');                  
 }
 function check()
 {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
 }

 
 function gotResult(error, results) {
    if (error){
        console.error(error);
 } else { 

    console.log(results);
    document.getElementById("result_object_name").inner = results[0].label;
    document.getElementById("result_object_accuracy").inner = results[0].confidence.tofixed(3);
 }
}