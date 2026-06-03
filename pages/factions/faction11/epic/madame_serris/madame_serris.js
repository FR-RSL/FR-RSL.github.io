const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Propagation de Panique",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.FEAR} d'1 tour.${RETURN}${RETURN}

Ces chances passent à 30 % si la cible est affligée d'un débuff.${RETURN}${RETURN}

Ces chances passent à 45 % si la cible est affligée de 2 débuffs ou plus.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bonbons et Sorts",
          description: `Attaque tous les ennemis. Possède 40 % de chances de voler 1 buff aléatoire sur chaque cible.${RETURN}${RETURN}

Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours en cas de vol de buff.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.TRUE_FEAR} d'1 tour sur les ennemis dont les buffs ont été volés.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Rituel de Minuit",
          description: `Retire tous les buffs dont disposent les ennemis. Place un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours sur tous les ennemis.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Grace de Sorcière [P]",
          description: `Au début de chaque tour, place sur ce Champion un buff de ${BUFFS.SHIELD} équivalent à 10 % de ses PV MAX.${RETURN}${RETURN}

Quand il se fait attaquer lorsqu'il dispose d'un buff de ${BUFFS.SHIELD}, possède 35 % de chances de placer un débuff ${DEBUFFS.FEAR} d'1 tour sur l'assaillant.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "19 650",
        "ATQ": "826",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = null;
