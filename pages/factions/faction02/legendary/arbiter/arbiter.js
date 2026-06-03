const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Regard de la Justice",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Humilité Imposée",
          description: `Attaque 1 fois tous les ennemis. Possède 75% de chances de réduire d'1 tour la durée de tous les buffs ennemis.`,
          damage: "2.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mentor de Héros",
          description: `Place un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours, puis augmente le Compteur de Tour de tous les alliés de 30%. Soigne tous les alliés de 25% de leurs PV MAX s'ils ont moins de 50% de PV.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Appel du Destin",
          description: `Ranime tous les alliés morts avec 30% de PV, puis remplit de 20% les Compteurs de tour de tous les alliés.${RETURN}${RETURN}

Accorde un Tour Supplémentaire à ce Champion si un allié a été ranimé.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "1 068",
        "DEF": "1 101",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 30%`,
};
