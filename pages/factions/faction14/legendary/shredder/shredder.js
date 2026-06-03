const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rage de Saki",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

La deuxième et la troisième frappe de cette compétence ignoreront 5 % et 10 % de la DÉF de la cible, respectivement. La deuxième et la troisième frappe de cette compétence infligeront 10 % et 20 % supplémentaires des DÉG C., respectivement.`,
          damage: "0.1*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ombre de shinobi",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

Chaque frappe critique détruit la DÉF de l'ennemi de 5 % (s'accumule jusqu'à 30 %). Chaque frappe critique augmente également les PV MAX de ce Champion de 5 % (s'accumule jusqu'à 30 %).${RETURN}${RETURN}

Chaque frappe a 75 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours. Il est impossible de résister à ce débuff si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "0.16*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "C'est le vrai ninjutsu !",
          description: `Attaque tous les ennemis. Avant d'attaquer, vole tous les buffs à une seule cible ennemie. Il est impossible de résister à cet effet si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}. Remplit le Compteur de Tour de ce Champion de 15 % pour chaque buff volé.${RETURN}${RETURN}

Ignorera 15 % de la DÉF de chaque ennemi, ainsi que les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}. Si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, ignorera au lieu de ça 30 % de la DÉF de chaque ennemi.`,
          damage: "0.27*PV",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tyran dimensionnel [P]",
          description: `${PASSIVE}

Réduit tous les dégâts en approche de 30 %. Ces dégâts sont divisés également entre tous les alliés, sauf ce Champion.${RETURN}${RETURN}

Augmente les dégâts infligés par ce Champion de 15 % pour chaque allié mort.${RETURN}${RETURN}

${ACTIVE}

Dès que ce Champion perd 20 % de ses PV MAX lors d'une attaque, a 100 % de chances d'Esquiver l'attaque suivante. Dès que cet effet Esquive garanti s'active, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours et a 50 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour. Il est impossible de résister au débuff ${DEBUFFS.TRUE_FEAR}.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 130",
        "ATQ": "914",
        "DEF": "1 123",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
