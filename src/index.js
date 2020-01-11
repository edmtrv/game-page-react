import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const CONTENT = {
  description:
    "Grand Theft Auto V is a 2013 action-adventure video game developed by Rockstar North and published by Rockstar Games.It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.Set within the fictional state of San Andreas, based on Southern California, the single - player story follows three criminals and their effortsto commit heists while under pressure from a government agency.The open world design lets players freely roam San Andreas'open countryside and the fictional city of Los Santos, based on Los Angeles.",
  review:
    "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series. It may be fully explored after the game's beginning without restriction, although story progress unlocks more gameplay content.<br>Players use melee attacks, firearms and explosives to fight enemies, and may run, jump, swim or use vehicles to navigate the world.To accommodate the map's size, the game introduces vehicle types absent in its predecessor Grand Theft Auto IV, such as fixed-wing aircraft. In combat, auto-aim and a cover system may be used as assistance against enemies. Should players take damage, their health meter will gradually regenerate to its halfway point. Players respawn at hospitals when their health depletes. If players commit crimes, law enforcement agencies may respond as indicated by a \"wanted\" meter in the head-up display (HUD). Stars displayed on the meter indicate the current wanted level (for example, at the maximum five-star level, police helicopters and SWAT teams swarm to lethally dispatch players). Law enforcement officers will search for players who leave the wanted vicinity. The meter enters a cool-down mode and eventually recedes when players are hidden from the officers' line of sight that displays on the mini- map.<br>While free - roaming the game world, players may engage in context - specific activities such as scuba diving and BASE jumping. Each character has a smartphone for contacting friends, starting activities and accessing an in -game Internet.The Internet lets players trade in stocks via a stock market.Players may purchase properties such as garages and businesses, upgrade the weapons and vehicles in each character's arsenal. Players may also visit places such as cinemas and strip clubs. Players can also customise their appearance by purchasing outfits, haircuts and tattoos.",
  requirements: {
    min: {
      os:
        'OS: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      processor:
        'Processor: Intel Core 2 Quad CPU Q6600 @2.40GHz(4 CPUs) / AMD Phenom 9850 Quad - Core Processor(4 CPUs) @2.5GHz',
      memory: 'Memory: 4GB',
      videoCard:
        'Video Card: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB(DX 10, 10.1, 11)',
      soundCard: 'Sound Card: 100 % DirectX 10 compatible',
      hddSpace: 'HDD Space: 65GB'
    },
    rec: {
      os:
        'OS: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      processor:
        'Processor: Intel Core i5 3470 @3.2GHZ(4 CPUs) / AMD X8 FX - 8350 @4GHZ(8 CPUs)',
      memory: 'Memory: 8GB',
      videoCard: 'Video Card: NVIDIA GTX 660 2GB / AMD HD7870 2GB',
      soundCard: 'Sound Card: 100 % DirectX 10 compatible',
      hddSpace: 'HDD Space: 65GB'
    }
  }
};

ReactDOM.render(<App content={CONTENT} />, document.querySelector('#root'));
