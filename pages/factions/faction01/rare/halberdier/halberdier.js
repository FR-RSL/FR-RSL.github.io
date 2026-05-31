const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tailler",
          description: `Attaque 1 ennemi. Possède 25 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "3.5*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Couper en Deux",
          description: `Attaque 1 ennemi. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "4.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fil de Hache [P]",
          description: `Augmente de 40 % les DÉG C.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 178",
        "DEF": "1 046",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
