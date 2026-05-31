const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Haches Gravées",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 10 % des dégâts infligés.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Verdict des Esprits",
          description: `Sacrifie des PV équivalents à 10 % des PV MAX de ce Champion, puis soigne une cible alliée de 10 % de ses PV MAX. Possède également 40 % de chances de placer un buff ${BUFFS.HEALS} de 7,5 % sur cet allié pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "782",
        "DEF": "870",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
