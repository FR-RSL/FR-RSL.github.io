const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hiver réducteur",
          description: `Attaque tous les ennemis.

A 25 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour. Il est impossible de résister à ce débuff s'il y a au moins 1 ennemi sous débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} ou ${DEBUFFS.PETRIFICATION}. 

Active instantanément cette compétence dès que ce Champion passe un tour à cause d'un débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} ou ${DEBUFFS.PETRIFICATION}.`,
          damage: "2.7*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blizzard de coups",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.BLOCK_DAMAGE}. 

A 75 % de chances de placer un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour. Il est impossible de résister à ce débuff s'il y a au moins 1 ennemi sous débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} ou ${DEBUFFS.PETRIFICATION}. 

Ranime un allié aléatoire avec 50 % de PV et 50 % de Compteur de Tour si cette compétence n'a pas tué d'ennemi. Ranime tous les alliés avec 50 % de PV et 50 % de Compteur de Tour si cette compétence tue au moins un ennemi.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tâcher les neiges",
          description: `Attaque un ennemi. Avant d'attaquer, vole la totalité du Compteur de Tour de la cible. Il est impossible de résister à cet effet s'il y a au moins 1 ennemi sous débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} ou ${DEBUFFS.PETRIFICATION}. Égalise également la DÉF de la cible avec la DÉF de ce Champion pour cette attaque. 

Les dégâts infligés par cette compétence augmentent de la quantité de Compteur de Tour volé.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Démon solitaire [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 50 % dès que ce Champion passe un tour à cause d'un débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} ou ${DEBUFFS.PETRIFICATION}. 

Dès que ce Champion passe un tour à cause d'un de ces débuffs, sa prochaine compétence active ignorera 50 % de la DÉF de la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 608",
        "DEF": "914",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 33%`,
};
