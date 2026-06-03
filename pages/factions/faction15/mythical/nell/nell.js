const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Capture",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Vole 10% du Compteur de Tour de la cible. Vole 5% de Compteur de Tour supplémentaires pour chaque débuff sur l'ennemi.${RETURN}${RETURN}

Possède également 75% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour.`,
          damage: "5*ATQ",
          levelInfo: ["Ignorer la RES +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Musc soporifique",
          description: `Vole tous les buffs dont bénéficient tous les ennemis.${RETURN}${RETURN}

Réduit le Compteur de Tour de chaque cible de 10%. Réduit le Compteur de Tour de chaque cible de 5% supplémentaires pour chaque débuff dont elle est affligée.${RETURN}${RETURN}

Active également instantanément un déclenchement de tous les débuffs ${DEBUFFS.POISON} sur tous les ennemis.${RETURN}${RETURN}

Place ensuite un débuff ${DEBUFFS.SLEEP} pendant 1 tour sur tous les ennemis sans débuff ${DEBUFFS.POISON}.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Faucille de corruption",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.WEAKEN} de 25% sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 20%.`,
          damage: "5.2*ATQ",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Buffet de Dents-noires [P]",
          description: `Dès qu'un ennemi reçoit un buff, est soigné ou voit son Compteur de Tour augmenté grâce à une compétence, place un débuff ${DEBUFFS.POISON} de 5% sur cet ennemi pendant 2 tours. Ignorera les buffs ${BUFFS.BLOCK_DEBUFFS}.${RETURN}${RETURN}

Augmente le Compteur de Tour de cette Championne de 5% pour chaque débuff ${DEBUFFS.POISON} placé par cette compétence.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 130",
        "ATQ": "1 013",
        "DEF": "1 299",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors des les batailles d'Arène de 100`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Coupe-ventre",
          description: `Attaque 4 fois un ennemi. Chaque frappe ignorera 30% de la DÉF de la cible. Chaque frappe réduira également les PV MAX de la cible de 25% des dégâts infligés.${RETURN}${RETURN}

Si la cible n'est pas un Boss, place également un buff ${BUFFS.SHIELD} égal à 25% des PV MAX de la cible sur cette Championne.`,
          damage: "1*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Découpage",
          description: `Attaque 2 fois un ennemi. Inflige 100% de dégâts supplémentaires aux ennemis sous débuffs ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PETRIFICATION}.${RETURN}${RETURN}

Si la cible est tuée, active instantanément la compétence [Festin de terreur].`,
          damage: "(!Disable Debuff*3*ATQ)+(Disable Debuff*6*ATQ)",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Festin de terreur",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours. Les ennemis ayant 50% de PV ou moins ne peuvent pas résister à ce débuff ni le bloquer.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Faim de loup [P]",
          description: `Dès que cette Championne tue un ennemi à l'aide d'une compétence active, accorde un Tour supplémentaire à cette Championne.${RETURN}${RETURN}

Chaque débuff placé par cette Championne sous n'importe quelle Forme augmente les PV, l'ATQ et la DÉF de cette Championne de 2% (s'accumule jusqu'à 50%) et sa VIT de 2 points (s'accumule jusqu'à 50) sous sa Forme alternative.`,
          cooldown: 2,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 340",
        "ATQ": "1 542",
        "DEF": "1 156",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors des les batailles d'Arène de 100`,
  },
  },
};
