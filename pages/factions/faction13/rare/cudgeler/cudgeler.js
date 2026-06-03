const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dure sera la Chute",
          description: `Attaque 2 fois un ennemi. Possède 30% de chances supplémentaires de placer un coup critique si la cible souffre d'un débuff ${DEBUFFS.DEF}.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ramollis-les",
          description: `Place un buff ${BUFFS.COUNTER} et un buff ${BUFFS.ATK} de 25% sur ce Champion pendant 2 tours. Accorde un Tour Supplémentaire.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Défense Furieuse [P]",
          description: `Possède 20% de chances de placer un débuff ${DEBUFFS.DEF} de 30% pendant 2 tours si les cibles attaquées possèdent plus de DÉF que ce Champion. Possède 20% de chances de réduire de 20% les dégâts reçus lorsque ce Champion est attaqué par des ennemis ayant une ATQ plus élevée que ce lui.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 178",
        "DEF": "903",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
