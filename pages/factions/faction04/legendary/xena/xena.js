const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée de rédemption",
          description: `Attaque 2 fois un ennemi. Ignorera 3 % de la DÉF de la cible pour chaque buff dont bénéficie la cible.

Ignorera également les buffs ${BUFFS.SHIELD} si la cible possède 2 buffs, ou débuffs, ou plus.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cyclone chakram",
          description: `Attaque tous les ennemis. Ignorera 5 % de la DÉF de la cible pour chaque buff dont bénéficie la cible.

Vole 20 % du Compteur de Tour pour chaque ennemi. Il est impossible de résister à cet effet si la cible possède 2 buffs, ou débuffs, ou plus.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fouet du destin",
          description: `Attaque tous les ennemis. Ignorera 10 % de la DÉF de la cible pour chaque buff dont bénéficie la cible.

Réinitialise le compteur de tour de cette compétence si cette attaque tue 2 ennemis, ou plus.`,
          damage: "4.1*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Servir au mieux ! [P]",
          description: `${PASSIVE}

Augmente l'ATQ de ce Champion de 10 % chaque fois qu'il utilise une compétence active (s'additionne jusqu'à 100 %). Se réinitialise à chaque round.

Possède également 50 % de chances de changer de manière aléatoire les frappes faibles de ce Champion en frappes normales, puissantes ou critiques. Les chances passent à 100 % lors des attaques contre des ennemis se trouvant sous 2 buffs, débuffs, ou plus.

${ACTIVE}

Remplit le Compteur de Tour de ce Champion par 100 % et place sur ce Champion un buff ${BUFFS.ATK} de 50 %, pour 1 tour, dès que 8 buffs, ou plus, sont placés sur l'équipe ennemie lors d'un seul tour.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 542",
        "DEF": "1 046",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 33%`,
};
