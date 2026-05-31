const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balayage de Faucille",
          description: `Attaque tous les ennemis. Possède 40 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "2.65*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Perce-Coeur",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.CRATE} de 30 % et un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "4.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Embuscade Fantôme",
          description: `Place un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours, puis attaque 1 ennemi. Remplit le Compteur de Tour de tous les alliés de 20 % si cette attaque passe en critique.`,
          damage: "4.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fausse Mort [P]",
          description: `Ranime un allié choisi au hasard avec 30 % de PV chaque fois que ce Champion tue un ennemi. 

Possède 50 % de chances de placer un débuff ${DEBUFFS.FEAR} sur tous les ennemis pendant 1 tour lorsqu'un allié est ranimé.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 222",
        "DEF": "1 090",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
