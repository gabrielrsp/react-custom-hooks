type User = {
  id: number;
  name: string;
}

type Char = {
  nick: string;
  level: number;
}

type PlayerInfo = User & Char & { class: string; hoursPlayed: number };
let info: PlayerInfo = {
  id: 1,
  name: 'john',
  nick: 'rex',
  level: 5,
  class: 'mage',
  hoursPlayed: 300
}