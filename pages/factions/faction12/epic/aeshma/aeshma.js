const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faucilles d'ichor",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 20% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Affliction débilitante",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Langueur",
          description: `Attaque un ennemi. Possède 75% de chances de réduire d'1 tour la durée de tous les buffs de la cible.${RETURN}${RETURN}

Possède également 75% de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Venin dans le sang [P]",
          description: `Soigne cette Championne de 3% de ses PV MAX dès qu'un ennemi reçoit des dégâts d'un débuff ${DEBUFFS.POISON}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 354",
        "DEF": "980",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
