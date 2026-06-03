const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Échine de haine",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Répétera l'attaque contre l'ennemi qui a le Compteur de Tour le plus élevé si la cible initiale se trouve sous débuff ${DEBUFFS.LEECH}.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Acier incarnat",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.STUN} pendant 1 tour et réduit de 50% le Compteur de Tour de tous les ennemis. Les cibles dont l'ATQ est inférieure à celle de cette Championne ne peuvent pas résister à ces effets.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hémaelstrom",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs des ennemis. Les cibles dont l'ATQ est inférieure à celle de cette Championne ne peuvent pas résister à cet effet.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.LEECH} et un débuff ${DEBUFFS.ATK} de 50% sur tous les ennemis pendant 2 tours. Les cibles dont l'ATQ est inférieure à celle de cette Championne ne peuvent pas résister à ces débuffs.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe [P]",
          description: `Fait passer cette Championne à sa Forme alternative dès qu'elle est ranimée par une compétence, un effet ou un buff ${BUFFS.REVIVE_ON_DEATH}.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Moteur de meurtre [P]",
          description: `Dès qu'un ennemi voit son Compteur de Tour rempli, cette Championne inflige des dégâts bruts à cet ennemi, équivalents à 3% de ses PV MAX, par tranche de 10% de Compteur de Tour rempli. Infligera au lieu de cela 6% de ses PV MAX en dégâts bruts si l'ennemi se trouve sous débuff ${DEBUFFS.LEECH}. Ces dégâts ne peuvent pas être critiques et ignoreront les buffs ${BUFFS.STONE_SKIN}, ${BUFFS.ALLY_PROTECT}, ${BUFFS.SHIELD}, ${BUFFS.STRENGTHEN} et ${BUFFS.FERVEUR}, les piles d'${BUFFS.BONE_ARMOR}, ainsi que les compétences ou effets qui modifient les dégâts. Si l'ennemi est un Boss, les dégâts ne peuvent pas dépasser 50 000 PV par frappe.${RETURN}${RETURN}

Dès qu'un ennemi voit son Compteur de Tour rempli, détruit également 3 points de sa VIT par tranche de 10% de Compteur de Tour rempli (s'accumule jusqu'à 100). Détruira au lieu de cela 6 points de VIT par tranche de 10% de Compteur de Tour rempli si l'ennemi se trouve sous débuff ${DEBUFFS.LEECH}. Cet effet ne fonctionne pas contre les Boss.${RETURN}${RETURN}

Ranime cette Championne avec 100% de PV pendant 2 tours si au moins un allié est en vie. Une fois par Manche, ranime instantanément cette Championne avec 100% de PV si tous les alliés sont morts.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 165",
        "ATQ": "1 487",
        "DEF": "1 156",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Aiguille de terreur",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Ignorera 10% de la DÉF de la cible. Ignorera au lieu de cela 20% de la DÉF de la cible si l'ATQ de la cible est inférieure à celle de cette Championne.${RETURN}${RETURN}

Les dégâts infligés par cette compétence augmentent de 5% pour chaque débuff sur la cible.`,
          damage: "ATQ*(0.5*SPD/100)",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Épées dentelées",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Ignorera 50% de la DÉF de la cible. Ignorera au lieu de cela 100% de la DÉF de la cible si l'ATQ de la cible est inférieure à celle de cette Championne.${RETURN}${RETURN}

Ignorera également les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE} si la cible se trouve sous débuff ${DEBUFFS.HEALS}.${RETURN}${RETURN}

Si cette compétence tue un ennemi, soigne cette Championne de 100% de ses PV MAX et répétera l'attaque sur une cible aléatoire qui se trouve sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}. Se produit une fois par compétence.`,
          damage: "ATQ*(0.75*SPD/100)",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Un millier d'ailes",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.HEALS} de 100% et un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 2 tours. Ignorera les buffs ${BUFFS.BLOCK_DEBUFFS}. Les cibles dont l'ATQ est inférieure à celle de cette Championne ne peuvent pas résister à ces débuffs.${RETURN}${RETURN}

Ignorera également 20% de la DÉF de chaque cible si l'ATQ de la cible est inférieure à celle de cette Championne.`,
          damage: "ATQ*(1+SPD/100)",
          cooldown: 3,
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme de base.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Alimentée par le sang [P]",
          description: `Soigne cette Championne de 1% de ses PV MAX par tranche de 1% de Compteur de Tour rempli par les ennemis. Soignera au lieu de cela cette Championne de 2% de ses PV MAX par tranche de 1% de Compteur de Tour rempli par les ennemis si l'ATQ de cette Championne est plus élevée que celle de l'ennemi.${RETURN}${RETURN}

Augmente la VIT de cette Championne de 3 points par tranche de 1% de Compteur de Tour rempli par les ennemis (s'accumule jusqu'à 100). Augmentera au lieu de cela la VIT de cette Championne de 6 points par tranche de 1% de Compteur de Tour rempli par les ennemis si l'ATQ de cette Championne est plus élevée que celle de l'ennemi.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "15 690",
        "ATQ": "1 905",
        "DEF": "903",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
