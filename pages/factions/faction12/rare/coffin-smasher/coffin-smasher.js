const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crescendo de Maillet",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 15% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "0.06*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feu Tombal",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.BURN} de 2 tours.`,
          damage: "0.22*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brume Morose [P]",
          description: `Réduit de 5% les dégâts infligés par les ennemis à l'aide d'attaques de zone.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "683",
        "DEF": "936",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
