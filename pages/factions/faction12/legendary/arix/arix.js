const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arts mortels",
          description: `Attaque tous les ennemis. Possède 25 % de chances de retirer 1 buff aléatoire sur chaque cible.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sort chaînépine",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Transfère un débuff aléatoire de ce Champion sur les cibles qui reçoivent des débuffs ${DEBUFFS.STUN} grâce à cette compétence.`,
          damage: "0.35*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Conseils tordus",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours. Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Cynique [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 5 % chaque fois qu'un allié inflige un coup critique. 

Soigne ce Champion de 5 % de ses PV MAX chaque fois qu'un ennemi inflige un coup critique.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "22 965",
        "ATQ": "881",
        "DEF": "1 167",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = null;
