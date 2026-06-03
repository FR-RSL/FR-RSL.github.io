const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Morgenstern de misère",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.${RETURN}${RETURN}

Si la cible se trouve sous débuff ${DEBUFFS.LEECH}, possède également 100 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % sur la cible pendant 2 tours avant d'attaquer.`,
          damage: "0.25*HP",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Horreur éCoeurante",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.${RETURN}${RETURN}

Place également sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours. Le buff ${BUFFS.SHIELD} ne peut pas être retiré s'il est placé lorsqu'il y a des ennemis sous débuffs ${DEBUFFS.LEECH}.`,
          damage: "0.35*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vermin vitae",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.REFLECT_DAM} de 30 % sur tous les alliés pendant 2 tours, puis soigne ce Champion de 50 % de ses PV MAX.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pourriture d'âme [P]",
          description: `Dès qu'un allié sous buff ${BUFFS.REFLECT_DAM} est attaqué, place un débuff ${DEBUFFS.LEECH} sur l'assaillant pendant 1 tour.${RETURN}${RETURN}

Renvoie sur l'assaillant 50 % des dégâts reçus par ce Champion.${RETURN}${RETURN}

Augmente de 20 % la quantité de dégâts renvoyés grâce aux buffs ${BUFFS.REFLECT_DAM} placés par des alliés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "826",
        "DEF": "1 222",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
