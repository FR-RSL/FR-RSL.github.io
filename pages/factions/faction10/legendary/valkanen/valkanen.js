const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faux d'effroi",
          description: `Attaque un ennemi. Cette attaque ignore les buffs ${BUFFS.SHIELD}. 

Possède 60 % de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible. 

Possède également 80 % de chances d'appliquer un effet de [Propagation de Débuffs] qui prend 2 débuffs aléatoires de la cible pour les placer sur tous les ennemis sous débuff ${DEBUFFS.HEX}.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction de lames",
          description: `Attaque tous les ennemis. Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique plutôt que des dégâts de zone.

Avant d'attaquer, possède 80 % de chances de placer un débuff ${DEBUFFS.HEX} sur tous les ennemis pendant 2 tours. Ignorera 20 % de la RÉS de chaque ennemi pour chaque allié mort. 

Les dégâts de cette compétence augmentent de 10 % pour chaque débuff dont est affligé chaque ennemi.`,
          damage: "4.2*ATQ+((4.2*ATQ)*0.1*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Négociation de la mort",
          description: `Cible un allié.

Si l'allié est en vie, le tue et débloque une compétence secrète, Déchaînement de malice. Place également un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours et un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour sur tous les ennemis. Il est impossible de résister à ces débuffs ou de les bloquer. Ensuite, remplit le Compteur de Tour de ce Champion de 75 %. 

Si l'allié est mort, soigne ce Champion de 50 % des PV MAX de l'allié mort. Si tous les alliés sont morts, débloque également une compétence secrète, Déchaînement de malice. Place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à tout surplus de soin. Si ce Champion possède déjà un buff ${BUFFS.SHIELD}, la valeur du ${BUFFS.SHIELD} est augmentée de tout surplus de soin. Ensuite, remplit le Compteur de Tour de ce Champion de 75 %.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Déchaînement de malice",
          description: `Attaque un ennemi.

Avant d'attaquer, vole tous les buffs de la cible. Il est impossible de résister à cet effet. 

Si la cible possède une ATQ supérieure ou égale à celle de ce Champion, cette attaque gagne un multiplicateur de dégâts bonus égal à l'ATQ de la cible. Non applicable aux Boss. 

Si l'ATQ de la cible est inférieure à celle de ce Champion, cette attaque ignorera 50 % de la DÉF de la cible.

Cette attaque ignorera également les buffs ${BUFFS.BLOCK_DAMAGE}, ${BUFFS.UNKILLABLE}, ${BUFFS.SHIELD} et ${BUFFS.ALLY_PROTECT}. Place un débuff ${DEBUFFS.BLOCK_REA} si la cible est tuée.`,
          damage: "(If Boss*(7.5*ATQ))+((TRG_ATQ>=ATQ)*(!If Boss*7.5*(ATQ+TRG_ATQ)))+((TRG_ATQ<ATQ)*(!If Boss*(7.5*ATQ)))",
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rempart fantôme [P]",
          description: `${ACTIVE} 

Place un buff ${BUFFS.SHIELD} sur ce Champion chaque fois qu'un allié ou qu'un Champion ennemi meurt. La valeur du ${BUFFS.SHIELD} est égale à 50 % des PV MAX du Champion mort. Il est impossible de retirer, de voler ou de transférer ce buff ${BUFFS.SHIELD}. 

Si ce Champion se trouve déjà sous buff ${BUFFS.SHIELD}, la valeur du ${BUFFS.SHIELD} est augmentée de 50 % des PV MAX du Champion mort. Ne s'active pas quand un Boss ou un sbire meurt. 

${PASSIVE} 

Lorsqu'un ennemi frappe ce Champion alors qu'il se trouve sous buff ${BUFFS.SHIELD}, place un débuff aléatoire sur l'ennemi qui attaque. Les débuffs ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.SLEEP} et ${DEBUFFS.STUN} sont placés pendant 1 tour. Tous les autres débuffs sont placés pendant 2 tours. Ignorera 20 % de la RÉS ennemie pour chaque allié mort. 

Ne peut pas placer des débuffs exclusifs à un Boss ni des débuffs ${DEBUFFS.SHEEP} ou ${DEBUFFS.METEOR}.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 531",
        "DEF": "1 057",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 30%`,
};
