const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Dissipante",
          description: `Attaque un ennemi. Possède 25 % de chances de retirer un buff aléatoire sur chaque cible.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exploitation de Faiblesse",
          description: `Attaque un ennemi. Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 15 % sur tous les alliés.`,
          damage: "5.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rappel",
          description: `Ranime un allié avec 50 % de ses PV. Place, sur la cible, un buff de ${BUFFS.SHIELD} équivalent à 20 % des PV de la cible.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 112",
        "DEF": "1 024",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 23%`,
};
