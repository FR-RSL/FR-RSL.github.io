const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bondir",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "1.5*ATQ+0.12*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Étranglement",
          description: `Attaque un ennemi. Place un débuff de ${DEBUFFS.SLEEP} pendant 2 tours si la cible ne possède pas de buff actif.`,
          damage: "2.5*ATQ+0.2*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Baume d'Herbe [P]",
          description: `Place sur ce Champion un buff de ${BUFFS.HEALS} de 15 %, pendant 2 tours, si les dégâts reçus dépassent 20 % des PV en une seule attaque.`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "903",
        "DEF": "760",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 22%`,
};
