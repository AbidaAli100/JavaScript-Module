
const PassingMark = 50;

function Result() {
    let EnglishMarks = parseInt(document.querySelector('#english').value);
    let MathMarks = parseInt(document.querySelector('#math').value);

    let isEnglishPass = EnglishMarks >= PassingMark;
    let isMathsPass = MathMarks >= PassingMark;

    let isExamPass = isMathsPass && isEnglishPass;
    alert(isExamPass);
}

function FindResult(){
    let UrduMark = parseInt( document.querySelector('.urdu').value);
    let PhysicsMark =parseInt( document.querySelector('.physics').value);

    let isUrduPass = UrduMark >= PassingMark;
    let isPhysicsPass = PhysicsMark >= PassingMark;

    let isPassExam = isUrduPass && isPhysicsPass;
    alert(isPassExam);

}


function FindResults(){
    let NovelMark = parseInt( document.querySelector('.novel').value);
    let DramaMark = parseInt( document.querySelector('.drama').value);

    let isNovelPass = NovelMark >= PassingMark;
    let IsDramaPass = DramaMark >= PassingMark;

    let isallExamPass = isNovelPass || IsDramaPass;
    let notpass = !isallExamPass;
    alert( notpass);
 }
 //logical reasonig//

 let isRaining = true;
 let isSnowing = false;
 let WindSpeed = 15;

 let canlaunch = (isRaining=== false) && (isSnowing === false) && (WindSpeed < 20);
 alert(canlaunch);