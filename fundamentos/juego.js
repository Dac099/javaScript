const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

function game(user1, user2)
{
  //user1 = piedra | user2 = papel y caso contrario
  if ((user1 == "piedra" && user2 == "papel") || (user1 == "papel" && user2 == "piedra")){
      console.log("Papel le gana a piedra");
      user1 == "papel" ? console.log("Usuario 1 gana") : console.log("Usuario 2 gana");
  //user1 = piedra | user2 = tijeras y caso contrario
  }else if ((user1 == 'piedra' && user2 == "tijeras") || (user1 == "tijeras" && user2 == "piedra")){
      console.log("Piedra le gana a tijeras");
      user1 == 'piedra' ? console.log("Usuario 1 gana") : console.log("Usuario 2 gana");
  //user1 = papel | user2 = tijeras
  }else if ((user1 == "papel" && user2 == "tijeras") || (user1 == "tijeras" && user2 == "papel")){
      console.log("Tijeras le gana a papel");
      user1 == "tijeras" ? console.log("Usuario 1 gana") : console.log("Usuario 2 gana")
  }else{
      console.log("Es un empate")
  }
}

game(piedra, tijeras);