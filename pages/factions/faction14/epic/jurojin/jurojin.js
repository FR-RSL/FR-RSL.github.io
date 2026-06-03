const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pelle de Moine",
          description: `Attaque un ennemi. Possède 45% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "0.24*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Duel Prédestiné",
          description: `Place sur ce Champion un buff ${BUFFS.SHIELD} égal à 25% de ses PV MAX pendant 2 tours, puis attaque 1 ennemi. Place un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Si les PV de la cible sont inférieurs ou égaux à ceux de ce Champion, il est impossible de résister au buff ${DEBUFFS.PROVOKE}.`,
          damage: "0.32*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%", "Dégâts +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vraie Frappe",
          description: `Attaque un ennemi. Ignorera 25% de la DÉF de la cible. Ignorera également les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "0.34*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sourit à la Mort [P]",
          description: `Recevra 25% de dégâts en moins suite aux attaques ennemies lorsque les PV de ce Champion tombent à 50% ou moins.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "738",
        "DEF": "1 167",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
