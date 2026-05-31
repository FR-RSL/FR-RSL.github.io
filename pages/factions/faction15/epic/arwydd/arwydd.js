const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe-herbe",
          description: `Attaque un ennemi. Possède 50 % de chances de voler un buff aléatoire à la cible.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tornade d'herbes",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les débuffs sur cette Championne. 

Possède 75 % de chances de retirer 1 buff aléatoire à tous les ennemis.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bond de hache",
          description: `Attaque un ennemi. 

Les dégâts augmentent de 30 % si cette Championne n'est affligée d'aucun débuff actif. Ignorera également les buffs ${BUFFS.UNKILLABLE} si cette Championne n'est affligée d'aucun débuff actif.`,
          damage: "6.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Herbe ondulante [P]",
          description: `La PRÉ de cette Championne augmente de 50 si elle n'est affligée d'aucun débuff actif.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 365",
        "DEF": "991",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 30%`,
};
