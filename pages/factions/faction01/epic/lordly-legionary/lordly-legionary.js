const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Durcir le Combat",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si la cible est affligée d'un débuff ${DEBUFFS.HEALS} de 50 %. Place deux frappes supplémentaires si la cible est affligée d'un débuff ${DEBUFFS.HEALS} de 100 %.`,
          damage: "0.75*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Déborder",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Réduit de 20 % le Compteur de Tour de la cible si le débuff ${DEBUFFS.SPD} est placé.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ordres de la Légion",
          description: `Place, pendant 2 tours, un buff ${BUFFS.REFLECT_DAM} de 30 % et un buff ${BUFFS.HEALS} de 15 % sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 354",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
