const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Creuser",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tendres pitiés",
          description: `Attaque un ennemi. Inflige 100 % de dégâts supplémentaires contre les cibles sans buff.`,
          damage: "4.6*ATQ or 9.2*ATQ (No Buffs)",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Isoler",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 50 % de chances de voler un buff aléatoire sur la cible. 

Place un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours si la cible ne possède pas de buff après cette attaque.`,
          damage: "1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 409",
        "DEF": "936",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
