#! /usr/bin/env node
import inquirer from "inquirer";
let typescript = {
    fees: 8000,
    duration: "4month",
    timing: "9:00AM to 12:00PM",
    days: "saturday and sonday",
};
let javascript = {
    fees: 5000,
    duration: "3month",
    timing: "9:00AM to 12:00PM",
    days: "monday and tueday",
};
let python = {
    fees: 9000,
    duration: "5month",
    timing: "3:00PM to 6:00PM",
    days: "monday and tuesday",
};
let php = {
    fees: 6000,
    duration: "4month",
    timing: "3:00PM to 6:00PM",
    days: "saturday and sonday",
};
let MSoffice = {
    fees: 6000,
    duration: "4month",
    timing: "3:00PMto6:00PM",
    days: "wednesday and thusday",
};
let amazon = {
    fees: 10000,
    duration: "6month",
    timing: "9:00AMto12:00PM",
    days: "wednesday and thusday",
};
let shopify = {
    fees: 8000,
    duration: "4month",
    timing: "3:00PMto6:00PM",
    days: "thusday and friday",
};
let socialMedia = {
    fees: 9000,
    duration: "6month",
    timing: "9:00AMto12:00PM",
    days: "thusday and friday",
};
let myBalance = 0;
const today = new Date();
const formattedDate = `${today.getDate().toString().padStart(2, "0")}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getFullYear()}`;
let isBuyingCourse = false;
let saveAddStudentName, saveAge, saveAddFatherName, saveAddNumber, saveAddEmail;
let eligiblechecker;
let currentBalance = 0;
let enrollmentnumber = Math.floor(10000 + Math.random() * 90000);
async function BUYCOURSE() {
    let courses = await inquirer.prompt({
        name: "typeOfCourses",
        type: "list",
        message: "Which course should you pursue?",
        choices: [
            "programming language",
            "ecommerce",
            "MS.office",
            "social media management",
        ],
    });
    if (courses.typeOfCourses === "programming language") {
        let programmingLanguage = await inquirer.prompt({
            name: "selectlanguage",
            type: "list",
            message: "Which language should you pursue?",
            choices: ["typescript", "javascript", "python", "php"],
        });
        if (programmingLanguage.selectlanguage === "typescript") {
            console.log(typescript);
        }
        else if (programmingLanguage.selectlanguage === "javascript") {
            console.log(javascript);
        }
        else if (programmingLanguage.selectlanguage === "python") {
            console.log(python);
        }
        else {
            console.log(php);
        }
    }
    else if (courses.typeOfCourses === "ecommerce") {
        let selectecommerce = await inquirer.prompt({
            name: "selectecommercecourse",
            type: "list",
            message: "Which course should you pursue?",
            choices: ["amazon", "shopify"],
        });
        if (selectecommerce.selectecommercecourse === "amazon") {
            console.log(amazon);
        }
        else {
            console.log(shopify);
        }
    }
    else if (courses.typeOfCourses === "MS.office") {
        console.log(MSoffice);
    }
    else if (courses.typeOfCourses === "social media management") {
        console.log(socialMedia);
    }
    console.log(`but your balance is: ${currentBalance}`);
    let paymentmethod = await inquirer.prompt({
        name: "pay",
        type: "list",
        message: "select your payment method",
        choices: ["Bank transfer", "easy paisa", "jazz cash"],
    });
    let buying = await inquirer.prompt({
        name: "buynow",
        type: "number",
        message: "payment:",
    });
    if (typescript.fees <= buying.buynow ||
        javascript.fees <= buying.buynow ||
        python.fees <= buying.buynow ||
        php.fees <= buying.buynow ||
        amazon.fees <= buying.buynow ||
        shopify.fees <= buying.buynow ||
        MSoffice.fees <= buying.buynow ||
        socialMedia.fees <= buying.buynow) {
        console.log("you'r eligible for this course");
        let addNewStudent = await inquirer.prompt([
            {
                name: "addStudentName",
                type: "input",
                message: "student name",
            },
            {
                name: "addFatherName",
                type: "input",
                message: "student father name",
            },
            {
                name: "age",
                type: "number",
                message: "add age",
            },
            {
                name: "addEmail",
                type: "input",
                message: "add email",
            },
            {
                name: "addNumber",
                type: "number",
                message: "add number",
            },
        ]);
        let afteraddviewprofile = await inquirer.prompt({
            name: "viewer",
            type: "list",
            message: "so what you do:",
            choices: ["status", "go home"],
        });
        if (afteraddviewprofile.viewer === "status") {
            // ADD  TRANSFERING DATA
            saveAddStudentName = addNewStudent.addStudentName;
            saveAddFatherName = addNewStudent.addFatherName;
            saveAge = addNewStudent.age;
            saveAddNumber = addNewStudent.addNumber;
            saveAddEmail = addNewStudent.addEmail;
            eligiblechecker = buying.buynow;
            currentBalance = eligiblechecker + myBalance;
        }
    }
    else {
        console.log("you'r not eligible for this course");
    }
}
let name = await inquirer.prompt({
    name: "username",
    type: "input",
    message: "Username:",
    validate: function (value) {
        if (value.trim() !== "") {
            return true;
        }
        return "Please enter a non_empty value.";
    },
});
console.log("\n            GOVERNOR INITIATIVE IT ARTIFICIAL INTELIGENCE COUSES");
console.log(`\n    Wellcome ${name.username}`);
let condition = true;
while (condition) {
    console.log("\n\n  Main Menu");
    let operator = await inquirer.prompt({
        name: "mainOperator",
        type: "list",
        choices: ["View Balance", "buy Course", "status", "exit"],
    });
    if (operator.mainOperator === "View Balance") {
        console.log(`Your Balance: ${currentBalance}`);
    }
    else if (operator.mainOperator === "buy Course") {
        isBuyingCourse = true; // Set flag to true to indicate user is buying a course
        if (isBuyingCourse) {
            await BUYCOURSE();
            console.log("          {     STATUS     }\n");
            console.log("  anus Myself:");
            console.log(`Enrollment.number:${enrollmentnumber}`);
            console.log(`StudentName: ${saveAddStudentName}`);
            console.log(`Father.name: ${saveAddFatherName}`);
            console.log(`Age: ${saveAge}`);
            console.log(`Phone.num: ${saveAddNumber}`);
            console.log(`Email: ${saveAddEmail}`);
            console.log("\n  MyCourse:");
            if (currentBalance >= typescript.fees) {
                console.log("learn.language: typescript");
                console.log(`Days: ${typescript.days}`);
                console.log(`Timing: ${typescript.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= javascript.fees) {
                console.log("learn.language: javascript");
                console.log(`Days: ${javascript.days}`);
                console.log(`Timing: ${javascript.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= python.fees) {
                console.log("learn.language: python");
                console.log(`Days: ${python.days}`);
                console.log(`Timing: ${python.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= php.fees) {
                console.log("learn.language: php");
                console.log(`Days: ${php.days}`);
                console.log(`Timing: ${php.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= amazon.fees) {
                console.log("learn.language: amazon");
                console.log(`Days: ${amazon.days}`);
                console.log(`Timing: ${amazon.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= shopify.fees) {
                console.log("learn.language: shopify");
                console.log(`Days: ${shopify.days}`);
                console.log(`Timing: ${shopify.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= MSoffice.fees) {
                console.log("learn.language: MSoffice");
                console.log(`Days: ${MSoffice.days}`);
                console.log(`Timing: ${MSoffice.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= socialMedia.fees) {
                console.log("learn.language: social media management");
                console.log(`Days: ${socialMedia.days}`);
                console.log(`Timing: ${socialMedia.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else {
                console.log("course are not show because you are not selected it");
            }
            isBuyingCourse = false;
        }
    }
    if (operator.mainOperator === "status") {
        let search = await inquirer.prompt({
            name: "searcher",
            type: "number",
            message: "type your enrollment number",
        });
        if (enrollmentnumber === search.searcher) {
            console.log("          {     STATUS     }\n");
            console.log("  anus Myself:");
            console.log(`Enrollment.number:${enrollmentnumber}`);
            console.log(`StudentName: ${saveAddStudentName}`);
            console.log(`Father.name: ${saveAddFatherName}`);
            console.log(`Age: ${saveAge}`);
            console.log(`Phone.num: ${saveAddNumber}`);
            console.log(`Email: ${saveAddEmail}`);
            console.log("\n  MyCourse:");
            if (currentBalance >= typescript.fees) {
                console.log("learn.language: typescript");
                console.log(`Days: ${typescript.days}`);
                console.log(`Timing: ${typescript.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= javascript.fees) {
                console.log("learn.language: javascript");
                console.log(`Days: ${javascript.days}`);
                console.log(`Timing: ${javascript.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= python.fees) {
                console.log("learn.language: python");
                console.log(`Days: ${python.days}`);
                console.log(`Timing: ${python.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= php.fees) {
                console.log("learn.language: php");
                console.log(`Days: ${php.days}`);
                console.log(`Timing: ${php.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= amazon.fees) {
                console.log("learn.language: amazon");
                console.log(`Days: ${amazon.days}`);
                console.log(`Timing: ${amazon.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= shopify.fees) {
                console.log("learn.language: shopify");
                console.log(`Days: ${shopify.days}`);
                console.log(`Timing: ${shopify.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= MSoffice.fees) {
                console.log("learn.language: MSoffice");
                console.log(`Days: ${MSoffice.days}`);
                console.log(`Timing: ${MSoffice.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else if (currentBalance >= socialMedia.fees) {
                console.log("learn.language: social media management");
                console.log(`Days: ${socialMedia.days}`);
                console.log(`Timing: ${socialMedia.timing}`);
                console.log(`     Date.issue:${formattedDate}`);
            }
            else {
                console.log("course are not show because you are not selected it");
            }
        }
    }
    else {
        if (operator.mainOperator === "exit")
            break;
    }
}
