const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton Majestueux",
          description: `Attaque 1 ennemi. Si le coup passe en critique, place, pendant 1 tour, un buff d'${BUFFS.ATK} de 25% sur un allié pris au hasard.`,
          damage: "4.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Consacrer",
          description: `Place un buff ${BUFFS.REVIVE_ON_DEATH} et un buff ${BUFFS.REFLECT_DAM} de 30% sur une cible alliée pendant 2 tours. Soigne tous les autres alliés à hauteur de 10% des PV de la cible.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Réprimander",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff de ${DEBUFFS.HEALS} de 50% pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "892",
        "DEF": "936",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 22%`,
};
