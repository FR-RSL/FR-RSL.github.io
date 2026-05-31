const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tourbillon de dagues",
          description: `Attaque 2 fois un ennemi. 

Chaque frappe a 50 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Si ce Champion est sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, les chances passent à 100 %. 

Ensuite, a 50 % de chances d'appliquer un effet de [Propagation de Débuffs], qui prend 1 débuff aléatoire de la cible pour le placer sur tous les ennemis. Si ce Champion est sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, les chances passent à 100 %.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "En fumée",
          description: `Attaque tous les ennemis. Ignorera 15 % de la DÉF de chaque cible. Ignorera au lieu de cela 30 % de la DÉF de la cible si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}. 

A 75 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Ce débuff ignorera les buffs ${BUFFS.BLOCK_DEBUFFS} si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vents de Bagdad",
          description: `Attaque 2 fois un ennemi. Inflige 5 % de dégâts supplémentaires pour chaque buff et débuff sur ce Champion, et 5 % de dégâts supplémentaires pour chaque buff et débuff sur la cible (s'accumule jusqu'à 100 %). 

Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 3 tours et accorde un Tour supplémentaire.`,
          damage: "3.2*ATQ+(0.05*BUFF_COUNT+0.05*DEBUFF_COUNT+0.05*REL_TRG_BUFF_COUNT+0.05*REL_TRG_DEBUFF_COUNT)",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tout est permis [P]",
          description: `Dès que les PV d'un ennemi tombent sous 25 % après qu'il a reçu des dégâts de n'importe quel Assassin, il reçoit des dégâts bonus supplémentaires proportionnels à l'ATQ de ce Champion ou cette Championne. Ces dégâts bonus ignoreront 100 % de la DÉF de la cible et ne peuvent pas être critiques.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Voleur magistral [P]",
          description: `Dès que ce Champion est attaqué, vole 1 buff aléatoire à l'assaillant et transfère 1 débuff aléatoire de ce Champion sur l'assaillant. Ces effets ignoreront [Polymorphe]. Se produit une fois par compétence. 

Ignorera au lieu de cela 25 % de la RÉS de la cible lorsque ce Champion utilise des compétences s'il se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 487",
        "DEF": "1 035",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
