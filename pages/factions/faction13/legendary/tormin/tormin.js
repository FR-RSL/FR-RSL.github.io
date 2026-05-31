const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feu givré",
          description: `Attaque tous les ennemis. Possède 15 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.

Active instantanément cette Compétence dès qu'un ennemi sous débuff ${DEBUFFS.GEL} et ${DEBUFFS.BURN} subit des dégâts d'un débuff ${DEBUFFS.BURN}.`,
          damage: "2*DEF",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fracas d'Iceberg",
          description: `Retire tous les buffs d'un ennemi ciblé, puis attaque 2 fois la cible. Sinon, vole tous les buffs si la cible se trouve sous débuff ${DEBUFFS.GEL}.

Ignorera la DÉF si la cible se trouve sous débuff ${DEBUFFS.GEL} et ${DEBUFFS.BURN}.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rage du Blizzard",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours sur les ennemis sous débuff ${DEBUFFS.GEL}.

Possède 60 % de chances de placer un débuff ${DEBUFFS.PROVOKE} d'1 tour sur les ennemis ne se trouvant pas sous débuff ${DEBUFFS.GEL}.

Réduit d'1 tour le temps de recharge d'une Compétence aléatoire sur chaque allié pour chaque ennemi attaqué sous débuffs ${DEBUFFS.GEL} et ${DEBUFFS.BURN}.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vent Hivernal [P]",
          description: `${PASSIVE}

Possède 20 % de chances de placer un débuff ${DEBUFFS.GEL} sur l'ennemi chaque fois qu'il reçoit un buff ou que son Compteur de Tour est rempli. Les 20 % de chances s'appliquent jusqu'à deux fois par tour ennemi (une fois pour les buffs, une fois pour le remplissage de Compteur de Tour) si un ennemi reçoit plusieurs de ces effets simultanément. 

Ne fonctionne pas avec les effets des Jeux d'Artéfacts, les effets de remplissage du Compteur de Tour des Maîtrises, les soins, ou les buffs ou effets prenant place au début d'un round.

${ACTIVE}

Ranime ce Champion avec 100 % de PV lorsqu'il se fait tuer, puis place un débuff ${DEBUFFS.GEL} d'1 tour sur ce Champion.`,
          cooldown: 8,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "815",
        "DEF": "1 421",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "70",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
