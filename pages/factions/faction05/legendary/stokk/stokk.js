const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flasques de ruine",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 25 % de chances d'augmenter d'1 tour la durée des débuffs ${DEBUFFS.POISON} et ${DEBUFFS.BURN} sur la cible.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mélange volatil",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

La première frappe active instantanément un déclenchement de tous les débuffs ${DEBUFFS.POISON} et ${DEBUFFS.BURN} sur tous les ennemis, et un déclenchement de tous les buffs ${BUFFS.HEALS} sur tous les alliés.${RETURN}${RETURN}

La seconde frappe a 75 % de chances de détruire les PV MAX de chaque cible de 3 % pour chaque débuff ${DEBUFFS.POISON} et ${DEBUFFS.BURN} activé sur elle par cette compétence (s'accumule jusqu'à 60 %).${RETURN}${RETURN}

Ensuite, remplit le Compteur de Tour de tous les alliés de 20 %.`,
          damage: "2.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crue de feu-vengeur",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 80 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours. Si une cible se trouve sous débuff ${DEBUFFS.BURN}, lui inflige au lieu de ça trois débuffs ${DEBUFFS.POISON} de 5 % et un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.${RETURN}${RETURN}

Place également deux buffs ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          damage: "4.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Truqué pour exploser [P]",
          description: `Les dégâts infligés par les débuffs ${DEBUFFS.POISON} et ${DEBUFFS.BURN} ignoreront les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}.${RETURN}${RETURN}

Dès que des alliés attaquent des ennemis dont les PV MAX ont été détruits, augmente les dégâts infligés de 10 %.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 079",
        "DEF": "1 156",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
