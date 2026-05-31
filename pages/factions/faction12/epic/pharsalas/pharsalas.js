const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Prise Tombale",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Place un débuff ${DEBUFFS.ATK} de 50 % pendant 1 tour si la cible se trouve sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.`,
          damage: "4.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nécrose",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "4.65*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rempart de Cercueil",
          description: `Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30 % de leurs PV MAX pendant 2 tours. Place un buff ${BUFFS.STRENGTHEN} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dégondé [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.FEAR} et ${DEBUFFS.TRUE_FEAR}.

Dès que les PV d'un allié tombent sous 50 % suite à une attaque ennemie, possède 50 % de chances de placer un débuff ${DEBUFFS.FEAR} sur l'assaillant pendant 1 tour.

Dès qu'un allié est tué par un ennemi, possède 75 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "892",
        "DEF": "1 167",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 30%`,
};
