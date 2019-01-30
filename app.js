function displayPosition(companyName, jobTitle, description) {
    console.log(jobTitle + companyName + description);
}

console.log('Name:', 'Blake Reeves'.toUpperCase(), '\nCareer: Pest Control Technician', '\nDescription: I kill bugs');

console.log('My Interests:', '\n* Video games', '\n* Reading', '\n* Coding', '\n* Music');

console.log('My Previous Experience:');

displayPosition("O'Charley's - ", "* Guest Assistant at ", "Greeted and seated guests as they came into the restaurant, and helped clean off tables.");

displayPosition("Brooks Shaw's Old Country Store - ", "* Barista at ", "Took orders from guests, and served them coffee.");

displayPosition("Blankenship Farms - ", "* Farm hand at ", "Tended to the cattle farm, and helped with the various tasks around the farm.");


function displaySkill(cool, skillName) {
    if (cool === true){
        console.log("* BAM: " + skillName);
    } else {
        console.log(skillName);
    }
}

console.log('My Skills:');
displaySkill(true, 'Guitar');
displaySkill(true, 'Greek');
displaySkill(true, 'Hebrew');
displaySkill(false, '* JavaScript');
displaySkill(true, 'Bootstrap');
displaySkill(false, '* HTML5');
displaySkill(false, '* CSS');
displaySkill(false, '* golf')
displaySkill(true, 'Can drive a tractor')