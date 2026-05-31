const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteau de carnaval",
          description: `Attaque 2 fois un ennemi. Chaque frappe soigne ce Champion de 10 % de ses PV MAX. 

Si la cible ne possède aucun buff actif, chaque frappe remplit également le Compteur de Tour de ce Champion de 10 %.`,
          damage: "0.1*HP",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tester sa force",
          description: `Attaque tous les ennemis. Réduit la durée de tous les buffs des ennemis de 3 tours. 

Si aucun ennemi ne possède de buff actif, accorde un Tour supplémentaire. Accorde toujours un Tour supplémentaire si Kaja l'Ironique se trouve dans la même équipe, même s'il y a des ennemis avec des buffs actifs.`,
          damage: "0.25*HP",
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fûts de terreur",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.

Place un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour.`,
          damage: "0.27*HP",
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Assistant hideux [P]",
          description: `Dès que la compétence d'un ennemi s'active avec succès lorsqu'il est sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}, remplit le Compteur de Tour de Timit de 10 %. 

Dès que la compétence d'un ennemi ne s'active pas parce qu'il est sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}, place un débuff ${DEBUFFS.PROVOKE} sur cet ennemi pendant 1 tour. Cet effet spécifique ne s'applique que lorsque Kaja l'Ironique se trouve dans la même équipe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "859",
        "DEF": "1 211",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 50`,
};
