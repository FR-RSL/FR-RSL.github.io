const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe de Bouclier",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "4.15*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Roues du Destin",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.CRATE} de 30 % pendant 2 tours.`,
          damage: "4.2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mené à l'Abattoir",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 2 tours. 

Soigne également ce Champion à hauteur de 20 % de ses PV MAX.`,
          damage: "6.4*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Boucliers Envoûtés [P]",
          description: `Renvoie sur l'assaillant 30 % des dégâts reçus par ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "848",
        "DEF": "1 255",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 30%`,
};
