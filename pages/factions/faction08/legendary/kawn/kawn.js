const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Machine à bois",
          description: `Attaque un ennemi. Avant d'attaquer, retire 1 buff aléatoire sur la cible. Il est impossible de résister à cet effet si ce Champion se trouve sous buff ${BUFFS.SHIELD}.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_REA} si cette attaque tue un ennemi.${RETURN}${RETURN}

Augmente la valeur des buffs ${BUFFS.SHIELD} sur ce Champion de 30% des dégâts infligés. Impossible d'augmenter de plus de 10 000.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Briseur d'écorce",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Ignore un pourcentage de la DÉF de chaque cible, équivalent à 50% de la différence entre les PV MAX de ce Champion et des buffs ${BUFFS.SHIELD} dont il dispose.${RETURN}${RETURN}

Détruit également les PV MAX de chaque cible de 20% des dégâts infligés (s'accumule jusqu'à 50%). Cet effet ignorera les buffs ${BUFFS.SHIELD}.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Âme rustique",
          description: `Place un buff ${BUFFS.SHIELD} proportionnel à la DÉF de ce Champion et un buff ${BUFFS.STRENGTHEN} de 25% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fléau du Bois de Brume [P]",
          description: `Retire un débuff aléatoire sur ce Champion au début de son tour.${RETURN}${RETURN}

Au début de chaque 4e tour de ce Champion, retire tous les débuffs dont il est affligé et lui accorde un buff ${BUFFS.DEF} de 60% pendant 2 tours.${RETURN}${RETURN}

Augmente la DÉF de ce Champion de 3% pour chaque débuff retiré par cette compétence (s'accumule jusqu'à 30%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "881",
        "DEF": "1 465",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
