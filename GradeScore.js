let score = 90;

//A function to compare grade
function calculate_grade(score) {
if (score >= 90)
	return 'A';
if (score >= 60)
	return 'B';
if (score >= 50)
	return 'C';
if (score >= 40)
	return 'D';
else
	return 'F';
	}
//A function to give feedback
function get_feedback(grade) {
switch(grade) {
case 'A':
	return "Excellent performance"
case 'B':
	return "Good job,keep improving"
case 'C':
	return "Fair effort,keep working on it"
case 'D':
	return "You can do better,do not give up"
default:
	return "Needs improvement,ask for help"
	}
	}
	let user_grade = calculate_grade(score);
	let feedback = get_feedback(user_grade);
console.log(score)
console.log(user_grade);
console.log(feedback);