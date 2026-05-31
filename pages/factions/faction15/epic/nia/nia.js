const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Plantes asphyxiantes",
          description: `Attaque tous les ennemis. Possède 30 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "2.5*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Renouveau tapageur",
          description: `Retire tous les débuffs sur un allié ciblé, puis le soigne de 40 % de ses PV MAX. Si la cible de la compétence n'est pas cette Championne, réduit de 2 tours le temps de recharge de toutes les compétences de la cible.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chair d'écorce",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf cette Championne pendant 2 tours. Place un buff ${BUFFS.STRENGTHEN} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Larges racines [P]",
          description: `Dès que cette Championne se fait soigner, soigne chaque allié sauf cette Championne de 20 % du soin.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "683",
        "DEF": "1 277",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
