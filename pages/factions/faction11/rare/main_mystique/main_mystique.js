const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Lame Corrompue",
          description: `Attaque un ennemi. Possede 30% de chances de placer un debuff de placer un debuff ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Renverser la Vapeur",
          description: `Attaque un ennemi. Vole 2 buffs aleatoires sur la cible.`,
          damage: "3.9*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort3.png",
          name: "Lien d'Ame",
          description: `Soigne l'allie ayant les PV les plus bas de 25% de ses PV MAX, puis equilibre le niveau de PV de tous les allies.
Le niveau de PV des Champions seront ramene au niveau de PV moyen de l'equipe.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "16 515",
        "ATQ": "804",
        "DEF": "1 123",
        "VIT": "88",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.png",
  description: `Augmente la statistique PV des Alliés dans les Donjons de 25%.`
};
