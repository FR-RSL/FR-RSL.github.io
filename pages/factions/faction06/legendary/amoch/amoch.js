const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Secrets de satrape",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 100 % de chances de voler un buff aléatoire à la cible. A également 50 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "5.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Savoir de Descendants",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.RES} de 50 %, un débuff ${DEBUFFS.PAIN_LINK} et un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Ces débuffs sont protégés lorsqu'ils sont placés sur des Boss.${RETURN}${RETURN}

Soigne tous tes alliés à hauteur de 5 % des PV MAX de cette Championne pour chaque débuff placé.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gardienne de l'héritage",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Soigne tous les alliés à hauteur de 15 % des PV MAX de cette Championne. Soigne chaque allié de 3 % supplémentaires pour chaque débuff dont il est affligé.${RETURN}${RETURN}
 
Retire les débuffs affectant négativement les stats des alliés et les remplace par leur buff miroir équivalent. Par exemple, ${DEBUFFS.ATK} sera remplacé par ${BUFFS.ATK}. Les débuffs tels que ${DEBUFFS.BLOCK_BUFFS}, ${DEBUFFS.HEALS} et ${DEBUFFS.WEAKEN} seront remplacés, respectivement, par des buffs ${BUFFS.BLOCK_DEBUFFS}, ${BUFFS.HEALS} et ${BUFFS.STRENGTHEN}.${RETURN}${RETURN}

Ne convertit pas les débuffs ${DEBUFFS.CRATE} et ${DEBUFFS.CDAM} en buffs ${BUFFS.CRATE} et ${BUFFS.CDAM}, respectivement.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Caste résiliente [P]",
          description: `Augmente les PV MAX de cette Championne de 10 % dès qu'elle se soigne à l'aide d'une compétence (s'accumule jusqu'à 50 %).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "870",
        "DEF": "1 266",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 28%`,
};
