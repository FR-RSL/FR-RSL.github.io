const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Priver",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 40 % de chances de voler un buff aléatoire. Remplit le Compteur de Tour de cette Championne de 10 % pour chaque buff volé.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charge de Beau-Sabot",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.RES} de 50 % et un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours. 

Remplit le Compteur de Tour de cette Championne de 10 % pour chaque débuff placé par cette compétence.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Danse guerrière",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours. 

Remplit également le Compteur de Tour de tous les alliés de 20 %.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frappe de sabot [P]",
          description: `Remplit le Compteur de Tour de cette Championne de 5 % chaque fois qu'un buff allié est retiré, transféré, volé ou expire.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 123",
        "DEF": "1 222",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = null;
