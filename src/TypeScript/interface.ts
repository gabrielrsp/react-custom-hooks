// INTERFACE

type person = {
  id: number;
  name: string;
}

// note the difference between type and interface!
interface ITeam {
  division: number;
  team: string;
}

interface IPlayer {
  id: number;
  name: string;
}

let newPlayer: IPlayer = {
  id: 1,
  name: 'john'
}

//INTERSECTION FOR INTERFACES IS ALSO DIFFERENT

interface IGame extends IPlayer, ITeam {}

let newGame: IGame

newGame = {
  id: 1,
  name: 'jonas',
  team: 'dragons',
  division: 2
}