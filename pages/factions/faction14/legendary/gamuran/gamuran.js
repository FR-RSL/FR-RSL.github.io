const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Parchemin scellé",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 30 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Voleur de Sang",
          description: `Attaque tous les ennemis. Possède 80 % de chances de voler tous les buffs de chaque ennemi.${RETURN}${RETURN}

Après le vol, applique un effet [Propagation de Buff], prenant tous les buffs sur ce Champion pour les placer sur tous les alliés.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Invocation de Terreur",
          description: `Peut cibler les ennemis morts ou vivants.${RETURN}${RETURN}

Si la cible est morte, lui place un ${DEBUFFS.BLOCK_REA}, puis attaque tous les ennemis. Chaque ennemi recevra des dégâts équivalents à 20 % des PV MAX de l'ennemi ciblé. Si la cible est un sbire de Boss, les dégâts seront équivalents à 20 % des PV MAX de ce Champion. Cette attaque ne peut pas passer en critique et ignorera tous les buffs ${BUFFS.SHIELD}, ainsi que 100 % de la DÉF de chaque cible.${RETURN}${RETURN}

Si la cible est vivante, lui place un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours, puis soigne tous les alliés de 20 % des PV MAX de l'ennemi ciblé. Si la cible est un Boss ou un sbire de Boss, les dégâts seront équivalents à 20 % des PV MAX de ce Champion. Il est impossible de résister au débuff ${DEBUFFS.TRUE_FEAR}.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Charge d'Âme [P]",
          description: `Ranime 1 allié aléatoire avec 30 % de PV et 30 % de Compteur de Tour chaque fois qu'un ennemi est tué.${RETURN}${RETURN}

Ranime 1 allié aléatoire avec 30 % de PV et 30 % de Compteur de Tour chaque fois qu'un débuff ${DEBUFFS.BLOCK_REA} est placé sur un ennemi.`,
          cooldown: 2,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 002",
        "DEF": "1 266",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
