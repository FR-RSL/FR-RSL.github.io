const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Archétype de stoïcisme",
          description: `Attaque un ennemi. Si des ennemis se trouvent sous débuff ${DEBUFFS.GEL}, les attaque également.${RETURN}${RETURN}

Réduit l'ATQ de l'ennemi de 3% dès que cette Championne frappe un ennemi avec cette compétence (s'accumule jusqu'à 30%).${RETURN}${RETURN}

Augmente également l'ATQ de cette Championne de 3% dès qu'elle frappe un ennemi avec cette compétence (s'accumule jusqu'à 30%).`,
          damage: "3.5*ATQMultiplier: 3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Froide compagnie",
          description: `Attaque tous les ennemis. Avant d'attaquer, possède 100% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.STRENGTHEN}, ${BUFFS.ALLY_PROTECT} et ${BUFFS.UNKILLABLE}, ainsi que 20% de la DÉF de la cible, sur les ennemis sous débuff ${DEBUFFS.GEL}.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "À jamais fidèle",
          description: `Place un buff ${BUFFS.ATK} de 50%, un buff ${BUFFS.CRATE} de 30%, un buff ${BUFFS.SHIELD} et un buff ${BUFFS.PRE} de 50% sur cette Championne pendant 3 tours, puis accorde un Tour supplémentaire.${RETURN}${RETURN}

La valeur du ${BUFFS.SHIELD} est proportionnelle à l'ATQ de cette Championne.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Regard glacial [P]",
          description: `Possède 15% de chances de placer un débuff ${DEBUFFS.GEL} sur les assaillants pendant 1 tour lorsqu'elle est frappée alors qu'elle dispose d'un buff ${BUFFS.SHIELD}.${RETURN}${RETURN}

Possède 35% de chances de placer un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour dès qu'un buff ${BUFFS.SHIELD} se trouvant sur cette Championne est retiré par des dégâts.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 597",
        "DEF": "903",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 35%`,
};
