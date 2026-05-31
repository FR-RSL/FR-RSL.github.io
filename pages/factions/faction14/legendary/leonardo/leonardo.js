const championData = {
  type: "Defense",
  spells: [
    {
      img: "assets/sort1.webp",
      name: "Part de New York",
      description: `Attaque 2 fois un ennemi. Lors d'une contre-attaque, répétera cette attaque sur un ennemi aléatoire. 

Ignorera 3 % de la DÉF de la cible pour chaque buff dont bénéficie ce Champion (s'accumule jusqu'à 15 %).`,
      damage: "1.7*DEF",
      levelInfo: [
        "Dégâts +5%",
        "Dégâts +5%",
        "Dégâts +10%",
      ],
    },
    {
      img: "assets/sort2.webp",
      name: "Carap-As !",
      description: `Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours et un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours. 

Place également un buff ${BUFFS.UNKILLABLE} et un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
      cooldown: 5,
      levelInfo: [
        "Temps de recharge -1",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/sort3.webp",
      name: "Tortues ensembles",
      description: `Attaque tous les ennemis. Les dégâts infligés par cette compétence augmentent de 5 % pour chaque buff sur tous les alliés et ennemis. 

Retire tous les buffs sur tous les ennemis si cette attaque tue un ennemi. Il est impossible de résister à cet effet.`,
      damage: "3.4*DEF",
      cooldown: 4,
      factions: [
        `Ignorera 15% de la DEF de la cible pour chaque <span class='gold-t'>Leonardo</span>, <span class='gold-t'>Donatello</span>, <span class='gold-t'>Michelangelo</span> et <span class='gold-t'>Raphael</span> dans l'équipe. Ne compte pas ce Champion.`,
        `Augmente les dégâts infligés par cette compétence proportionnellement aux PV manquants de ce Champion.`,
        `Active cette compétence dès que les PV d'un allié tombent sous 50%. Se produit une fois par compétence.
        Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`
      ],
      levelInfo: [
        "Dégâts +10%",
        "Dégâts +10%",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/passif1.webp",
      name: "Héros en semi-carapace [P]",
      description: `Place un buff ${BUFFS.STONE_SKIN} sur ce Champion pendant 1 tour à chaque fois que des frappes d'ennemis font passer ses PV sous 50 %. Se produit une fois par compétence. 

Dès que Leonardo, Donatello, Michelangelo ou Raphael attaque, ce Champion se joint à cette attaque.`,
      isPassive: true,
    },
  ],
  stats: {
    PV: "17 670",
    ATQ: "782",
    DEF: "1 619",
    VIT: "101",
    "TAUX C.": "15%",
    "DÉG C.": "63%",
    RÉS: "40",
    PRÉ: "0",
  },
};

const aura = {
  img: "../../../../../../assets/images/auras/defence.webp",
  description: `
    Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%.
  `,
};

