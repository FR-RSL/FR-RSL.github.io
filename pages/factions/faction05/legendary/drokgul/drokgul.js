const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rocher Brise-os",
          description: `Attaque un ennemi. Offre 20 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sol Mystérieux",
          description: `Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour sur les alliés ayant moins de 30 % de PV.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction Runique",
          description: `${ACTIVE}

Place un buff ${BUFFS.SHIELD} équivalent à 15 % des PV MAX de ce Champion sur tous les alliés pendant 3 tours.${RETURN}${RETURN}

${PASSIVE}

Soigne chaque allié de 15 % des PV MAX de ce Champion dès qu'un buff ${BUFFS.SHIELD} placé par cette Compétence expire, est retiré ou est brisé par une attaque ennemie. Les alliés dont le buff ${BUFFS.SHIELD} est brisé contre-attaqueront également l'ennemi ayant brisé le ${BUFFS.SHIELD}. Lorsqu'un ${BUFFS.SHIELD} est brisé, le soin survient instantanément avant que tout dégât restant de l'attaque du briseur de Bouclier soit reçu.`,
          cooldown: 5,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "991",
        "DEF": "1 057",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
