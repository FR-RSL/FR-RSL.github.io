const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crochet d'Ancrage",
          description: `Attaque un ennemi. Possède 15% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Les chances de placer un débuff ${DEBUFFS.STUN} augmentent de 5% pour chaque débuff se trouvant sur la cible.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Puanteur Abjecte",
          description: `Attaque tous les ennemis. Possède 85% de chances de placer un débuff ${DEBUFFS.DEF} de 30% pendant 2 tours. Possède également 25% de chances de placer un débuff ${DEBUFFS.FEAR} d'1 tour sur les ennemis souffrant de débuffs ${DEBUFFS.DEF}.`,
          damage: "3.64*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Death Feast [P]",
          description: `Heals this Champion by 15% of their MAX HP every time this Champion or an ally kills an enemy.<br><br>Heal Multiplier: 0.15*PV`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 387",
        "DEF": "738",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
