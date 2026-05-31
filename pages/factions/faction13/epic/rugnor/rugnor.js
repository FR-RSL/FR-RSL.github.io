const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache Assoiffée",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frénésie Fou d'Or",
          description: `Sacrifie des PV équivalents à 15 % des PV MAX de ce Champion, puis remplit le Compteur de Tour de ce Champion de 75% et lui accorde un buff ${BUFFS.SHIELD} équivalent à 20 % de ses PV MAX pendant 3 tours. Il est impossible de retirer le buff ${BUFFS.SHIELD}.

Le sacrifice de PV surviendra même si cela tue ce Champion, et il ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lueur d'Avarice",
          description: `Place un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours, puis attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % sur la cible pendant 2 tours.

Possède également 75 % de chances de placer sur la cible un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours, avant d'attaquer.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Terrible Rancune [P]",
          description: `Réduit d'1 tour le temps de recharge de la compétence Lueur d'Avarice de ce Champion chaque fois que ce Champion perd 15 % de PV. 

La perte de PV est accumulée et suivie au cours de plusieurs tours, attaques ou frappes et n'est pas affectée par les soins ou d'autres augmentations des PV.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 409",
        "DEF": "782",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de la Tour du Malheur de 35%`,
};
