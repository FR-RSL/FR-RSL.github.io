const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entaille scintillante",
          description: `Attaque un ennemi. A 50% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour. Applique également un effet de ${PROP_DEBUFF}, qui prend tous les débuffs de la cible pour les placer sur tous les ennemis sous débuff ${DEBUFFS.GEL}.`,
          damage: "3.2*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Souffle de Givre",
          description: `Attaque tous les ennemis. Vole tous les buffs dont bénéficient tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "3.3*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hiver éternel",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

A 75% de chances de placer un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 15%. Remplit le Compteur de Tour de chaque allié de 5% supplémentaires pour chaque débuff ${DEBUFFS.GEL} placé par cette compétence.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Intemporel [P]",
          description: `Les compétences de cette Championne ne peuvent pas être placées en temps de recharge.${RETURN}${RETURN}

Dès qu'un ennemi essaie de placer les compétences de cette Championne ou celles d'un allié en temps de recharge, place un débuff ${DEBUFFS.GEL} sur cet ennemi. Il est impossible de bloquer le débuff ${DEBUFFS.GEL} et d'y résister.${RETURN}${RETURN}

A également 50% de chances d'annuler l'effet d'augmentation du temps de recharge. Ces chances augmentent de 25% pour chaque ennemi sous débuff ${DEBUFFS.GEL}. N'annulera pas les effets d'augmentation du temps de recharge des Boss.${RETURN}${RETURN}

Dès qu'un ennemi essaie de placer les compétences de cette Championne ou celles d'un allié en temps de recharge, place un effet ${INSTANT} sur cette Championne. Se produit une fois par tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "826",
        "DEF": "1 509",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
