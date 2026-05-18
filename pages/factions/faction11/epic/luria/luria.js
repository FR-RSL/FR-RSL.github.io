const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Epee Maudite",
          description: `Attaque un ennemi. Possede 50% de chances de placer un aleatoirement un debuff ${DEBUFFS.DEF} de 60%, un debuff ${DEBUFFS.HEALS} de 100% ou un debuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "3.55*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Marque de Peur",
          description: `Attaque tous les ennemis. Possede 50% de chances de placer un debuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.BLOCK_REA} sur les cibles tuees.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Sortilege",
          description: `Attaque un ennemi. Retire tous les buffs de la cible. Possede 80% de chances de placer un debuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "5.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        }
  ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 487",
        "DEF": "947",
        "VIT": "104",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = null;
