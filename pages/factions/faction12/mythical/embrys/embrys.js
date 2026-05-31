const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Glaive fétide",
          description: `Attaque tous les ennemis. Détruit les PV MAX de chaque cible de 3 % (s'accumule jusqu'à 30 %). 

Augmente également d'1 tour la durée d'1 debuff aléatoire sur tous les ennemis. Il est impossible de résister à cet effet si les ennemis sont affligés de piles de ${DEBUFFS.NECROSIS}.`,
          damage: "0.19*HP",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Regard vide",
          description: `Place un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour et un débuff ${DEBUFFS.ATK} de 50 % sur tous les ennemis pendant 2 tours. Il est impossible de résister à ces effets si les ennemis sont affligés de piles de ${DEBUFFS.NECROSIS}. 

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "La démolition",
          description: `Attaque tous les ennemis. 

Retire les buffs ${BUFFS.STONE_SKIN} et les remplace par un débuff ${DEBUFFS.TRUE_FEAR}. Les buffs ${BUFFS.BLOCK_DEBUFFS} seront remplacés par des débuffs ${DEBUFFS.BLOCK_BUFFS}.

Retire également les buffs affectant positivement les stats et les remplace par leur débuff miroir équivalent. Par exemple, ${BUFFS.ATK} sera remplacé par ${DEBUFFS.ATK}. Les buffs tels que ${BUFFS.HEALS} et ${BUFFS.STRENGTHEN} seront remplacés, respectivement, par des débuffs ${DEBUFFS.HEALS} et ${DEBUFFS.WEAKEN}. Les débuffs miroir auront la même durée que les buffs avant qu'ils soient remplacés. 

Ensuite, vole 5 % du Compteur de Tour de chaque cible pour chaque buff converti en débuff par cette compétence. Réduit également le Compteur de Tour de tous les ennemis de 20 %. 

Il est impossible de résister à ces effets si les ennemis sont affligés de piles de ${DEBUFFS.NECROSIS}.`,
          damage: "0.27*HP",
          cooldown: 5,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme alternative. 

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Existence injustifiée [P]",
          description: `Dès qu'un ennemi est tué, place une pile de ${DEBUFFS.NECROSIS} sur tous les autres ennemis. Il est impossible de résister aux piles de ${DEBUFFS.NECROSIS} et de les bloquer. Les piles de ${DEBUFFS.NECROSIS} ne peuvent être retirées qu'en ranimant des alliés morts. Cet effet ne fonctionne pas contre les Boss et leurs sbires. Si plusieurs Champions de l'équipe disposent de cette Compétence, cet effet ne sera activé qu'une fois. 

Au début et à la fin du tour de ce Champion, active instantanément les piles de ${DEBUFFS.NECROSIS} sur tous les ennemis.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 140",
        "ATQ": "1 101",
        "DEF": "1 277",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Lame du démolisseur",
          description: `Attaque un ennemi. Place une frappe supplémentaire si la cible est affligée d'une pile de ${DEBUFFS.NECROSIS}. 

Place également un débuff ${DEBUFFS.BLOCK_REA} si cette attaque tue un ennemi.`,
          damage: "HP*(0.25+ACC/10000)",
          levelInfo: ["Dégâts +10%", "Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Atomiser",
          description: `Attaque tous les ennemis. 

Inflige le double de dégâts aux ennemis dont la PRÉ est inférieure à celle de ce Champion. Ignore 50 % de la DÉF de chaque ennemi dont la PRÉ est supérieure ou égale à la PRÉ de ce Champion.`,
          damage: "HP*(0.28+ACC/10000)",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Ta vie est perdue !",
          description: `Échange ses PV avec un ennemi. Si la cible est un Boss, rétablit totalement les PV MAX détruits de ce Champion et soigne totalement ce Champion. 

Chaque fois que cette compétence est utilisée, augmente l'effet Ignorer la DÉF de ce Champion de 10 % lorsqu'il se trouve sous sa Forme alternative (s'accumule jusqu'à 50 %). 

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme de base. 

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Dégénérateur [P]",
          description: `${PASSIVE}

Lorsque ce Champion meurt, renvoie des dégâts équivalents à 50 % du coup fatal sur l'assaillant, dont les dégâts en surplus éventuels.

Dès qu'un ennemi est tué, place une pile de ${DEBUFFS.NECROSIS} sur tous les autres ennemis. Il est impossible de résister aux piles de ${DEBUFFS.NECROSIS} et de les bloquer. Les piles de ${DEBUFFS.NECROSIS} ne peuvent être retirées qu'en ranimant des alliés morts. Cet effet ne s'applique pas contre les Boss et leurs sbires.

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort. 

${ACTIVE}

Si ce Champion est sur le point d'être tué par un coup fatal, anticipe ce coup et lui accorde instantanément un buff ${BUFFS.REVIVE_ON_DEATH} d'1 tour avant que les dégâts ne soient subis.`,
          cooldown: 5,
          isPassive: true
        }
      ],
    stats: {
        "PV": "24 615",
        "ATQ": "991",
        "DEF": "1 222",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
