const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vague d'Acier",
          description: `Attaque un ennemi. Place un buff ${BUFFS.SPD} de 30% pendant 2 tours sur ce Champion si l'attaque passe en critique. Place un buff ${BUFFS.CRATE} de 30% pendant 2 tours sur ce Champion si l'attaque ne passe pas en critique.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chasse aux Marqués",
          description: `Attaque 3 fois un ennemi. Place une frappe supplémentaire pour chaque buff ou débuff se trouvant sur la cible. Peut placer jusqu'à 3 frappes supplémentaires. Place un débuff ${DEBUFFS.BURN} de 2 tours et un débuff ${DEBUFFS.TRUE_FEAR} d'1 tour sur tous les ennemis si cette attaque place les 3 frappes supplémentaires. Vole tous les buffs de la cible après l'attaque.`,
          damage: "2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clairon de l'Ancien",
          description: `Place un buff ${BUFFS.DEF} de 60% sur ce Champion pendant 3 tours. Place un débuff ${DEBUFFS.FEAR} d'1 tour sur tous les ennemis. Place un débuff ${DEBUFFS.TRUE_FEAR} d'1 tour sur les cibles affligées de débuffs ${BUFFS.BLOCK_DAMAGE}. Place un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours sur les cibles disposant de buffs ${BUFFS.SHIELD}. Il est impossible de résister à ces débuffs. Place également un débuff ${DEBUFFS.PROVOKE} sur les Champions Légendaires pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Kingslayer [P]",
          description: `Receives 15% less damage from Legendary and Mythical Champions. <br><br>Inflicts damage equal to this Champion's ATQ when attacked by Legendary and Mythical Champions. The extra hit cannot be critical.`,
          damage: "ATQ",
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 630",
        "DEF": "870",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 30%`,
};
