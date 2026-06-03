const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déchirure volcanique",
          description: `Attaque un ennemi. Remplit le Compteur de Tour de ce Champion de 15%.${RETURN}${RETURN}

Remplit également le Compteur de Tour de tous les alliés sauf ce Champion de 10% lorsqu'il attaque une cible sous débuff ${DEBUFFS.BURN}.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrière ardente",
          description: `Place un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 3 tours, puis active instantanément un déclenchement de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis.${RETURN}${RETURN}

Place ensuite sur tous les alliés un buff ${BUFFS.SHIELD} pendant 2 tours, équivalent aux dégâts infligés par l'activation de ${DEBUFFS.BURN}. La valeur du buff ${BUFFS.SHIELD} ne peut pas dépasser 25 000 PV.`,
          cooldown: 5,
          levelInfo: ["Bouclier +10%", "Temps de recharge -1", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Renaître de ses cendres",
          description: `Ranime tous les alliés morts avec 50% de PV et 40% de Compteur de Tour.${RETURN}${RETURN}

Accorde un Tour supplémentaire.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Don pyroclastique [P]",
          description: `Pour chaque débuff ${DEBUFFS.BURN} placé, remplit le Compteur de Tour de tous les alliés de 5%.${RETURN}${RETURN}

Dès qu'un débuff ${DEBUFFS.BURN} est activé, soigne tous les alliés de 5% de leurs PV MAX. Dès qu'un débuff ${DEBUFFS.BURN} est activé sur Skavag, Skavag corrompue, les Bébés Araignées ou les Bébés Araignées corrompus, soigne tous les alliés de 1% de leurs PV MAX.${RETURN}${RETURN}

Dès qu'un débuff ${DEBUFFS.BURN} est retiré sur un ennemi, place un débuff ${DEBUFFS.RES} de 50% sur cet ennemi pendant 1 tour.${RETURN}${RETURN}

Dès qu'un allié est tué par un ennemi sous débuff ${DEBUFFS.BURN}, remplit le Compteur de Tour de ce Champion de 20%.${RETURN}${RETURN}

Augmente la VIT de ce Champion de 7 points pour chaque débuff ${DEBUFFS.BURN} actif.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 112",
        "DEF": "1 211",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
