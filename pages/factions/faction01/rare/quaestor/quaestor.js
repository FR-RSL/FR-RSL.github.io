const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assaut Vaillant",
          description: `Attaque un ennemi. Inflige 30% de DÉG C. supplémentaires si ce Champion possède moins de 50% de PV.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exemple Influent",
          description: `Attaque un ennemi. Place un buff ${BUFFS.CDAM} de 15% sur tous les alliés pendant 2 tours si cette attaque passe en critique.`,
          damage: "5.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Épuisement",
          description: `Attaque un ennemi. Possède 75% de chances de retirer 2 buffs pris au hasard sur la cible.`,
          damage: "6*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 288",
        "DEF": "859",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
