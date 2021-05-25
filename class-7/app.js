
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
    let UrduMark = document.querySelector('.urdu').value;
    let PhysicsMark = document.querySelector('.physics').value;

    let isUrduPass = UrduMark >= PassingMark;
    let isPhysicsPass = PhysicsMark >= PassingMark;

    let isPassExam = isUrduPass && isPhysicsPass;
    alert(isPassExam);
}