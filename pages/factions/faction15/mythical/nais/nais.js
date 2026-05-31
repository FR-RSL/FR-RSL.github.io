const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Perce-tout",
          description: `Attaque un ennemi. 

Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.UNKILLABLE} et ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "0.26*HP+1.2*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrage de plumes noires",
          description: `Attaque tous les ennemis. Cette attaque ne déclenchera pas de contre-attaques et ignore les buffs ${BUFFS.SHIELD}. 

Vole également 20 % du Compteur de Tour de chaque ennemi. Les ennemis avec plus de 50 % de Compteur de Tour ne peuvent pas résister à cet effet.`,
          damage: "0.3*HP+1.85*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Présage du voleur",
          description: `Attaque un ennemi. Inflige deux fois plus de dégâts aux Boss. 

Détruit les PV MAX de la cible et réduit son ATQ, sa DÉF, sa VIT, sa RÉS et sa PRÉ de 10 % lorsque cette compétence est utilisée contre elle pour la première fois. Cet effet ne fonctionne pas contre les Boss. 

Augmente également les PV MAX, l'ATQ, la DÉF, la VIT, la RÉS et la PRÉ de ce Champion de 10 % chaque fois que ce Champion réduit des stats ennemies avec cette compétence. 

Enfin, place un débuff ${DEBUFFS.BLOCK_REA} si la cible est tuée par cette compétence.`,
          damage: "(!If Boss*(0.47*HP+2.5*ATQ))+(If Boss*(0.94*HP+5*ATQ))",
          cooldown: 3,
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sauveur étincelant [P]",
          description: `Inflige 5 % de dégâts en plus par tranche de 10 % de PV que la cible a perdus.

Empêche également la mort de ce Champion et le garde vivant avec 1 PV lorsqu'il reçoit des dégâts mortels, puis le fait passer à sa Forme alternative.`,
          cooldown: 4,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 980",
        "ATQ": "1 663",
        "DEF": "859",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
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
          name: "Serres d'Être féerique",
          description: `Attaque 2 fois un ennemi. Chaque frappe soigne ce Champion de 7,5 % de ses PV MAX. 

Si les PV de ce Champion sont pleins, chaque frappe remplit au lieu de ça le Compteur de Tour de ce Champion de 15 %.`,
          damage: "0.13*HP",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Nuée de corbeaux",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.PROVOKE} pendant 1 tour si ce Champion possède plus de 50 % de PV. Il est impossible de résister à ce débuff si ce Champion possède plus de 75 % de PV. 

Si ce Champion possède 50 % de PV ou moins, place au lieu de ça un débuff ${DEBUFFS.STUN} pendant 1 tour. Il est impossible de résister à ce débuff.`,
          damage: "0.45*HP",
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Bouclier de plumes",
          description: `Retire tous les débuffs dont ce Champion est affligé. Place un certain nombre de buffs ${BUFFS.HEALS} de 15 % sur ce Champion, équivalent à la quantité de débuffs retirés par cette compétence. 

Place également un buff ${BUFFS.COUNTER} et un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 2 tours. Il est impossible de retirer, de voler et de transférer ces buffs.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Intervention féerique [P]",
          description: `Augmente les PV MAX, la DÉF, la VIT, la RÉS et la PRÉ de ce Champion de 15 % pour chaque ennemi et allié mort, dont les Boss et leurs sbires, lors d'un combat (s'accumule jusqu'à 100 %). 

Ranime également 1 allié aléatoire avec 50 % de PV et 50 % de Compteur de Tour chaque fois que ce Champion tue un ennemi.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "24 780",
        "ATQ": "881",
        "DEF": "1 321",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
