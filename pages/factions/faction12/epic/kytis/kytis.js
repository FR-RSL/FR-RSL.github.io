const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faucheuse d'Âme",
          description: `Attaque un ennemi. Possède 85 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "4.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pics",
          description: `Place un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours, puis attaque 4 fois au hasard. Si la cible possède des buffs, les attaques passeront en critique.`,
          damage: "1.6*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Plaies Sanglantes",
          description: `Attaque 2 fois tous les ennemis. Les dégâts augmentent en fonction de la quantité de PV perdue par ce Champion.

C'est une compétence secrète. Elle ne devient disponible que lorsque ce Champion a perdu 50 % de ses PV.`,
          damage: "(1.9+((1-Current HP %)*100)/30)*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 222",
        "DEF": "1 090",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des batailles d'Arène de 33%`,
};
