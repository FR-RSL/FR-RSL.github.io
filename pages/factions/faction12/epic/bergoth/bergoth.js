const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mastodonte Cauchemar",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un buff ${BUFFS.HEALS} de 15 % sur ce Champion pendant 1 tour si cette attaque passe en critique.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Puanteur Chimique",
          description: `Attaque tous les ennemis. Possède 30 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 2 tours.`,
          damage: "0.2*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bonbonne [P]",
          description: `Lorsque ce Champion se fait attaquer, soigne tous les alliés sauf ce Champion à hauteur de 20 % des dégâts reçus.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "716",
        "DEF": "1 134",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
