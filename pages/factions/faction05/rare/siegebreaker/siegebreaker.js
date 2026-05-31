const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coups Écorchants",
          description: `Attaque 2 fois 1 ennemi.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Électrocuter",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour si cette attaque passe en critique.`,
          damage: "6.6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hurlement Divin",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 30 % sur ce Champion, puis attaque tous les ennemis. Possède 50 % de chances de réduire le Compteur de Tours de 30 % si cette attaque passe en critique.`,
          damage: "4.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 211",
        "DEF": "881",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
