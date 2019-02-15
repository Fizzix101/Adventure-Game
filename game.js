//Single line comment
/* 
Multiline comment
*/
//alert("Warning Will Robinson ... Warning!");

//confirm("Do you like Pokemon?");

//prompt("What is your favorite Pokemon?")
//create firstlook variable to avoid displaing the are description redundantly.
var firstlook = [
	//Town Square 0
	false, 
	//Outside castle 1
	false, 
	//castle doors 2
	false,
	//Inside castle 3
	false,
	//Alleyway 4
	false, 
	//Blocked path 5
	false, 
	//Outskirts 6
	false];
//make a check inventory function for the player to check their inventory
var checkInv = function()
{
	if(sword == true){
		if(inventory.bow == false)
		{
			alert(inventory.playerName + "'s inventory \n You are: " + inventory.occupation + "\n gold: " +inventory.gold + "\n Weapons: dagger, sword \n Armor: " + inventory.armor + "\n Shield: " + inventory.shield);
		}
		else{
			alert(inventory.playerName + "'s inventory \n You are: " + inventory.occupation + "\n gold: " +inventory.gold + "\n Weapons: dagger, sword, bow \n Armor: " + inventory.armor + "\n Shield: " + inventory.shield);
		}
	}
	else
		{
			alert(inventory.playerName + "'s inventory \n You are: " + inventory.occupation + "\n gold: " +inventory.gold + "\n Weapons: dagger \n Armor: " + inventory.armor + "\n Shield: " + inventory.shield);
		}
}
//create a function to check gold
var checkGold = function()
{
	alert ("You have " + inventory.gold + "gold")
}
//create variable object for inventory
var inventory = {
	playerName: "",
	occupation: "unemployed",
	gold: 100,
	sword: false,
	dagger: true,
	shield: "none",
	bow: false,
	armor: "plain clothing"
}
//create a town hero status variable
var townHero = false;

Game();
function Game(){
	//state the title of the game
	alert("Adventure");
	//ask for the player's name and store the name
	inventory.playerName = prompt("What is your name?");
	//Welcome the player to the land of Duniker
	alert("Welcome to the land of Duniker, " + inventory.playerName);
	//create the town square function
	TownSquare();
	function TownSquare()
	{
		//ask the user what they would like to do in the town square and display the description of the Town Square based on whether or not 
		if(firstlook[0] == false)
			{
			var townSquare = prompt("Welcome to the capitol city of Stralton. You stand in the town square. the city is full of life all around you. There is a Merchant selling his wares. There is a path to the north heading towards the castle. There is what appears to be a bulletin board with several advertisements. There are also a path to the East, but you don't know what is over there. The path to the South leads to the outskirts of town. The path to the West appears to be blocked by some gaurds. What are you going to do? \n go somewhere. \n talk to merchant \n investigate the bulletin board \n look around again (this option will give the discription of the current area)").toLowerCase();
			firstlook[0] = true;
			}
		else{
			var townSquare = prompt(" You stand in the town square. What are you going to do? \n go somewhere. \n talk to merchant \n investigate bulletin board \n look around again (this option will give the discription of the current area)").toLowerCase();
		}
		   switch (townSquare) 
		   {
				   //case: user wants to go somewhere, but forgets to input a place
			   case "go": 
			   case "go somewhere":
				   var direction = prompt("Where would you like to go?\n North, to the castle\n South, to the town outskirts\n West to the blocked path\n East to the unkown path\n do something else (typing 'back' will return you to the previous options in all cases)").toLowerCase();
				   switch(direction) 
				   {
						   //case: the user wishes to go North to the Castle
					   case"north": 
					   case"castle":  
					   case"to the castle": 
					   case"go north":
						   Castle();
						   break;
						   //case: the user wishes to go South to the town Outskirts
					   case"south": 
					   case"outskirts": 
					   case"town outskirts": 
					   case"go south":
						   Outskirts();
						   break;
						   //case: the user wishes to go west to the path blocked by gaurds
					   case"west": 
					   case"blocked path": 
					   case"blocked": 
					   case"go west":
						   Gaurds();
						   break;
						   //case: the user wishes to explore the unexplored path to the east (Alley)
					   case"east": 
					   case"unkown path": 
					   case"unkown": 
					   case"go east":
						   Alley();
						   break;
					   case "back":
					   case "do something else":
					   case "something else":
						   TownSquare();
						   //default: we don't understand the input and return the user to the town square
					   default:
						   alert("I don't understand " + direction);
						   TownSquare();    
                   }
				   //case: the user wishes to go North to the castle
			   case"north": 
			   case"go castle": 
			   case"go to the castle": 
			   case"go north":
				   OutsideCastle();
				   break;
				//case: the user wishes to go South to the town Outskirts
			   case"south": 
			   case"go to outskirts": 
			   case"go to town outskirts": 
			   case"go south" :
				   Outskirts();
				   break;
				//case: the user wishes to go west to the path blocked by gaurds
			   case"west": 
			   case"go to blocked path": 
			   case"blocked path": 
			   case"go west":
				   Gaurds();
				   break;
				//case: the user wishes to explore the unexplored path to the east (Alley)
			   case"east":
			   case"go to unkown path":
			   case"unkown path": 
			   case"go east":
				   Alley();
				   break;
				   //case: the user wishes to speak to talk to the merchant
			   case"talk to merchant": 
			   case"talk": 
			   case"talk merchant": 
			   case"merchant":
				   Merchant();
				   break;
				   //case: the user wishes to investigate the bulletin board
			   case"investigate": 
			   case"investigate bulletin": 
			   case"investigate bulletin board":
               case"bulletin board":
               case"bulletin":
               case"board":
					BulletinBoard();
			         break;
                   //case: the user wishes to look around again
               case"look":
               case"look around": 
               case"look around again":
               case"look again":
                   firstlook[0] = false;
                   TownSquare();
				   break;
				   //we can't understand the input
				default:
						alert("I don't understand " + townSquare);
						TownSquare();
           }
				   
        }
	//create the Outside Castle function
	function OutsideCastle()
	{
		//if the user has not been here before describe the area and ask the user what they would like to do
		if(firstlook[1] == false)
			{
				
				var Outsidecastle = prompt("You walk to the Castle gates. When you arrive, the gates to the north are open and two gaurds stand at attention. There is a path that leads West towards the gaurd's barracks. By going south you can go back to the Town Square. What are you going to do? \n Talk to gaurds\n Go somewhere").toLowerCase();
				firstlook[1] = true;
			}
		else
			{
				var Outsidecastle = prompt("You stand at the Castle gates. What are you going to do? \n Go somewhere \n Talk to the gaurds").toLowerCase();
			}
		//take the user's input and apply it accordingly
		switch(Outsidecastle)
		{
				//case: the user wants to go somewhere but doesn't input where
			case "go somewhere":
			case "go":
				var direction = prompt("Where would you like to go? \n north, Inside the castle\n West, to the guard barracks\n South, back to Town Square").toLowerCase();
				switch(direction){
					//case: the user wishes to go in the castle
					case "go north":
					case "north":
					case "go inside castle":
					case "inside castle":
					case "castle":
						CastleGates();
						break;
					//case: the user wishes to go to the guard barracks
					case "go to guard barracks":
					case "guard barracks":
					case "go west":
					case "west":
						GuardBarracks();
						break;
					//case: the user wishes to return to town square
					case "go to sown square":
					case "town square":
					case "go south":
					case "south":
						TownSquare();
						break;
					case "back":
						OutsideCastle();
						break;
					//the user inputs something we don't understand or we can't do anything
					default:
						alert("I don't understand, " + direction + " or you cannot do that here.")
						OutsideCastle();
				}
				break;
				//case: the user wants to go to the castle
			case "go north":
			case "north":
			case "go inside castle":
			case "inside castle":
			case "go to castle":
			case "castle":
				CastleGates();
				break;
			//case: the user wishes to go to the guard barracks
			case "go to guard barracks":
			case "guard barracks":
			case "go west":
			case "west":
				GuardBarracks();
				break;
				//case: the user wishes to go back to town Square
			case "back": 
			case "town square":
			case "go to town square":
			case "go south":
				TownSquare();
				 break;
				//case: the user wishes to speak to the gaurds
			case "talk to guards":
			case "talk":
			case "guards":
				CastleGates();
				break;
			default:
				alert("I don't understand '" + Outsidecastle + "' or you cannot do that here");
				OutsideCastle();
				
		}
		
	}
	function CastleGates()
	{
		//the user attempts to go into the castle for the first time
		if(firstlook[2] = false)
		{
			firstlook[2] = true;
			alert("The guards stop you and say, 'What business do you have here?'")
			// the player has not joined the royal guard/army
			if(inventory.occupation != "soldier"){
				var guards = prompt("What do you say to them? \n 1 - 'just looking around' \n 2 - 'I'd like to join the guard'.").toLowerCase();
			}
			// the player has already joined the royal guard/army
			else if (townHero = true) 
			{
				alert("The guards salute you as you walk inside");
				InsideCastle();
			}
			else{
				alert("The gaurds stop you and say, 'What business do you have here?'");
				var guards = prompt ("What do you say to them? \n 1 -'just looking around' \n 2 - 'Soldier " + inventory.playerName + " reporting for duty");
			}
		}
		else if (inventory.occupation != "soldier" || inventory.occupation != "knight" || inventory.occupation != "commander" || inventory.occupation != 'captain')
		{
			alert("The soldiers stop you and say, 'You again? What do you want?'");
			var guards = prompt("What do you say to them? \n 1 - 'just looking around' \n 2 - 'I'd like to join the guard'.").toLowerCase();
		}
		else if(townHero = true)
		{
			alert("The guards salute you as you walk inside");
			InsideCastle;
		}
		
	}
}