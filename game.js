//Single line comment
/* 
Multiline comment
*/
//alert("Warning Will Robinson ... Warning!");

//confirm("Do you like Pokemon?");

//prompt("What is your favorite Pokemon?")
//create firstlook variable to avoid displaing the area description redundantly.
var firstlook = [
	//Town Square 0
	false, 
	//Outside castle 1
	false, 
	//castle gates 2
	false,
	//Inside castle 3
	false,
	//gaurd barracks 4
	false, 
	//Alleyway 5
	false, 
	//Blocked path 6
	false, 
	//Outskirts 7
	false,
	//Forest 8
	false,
	//Encampment 9
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
    if(inventory.captainsOrders == true)
    {
        alert("You have the Captain's Orders");
    }
    else{
        
    }
    if(inventory.generalsOrders == true)
        {
            alert("You have the General's Orders");
        }
    if(inventory.lantern == true)
    {
        alert("You have a lantern");
    }
}
//create a function to check gold
var checkGold = function()
{
	alert ("You have " + inventory.gold + "gold")
}
//create a function to check status
var checkStatus = function()
{
	for (var prop in playerStatus)
		{
			alert(prop);
		}
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
	armor: "plain clothing",
    armorType: "none",
	captainsOrders: false,
	quest: "",
    questCompleteion: false,
	lantern: false,
	generalsOrders: false,
}
//create variable object for player's stats
var playerStatus = {
    health: 3,
    energy: 7,
} 
//Create enemy constructuor to easily pass to the Combat function
/* Might experiment with a defualt enemy function, Still unsure how to easily allow enemies to have unique dialoge*/
function Enemy(health, stun, name)
{
    //create variables for the enemy's stats
	this.health = health;
    //create variable for the enemy's stun status
    this.stun = stun;
    //create variable for the enemy's name
    this.name = name;
    this.attack = function()
    {
        var enemyHit = Math.random() * 100;
        if(enemyHit >= 40 && enemyHit != 100)
            if(playerStatus.health > 0)
            {
                alert("The " + this.name + " manages to scratch your Arm!");
                playerStatus.health --;
            }
            else 
            {
                alert("The " + this.name +" Slashes your throat!");
                if(inventory.armorType == 'none')
                    {
                        playerStatus.health = 0;
                    }
                else if(invenory.armorType == 'Heavy')
                {
                    alert("Fortunately, the armor managed to negate all of the damage! ");
                }
                else
                {
                    alert("Fortunately, you're armor managed to lessen the blow!");
                    playerStatus.health --;
                    
                }
            }
        else if(enemyHit == 100)
        {
            alert("The " + this.name + " manages to take a pretty big chunk out of your leg");
            playerStatus.health -=2;
        }
        else
        {
            alert("The " + this.name + " stares you down, poised to attack");
        }
    }
    
}
//create a town hero status variable
var townHero = false;
//create a ending variable to determine which ending the player got when the game over function is active
var ending = '';
//create a combat function
function Combat(enemy)
{
    
    //inform the on what enemy they are fighting
    alert("You encounter a " + enemy.name + "!");
    while(enemy.health > 0 && playerStatus.health > 0)
   {
       //create hit random variable to simiulate random phenomena during combat
        var hit = Math.random() * 100;
       //prompt the user to do something
        var fight = prompt("what are you going to do? \n attack with something \n run away \n defend").toLowerCase();
       //create a switch statement to help determine what the player does in battle
        switch(fight)
        {
        // the uesr wishes to attack, but does not specify how
            case 'attack':
            var attack = prompt("What are you attacking with?").toLowerCase();
            switch(attack)
            {
                case'sword':
                case'attack sword':
                case'attack with sword':
                    if(hit >= 20 || enemy.stun == true)
                     {
                        alert("You easily stab your sword through the " + enemy.name + "!");
                         enemy.health -=2;
                    }
                        else
                    {
                        alert("The " + enemy.name + " is faster than you thought, he manges to dodge your sword swipe!");
                    }
                    break;
                case'dagger':
                case'attack dagger':
                case'attack with dagger':
                        if(hit >= 30 && inventory.sword == true)
                        {
                            alert("You manage to slash the " + enemy.name + " with your dagger.");
                            enemy.health --;
                        }
                        else if(inventory.sword == false)
                        {
                            alert("You don't have a sword!");      
                        }
                        else
                        {
                            alert("The " + enemy.name + " jumps away before you can hit it!");
                        }
                        break;
                    case'bow':
                    case'attack bow':
                    case'attack with bow':
                        if(hit <= 30 && inventory.bow == true)
                        {
                                alert("Nice Shot!, your arrow goes straight through the " + enemy.name + "'s heart");
                                enemy.health == 0;
                        }
                        else if(hit >= 50 && inventory.bow == true)
                        {
                                alert("You manage to hit the " + enemy.name + " in the leg!");
                                enemy.health --;
                                enemy.stun = true;
                        }
                        else if(inventory.bow == false)
                        {
                            alert("You don't have a Bow!");
                        }
                        else
                        {
                            alert("Almost instantly, the " + enemy.name + " manages to dodge your arrow!");
                        }
                            break;
                    case'fist':
                    case'attack with fist':
                    case'attack fist':
                    case'nothing':
                    case'attack with nothing':
                        if(hit >= 50)
                        {
                            alert("You somehow manage to punch the " + enemy.name +"!")
                        }
                        else
                        {
                            alert("You're careless unarmed attack is easily countered by " + enemy.name + "!");
                            playerStatus.health--;
                        }
					break;
				default:
						
                                                        
            }
                    break;
            case'sword':
            case'attack sword':
            case'attack with sword':
                if(hit >= 20 || enemy.stun == true)
                {
                    alert("You easily stab your sword through the " + enemy.name + "!");
                    enemy.health -=2;
                }
                else
                {
                    alert("The " + enemy.name + " is faster than you thought, he manges to dodge your sword swipe!");
                }
                break;
            case'dagger':
            case'attack dagger':
            case'attack with dagger':
                if(hit >= 30 && inventory.sword == true)
                {
                    alert("You manage to slash the " + enemy.name + " with your dagger.");
                    enemy.health --;
                }
                else if(inventory.sword == false)
                {
                    alert("You don't have a sword!");      
                }
                else
                {
                alert("The " + enemy.name + " jumps away before you can hit it!");
                }
                break;
            case'bow':
            case'attack bow':
            case'attack with bow':
                if(hit <= 30 && inventory.bow == true)
                {
                    alert("Nice Shot!, your arrow goes straight through the " + enemy.name + "'s heart");
                    enemy.health == 0;
                }
                else if(hit >= 50 && inventory.bow == true)
                {
                    alert("You manage to hit the " + enemy.name + " in the leg!");
                    enemy.health --;
                    enemy.stun = true;
                }
                else if(inventory.bow == false)
                {
                    alert("You don't have a Bow!");
                }
                else
                {
                    alert("Almost instantly, the " + enemy.name + " manages to dodge your arrow!");
                }
                break;
            case'run':
            case'run away':
                if(hit <= 50)
            {
                alert("You manage to run away, all the way back to the Town Square!");
                playerStatus.energy --;
                TownSquare();
            }
            else
            {
            alert("You try your best to get away, but you can't lose the " + enemy.name + ". You can see the town but decide it is better to not lead the enemy into town.");
            }
                break;
            case'defend':
            case'block':
                if(inventory.shield == 'none')
                {
                    if(hit >= 60)
                    {
                        alert("Even without a shield, you still manage to fend off the " + enemy.name + "'s attack");
                        enemy.stun == true;
                                                            
                    }
                    else
                    {
                        alert("Without a shield, you can't do anything to stop the " + enemy.name + "'s attack. He manages to scratch your arm");
                        playerStatus.health --;
                        enemy.stun == true;
                    }
                }
                else
                {
                    alert("You easily defend against the attack with a shield, and easily stun the " + enemy.name);
                    enemy.stun == true;
                }
                break;
            case'fist':
            case'attack with fist':
            case'attack fist':
            case'nothing':
            case'attack with nothing':
                if(hit >= 50)
                {
                    alert("You somehow manage to punch the " + enemy.name + "!")
                }
            default:
            alert("I don't understand" + enemyFight );
        }
        if(enemy.stun == false && enemy.health >0)
        {
            enemy.attack();
        }
    }
    if(playerStatus.health <= 0)
       {
        GameOver();
       }
    else
    {
        alert("You have defeated the " + enemy.name);    
    }
}
var GameOver = function()
{
    if(ending == 'Forest')
        {
        alert("Ending: Nap in the Woods \n GAME OVER");
        }
    else
    {
        alert("GAME OVER");
    }
    //Ask the user if they would like to play again and create a switch function to restart the game if they do wish to play again
    var restart = confirm("Would you like to play again? Press OK to restart the game");
        switch(restart)
        {
			case true:
               document.location.reload();
                break;
			case false:
                window.close();
                break;
            default:
                document.location.reload();     
        }
}

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
			var townSquare = prompt("Welcome to the capitol city of Stralton. You stand in the town square. the city is full of life all around you. There is a Merchant selling his wares. There is a path to the north heading towards the castle. There is what appears to be a bulletin board with several advertisements. There are also a path to the East, but you don't know what is over there. The path to the South leads to the outskirts of town. The path to the West appears to be blocked by some guards. What are you going to do? \n go somewhere. \n talk to merchant \n investigate the bulletin board \n check inventory or gold \n check player status \n look around again (this option will give the discription of the current area)").toLowerCase();
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
				case"check inventory":
				case"inventory":
				   break;
				case"check gold":
				case"gold":
				   checkGold();
				   TownSquare();
				   break;
				case"check status":
				case"check stats":
				case"status":
				case"stats":
				   
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
				
				var Outsidecastle = prompt("You walk to the Castle gates. When you arrive, the gates to the north are open and two gaurds stand at attention. There is a path that leads West towards the guard's barracks. By going south you can go back to the Town Square. What are you going to do? \n Talk to gaurds\n Go somewhere").toLowerCase();
				firstlook[1] = true;
			}
		else
			{
				var Outsidecastle = prompt("You stand at the Castle gates. What are you going to do? \n Go somewhere \n Talk to the guards").toLowerCase();
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
	///create castle gates function
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
		else if (inventory.occupation != "soldier" || inventory.occupation != "knight" || inventory.occupation != "commander" || inventory.occupation != 'captain' || inventory.occupation != "guard" || townHero != true)
		{
			alert("The soldiers stop you and say, 'You again? What do you want?'");
			var guards = prompt("What do you say to them? \n 1 - 'just looking around' \n 2 - 'I'd like to join the guard'.").toLowerCase();
		}
		else
		{
			alert("The guards salute you as you walk inside");
			InsideCastle();
		}
		switch (guards)
			{
				case "1":
					alert("The gaurds say, 'I'm afraid we can't let you pass, these are times of war after all.'");
					break;
				case "2":
					if(inventory.occupation != "soldier")
						{
							alert("One of the gaurds tells you, 'You are going to want to head west of here to the guard barracks, then.");
							OutsideCastle();
						}
					else
						{
							alert("One of them say, 'Very well, then' they get out of your way and salute you as you walk into the castle");
							InsideCastle();
						}
					
					break;
			}
		
	}
	//create guard barracks function
	function GuardBarracks()
	{
		//this loop is only here so the game doesn't break.
	while (playerStatus.health > 0)
		{   
        //check to see if the player has been here already
			if(firstlook[4] == false){
			var captain = prompt("As you enter the Barracks, you see someone wearing a Captain's Uniform sitting at a table writing something down. He notices you walk in. He put's down his quill, and says 'I am Captain Samson, What can I do for you?' what is your response'\n 1 - I am looking for work. \n 2 - I am looking to join the guard \n 3 - Just looking around.").toLowerCase();
				firstlook[4] = true;
			}
            //check to see if the player has completed their quest yet
            else if(inventory.quest == 'Unrest in the West' && inventory.questCompleteion == true) 
            {
                alert("The Captain stands up and says, 'You actually manged to do it! Congragulations, the King wishes to speak to you and reward you personally, go see him at once.' He leads you to the inside of the Castle");
                InsideCastle();
            }
            //allow the player to sleep if they do have the quest
            else if(inventory.quest == 'Unrest in the West' && inventory.questCompleteion == false)
            { 
                    var guardBarracks  = prompt('The guard barracks seem to be empty, Would you like to go to sleep? \n Y/N?').toLowerCase();
                    if(guardBarracks == 'y'){
                        alert('You go to sleep in one of the beds, you are well rested and recover to full health');
                        playerStatus.health = 3;
                        playerStatus.energy = 7;
                        OutsideCastle();
                    }
                else
                {
                    OutsideCastle();
                }
            }
            //check to see if the player is a soldier or gaurd
            else if (inventory.occupation == 'soldier' || inventory.occupation == 'guard')
            {
                var guardBarracks  = prompt('The guard barracks seem to be empty, Would you like to go to sleep? \n Y/N?').toLowerCase();
                    if(guardBarracks == 'y'){
                        alert('You go to sleep in one of the beds, you are well rested and recover to full health');
                        playerStatus.health = 3;
                        playerStatus.energy = 7;
                        OutsideCastle();
                    }
                else{
                    OutsideCastle();
                }
                
            }
            
            else{
			     var captain = prompt( "'I am Captain Samson, What can I do for you?' what is your response'\n 1 - I am looking for work. \n 2 - I am looking to join the guard \n 3 - Just looking around.");
				}
            //Make a switch function to talk to the Captain
            switch(captain)
				{
                        //the player wants to help out without getting a job
					case '1':
						var westQuest = prompt("Captain Samson says, 'Well if that is the case, there's some trouble on the West side of town. The guard there can give you some more information. Just head to the TownSquare and head west. You sure you are up to it?'\n Do you accept this quest? Y/N ").toLowerCase();
						if(westQuest == 'y' || 'yes' || 'ye')
							{
								alert("'Very well then, report back to me when you are done.'\n You have now begun the quest, Unrest in the West");
								inventory.quest = "Unrest in the West";
								GuardBarracks();
							}
						else
						{
							alert("'Well, let me know if you change your mind'");
							GaurdBarracks();
						}
					
						break;
					case'2':		
						var recruitment = prompt("'Is that so? Well, we certainly could use the help! Would you like to be a soldier or just a town guard? \n 1 - soldier \n 2 - guard \n 3 - I changed my mind.").toLowerCase();
						switch(recruitment){
							case '2':
							alert("'Okay then, give me just a second', Captain Samson goes through a door on the left and returns with a uniform, a sword, and a shield. 'Here is your equipment, put these on and report to the West of Town Square. You are also welcome to sleep here whenever you'd like, just don't slack off.'\n You change into your new uniform \n You're occupation is now guard \n You have started the quest, Unrest in the West");
							inventory.occupation = 'guard';
							inventory.quest = 'Unrest in the West';
							inventory.sword = true;
							inventory.shield = 'wooden shield';
                            inventory.armor = "Guard's armor (light armor)"
                                OutsideCastle();
						break;
                            case '1':
                            alert("'Okay then, give me just a second', Captain Samson goes through a door on the left and returns with a uniform, a sword, and a shield. 'Here is your equipment, put these on and report to General Kasimir near the Outskirts of Town. You are also welcome to sleep here whenever you'd like, just don't slack off.'\n You change into your new uniform \n You're occupation is now soldier \n You have started the quest, Soldier of Stralton");
							inventory.occupation = 'soldier';
							inventory.quest = 'Soldier of Stralton';
							inventory.sword = true;
							inventory.shield = 'Crested Shield';
                            inventory.armor = "Soldier's Uniform (light armor)";
                                OutsideCastle();
                        break;
                    case'3':
                                alert("'In that case, I'm going to have to ask you to leave'");
                                OutsideCastle();
						}
						break;
					default:
							alert("'Sorry, I don't quite understand. I'm a bit hard of hearing', says the Captain");
							GuardBarracks();
                }
		}
	}
	//create OUtskirts function
    function Outskirts()
    {
		if(firstlook[7] == false )
		   {
            firstlook[7] = true;
		   	alert("You walk out to the outskirts of town and see, what appears to be a military encampment. There is also a path that continues Southward.")
			   var outskirts = prompt("What are you going to do? \n go somewhere \n investigate the encampment").toLowerCase();
		   }
		else
		{
			if(inventory.occupation == 'soldier'){
				var outskirts = prompt("What are you going to do? \n go somewhere \n report to camp.").toLowerCase();
			}
			else{
				var outskirts = prompt("What are you going to do? \n go somewhere \n investigate the encampment").toLowerCase();
			}
        }
			switch (outskirts)
            {
                case "go": 
			    case "go somewhere":
				   var direction = prompt("Where would you like to go?\n North, back into town \n South, further away from town\n ").toLowerCase();
				   switch(direction) 
				   {
						   //case: the user wishes to go North to the Castle
					   case"north": 
					   case"town square":  
					   case"town": 
					   case"go north":
						   TownSquare();
						   break;
						   //case: the user wishes to go further out of town
					   case"south": 
					   case"further away": 
					   case"further": 
					   case"go south":
						   Forest();
						   break;
						   //case: the user wishes to the military encampent
					   case"encampment": 
					   case"camp": 
					   case"go to encampment": 
					   case"go to camp":
						   Encampment();
						   break;
						   //case: the user wishes to return 
					   case "back":
					   case "do something else":
					   case "something else":
						   Outskirts();
						   //default: we don't understand the input and return the user to the town outskirts
					   default:
						   alert("I don't understand " + direction);
						   Outskirts();   
				
			         }
					break;
				case'report':
				case"encampment": 
				case"camp": 
				case"go to encampment": 
				case"go to camp":
				case'investigate':
				case'investigate encampment':
				case'investigate camp':
					Encampment();
					break;
				case"south": 
				case"further away": 
				case"further": 
				case"go south":
					Forest();
				    break;
					default:
					alert("I don't understand " + outskirts);
					Outskirts();   
			}
		
    }
    function BlockedPath()
    {
		
	}
    function BackAlley()
	{
		
	}
	function Forest()
	{
		//ask the player if they would like to enter the forest
		var forest = prompt("The forest seems pretty dark and scary, are you sure you want to go in there?(Y/N)").toLowerCase();
		if(playerStatus.energy > 0)
			{
        do {
		switch(forest)
			{
				case "y":
				case"yes":
				case "ye":
                    //create explore variable, should the player wish to keep investigating the forest
                    var explore = true;
					//if the player has the generals's orders and a lantern, they get through the forest safely
					if(inventory.generalsOrders == true && inventory.lantern == true)
						{
						alert("Thankfully, General Kasimir included a map with his orders. With the help of the lantern he gave you, you manage to find the other soldiers just fine");
							Battlefield();
						}
                    //if the player goes through the forest with a lantern and without the captain's orders, the player has a chance to encounter an enemy
					else if(inventory.lantern == true)
						{
                            //while the player wander's trhough the forest, they lose an energy and have a chance for a random encounter
							playerStatus.energy--
							var encounter = Math.random() * 100;
							//If the player encounters an enemy
							if(encounter >= 50)
                            {
								alert("As you aimlessly wander around the forest, you begin to hear growling and the rustling of leaves");
								wolf = new Enemy(2,false,'Wolf');
                                Combat(wolf);
							}
							//the player doesn't encounter an enemy
                            else
                            {    
                             alert("The forest continues to loom as you walk, but nothing happens.")   
                            }
						}
                    else
                        {
							//the player doesn't have any items needed to go through the forest safely, and gets a game over
                            alert("As you stumble around in the darkness, you manage to trip on a rock and hit your head! You decide to take a nice nap.... FOREVER!");
                            ending = 'Forest';
                            GameOver();
							explore = false;
                        }
                
					break;
				case'n':
				case'no':
					Outskirts();
					break;
				default:
					alert("I don't understand" + forest);
					Forest();
            }
			//if the player wishes to continue exploring the forest and has enough energy to do so
			if(explore == true && playerStatus.energy > 0){
             forest = prompt("Would you like to keep exploring the Forest?(Y/N)").toLowerCase();
			}
			//the player doesn't have enough energy to keep exploring
			else if (playerStatus.energy <= 0)
				{
					alert("You feel too tired to contiune onward, so you return to the forest enterance");
					Forest();
				}
			}
        while (explore == true)
		}
		else
		{
			alert("You feel to tired to explore the Forest, you should probably repenish your energy first");
			Forest();
		}

		
	}
	function Encampment()
	{
		
	}
    function Battlefield()
    {
    
    }
	function BulletinBoard()
	{
			
	}
}