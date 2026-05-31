const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grêle de rayons de soleil",
          description: `Attaque 2 fois un ennemi. 

Chaque frappe a 35 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. 

Après l'attaque, transfère tous les débuffs de l'allié ayant le plus de débuffs sur la cible. Ne transférera pas les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.PETRIFICATION} et ${DEBUFFS.SHEEP}.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Attaque étincelante",
          description: `Attaque un ennemi. Avant d'attaquer, retire tous les buffs sur la cible. 

L'allié ayant les DÉG C. les plus élevés fera équipe et rejoindra l'attaque. L'allié qui rejoint l'attaque utilisera sa compétence par défaut et ignorera 35 % de la DÉF de la cible. 

Si l'ennemi est tué par l'allié qui rejoint cette attaque, active un effet ${INSTANT} sur cet allié.`,
          damage: "6.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rayonnement de renouveau",
          description: `Ranime un allié mort avec 75 % de PV et 75 % de Compteur de Tour. 

Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.PERFECT_VEIL} sur cet allié pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Marqué par la lumière [P]",
          description: `Au début du tour de ce Champion, a 40 % de chances de retirer les buffs ${BUFFS.BLOCK_DEBUFFS} sur chaque ennemi pour les remplacer par des débuffs ${DEBUFFS.BLOCK_BUFFS}. Possède également 40 % de chances de retirer les buffs qui affectent positivement les stats et de les remplacer par leur débuff miroir équivalent. Par exemple, ${BUFFS.ATK} sera remplacé par ${DEBUFFS.ATK}. Les buffs tels que ${BUFFS.HEALS} et ${BUFFS.STRENGTHEN} seront remplacés, respectivement, par des débuffs ${DEBUFFS.HEALS} et ${DEBUFFS.WEAKEN}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "936",
        "DEF": "1 189",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
