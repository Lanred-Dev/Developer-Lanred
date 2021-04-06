let Player_Section = document.getElementById("Left_Section");
let AI_Section = document.getElementById("Right_Section");
let Player_Dice = document.getElementById("Player_Dice");
let AI_Dice = document.getElementById("AI_Dice");

function Roll_Dice() {
    const Roll = Math.floor(Math.random() * 10);
    return Roll;
};

function Handle_Next_Rolls() {
    const Player_Roll = Roll_Dice();
    const AI_Roll = Roll_Dice();

    if (Player_Roll > AI_Roll) {
        console.log("You Win!\nYou Rolled: " + Player_Roll + "\nAI Rolled: " + AI_Roll);
    } else if (AI_Roll > Player_Roll) {
        console.log("AI Wins!\nYou Rolled: " + Player_Roll + "\nAI Rolled: " + AI_Roll);
    } else if (AI_Roll === Player_Roll) {
        console.log("tie\nBoth Rolled: " + Player_Roll);
    };
};

Handle_Next_Rolls();