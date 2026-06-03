const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Flammes de malice",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 30 % de chances d'augmenter d'1 tour la durée de tous les débuffs ennemis.${RETURN}${RETURN}

Si ce Champion est sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, les chances passent à 50 %.`,
          damage: "3.6*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Stratagème de trompeur",
          description: `Sélectionne une cible.${RETURN}${RETURN}

Si la cible est un ennemi, possède 75 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} et un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Si le Champion utilise cette compétence alors qu'il bénéficie d'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, applique également un effet de ${PROP_DEBUFF}, qui prend 2 débuffs aléatoires à la cible pour les placer sur tous les ennemis.${RETURN}${RETURN}

Si la cible est un allié ou ce Champion, le soigne de 50 % des PV MAX de ce Champion et lui accorde un buff ${BUFFS.PERFECT_VEIL} pendant 2 tours. Si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, applique également un effet de ${PROP_BUFF}, qui prend un buff aléatoire à la cible et le place sur tous les alliés.`,
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Éclair de bandit",
          description: `Possède 75 % de chances de voler tous les buffs d'une cible ennemie et 100 % de son Compteur de Tour. Il est impossible de résister à ces effets si ce champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Si le Compteur de Tour de la cible n'a pas été volé, remplit au lieu de ça les Compteurs de Tour de tous les alliés de 15 %.${RETURN}${RETURN}

Place également un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Pas brumeux [P]",
          description: `${PASSIVE}

Au début de chaque round, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour lorsque ses PV tombent sous 50 %.${RETURN}${RETURN}

Possède 15 % de chances d'Esquiver une compétence ennemie et tous les effets qui l'accompagnent. Si ce champion est sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, les chances d'Esquiver passent à 30 %.${RETURN}${RETURN}

${ACTIVE}

Si les PV de ce Champion se trouvent sous 50 % lorsqu'il se fait cibler par une compétence ennemie, possède 100 % de chances d'Esquiver cette compétence et tous les effets qui l'accompagnent. Cette Esquive garantie passe ensuite en temps de recharge.`,
		  cooldown: 4,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 155",
        ATQ: "980",
        DEF: "1 321",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 60.
    `,
  };

