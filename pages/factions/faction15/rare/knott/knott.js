const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Riposte épineuse",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 20 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "1.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grâce d'Arbre-bouclier",
          description: `Soigne tous tes alliés à hauteur de 15 % de leurs PV max.${RETURN}${RETURN}

Place un buff ${BUFFS.DEF} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Jouvence de racine",
          description: `Ranime 2 alliés aléatoires avec 25 % de PV et 25 % de Compteur de Tour.${RETURN}${RETURN}

Place également sur tous les alliés ranimés un buff ${BUFFS.SHIELD} valant 20 % de leurs PV MAX pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Bouclier +5%", "Bouclier +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "947",
        "DEF": "1 013",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 15%`,
};
