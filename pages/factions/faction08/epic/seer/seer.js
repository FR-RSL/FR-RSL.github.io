const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assommer",
          description: `Attaque un ennemi. Possède 15 % de chances d'accorder un Tour Supplémentaire.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bannière de Clan",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 30 % sur tous les alliés. Place, pendant 2 tours, un débuff d'${DEBUFFS.WEAKEN} de 25 % sur tous les ennemis.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brûlure Karmique",
          description: `Retire tous les buffs de tous les alliés et de tous les ennemis, puis attaque tous les ennemis. Les dégâts augmentent en fonction du nombre de buffs retirés. Possède 50 % de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour sur tous les ennemis. Les chances de placer un débuff de ${DEBUFFS.SLEEP} augmentent de 5 % pour chaque buff retiré. Inflige moins de dégâts aux Boss.`,
          damage: "Non-Boss: Enemy Max HP * (0.1+0.03*Buffs) OR Boss: Enemy Max HP * (0.1+0.005*Buffs)",
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 145",
        "DEF": "870",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
