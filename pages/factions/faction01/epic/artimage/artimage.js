const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Masse du Noble",
          description: `Attaque 2 fois un ennemi. La première frappe possède 40 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. La seconde frappe possède 40 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vraisemblable",
          description: `Retire tous les débuffs sur ce Champion, puis attaque tous les ennemis.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Valeur inébranlable",
          description: `Attaque un ennemi. Ignorera 30 % de la DÉF de la cible. 

Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours si cette attaque tue un ennemi. Il est impossible de retirer ces buffs.`,
          damage: "6.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 310",
        "DEF": "1 024",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 20%`,
};
