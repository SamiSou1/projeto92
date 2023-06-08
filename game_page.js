function send(){
	number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 +" X "+ number2 + "</h4>";
    inputBox = "<br>Resposta : <input type='text' id='input_check_box'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_number + inputBox + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check()
{
	getAnswer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			update_player1_score = player1_score +1;
			document.getElementById("player1_score").innerHTML = update_player1_score;
		}
		else 
		{
			update_player2_score = player2_score +1;
				ocument.getElementById("player2_score").innerHTML = update_player2_score;
		}
	}
    if(question_turn == "player1")
			{
				question_turn = "player2";
				document.getElementById("player_question").innerHTML = "Turno de perguntas -" + player2_name;
			}
			else 
			{
				question_turn = "player1";
				document.getElementById("player_question").innerHTML = "Turno de perguntas -" + player1_name;
				
            }		
}