const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Voleuse de Coeur",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mépris flétrissant",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.RES} de 50 % pendant 2 tours.${RETURN}${RETURN}

Si la cible se trouve sous débuff ${DEBUFFS.BLOCK_BUFFS}, applique également un effet de [Propagation de Débuff], prenant tout débuff ${DEBUFFS.RES} sur la cible pour le placer sur tous les ennemis.`,
          damage: "0.35*PV",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rester à sa place",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur chaque ennemi pendant 2 tours.${RETURN}${RETURN}

Soigne tous les alliés de 5 % de leurs PV MAX pour chaque débuff ${DEBUFFS.BLOCK_BUFFS} placé par cette compétence.${RETURN}${RETURN}

Remplit le Compteur de Tour de cette Championne de 10 % pour chaque tentative de débuff ${DEBUFFS.BLOCK_BUFFS} à laquelle l'équipe ennemie a résisté ou qu'elle a bloquée.`,
          damage: "0.3*PV",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +15%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Magnifique [P]",
          description: `${PASSIVE}

Augmente la PRÉ de cette Championne de 2 par tranche de 1 000 PV qu'elle possède.${RETURN}${RETURN}

${ACTIVE}

Place un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours lorsque les PV de cette Championne tombent sous 50 %.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "1 002",
        "DEF": "1 211",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "30"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
