const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup prévoyant",
          description: `Attaque un ennemi. Possède 40% de chances d'augmenter d'1 tour la durée de 2 buffs aléatoires sur chaque allié individuel.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup fructueux",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. Le buff ${BUFFS.SHIELD} est équivalent à 30% des PV MAX de ce Champion.${RETURN}${RETURN}

Si la cible est un Boss, ces buffs sont protégés.`,
          damage: "0.22*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Booster purificateur",
          description: `Retire tous les débuffs de tous les alliés et place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Si un Boss est présent dans le round en cours, ce buff est protégé.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Alatreon Divinity [P]",
          description: `Fills this Champion’s Turn Meter by 5% every time a debuff is placed on them. <br><br>Also heals this Champion by 5% of their MAX HP whenever a debuff placed on them expires or is removed.<br><br>Heal Multiplier: 0.05*PV`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "914",
        "DEF": "1 277",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 30%`,
};
