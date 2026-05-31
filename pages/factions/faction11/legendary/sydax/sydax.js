const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fendoir de chair",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 80% de chances de placer un debuff ${DEBUFFS.ATQ} de 50% et un debuff ${DEBUFFS.PAIN_LINK} pendant 2 tours.`,
          damage: "3.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bourreau brutal",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}
La premiere frappe a 75% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours. La seconde frappe a 75% de chances de placer un debuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "1.5*DEF + 0.035*PV MAX Ennemi",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Lien des asservis",
          description: `Place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.SPD} de 30% sur tous les allies pendant 2 tours. Place egalement un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les allies sauf ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Tenacite meritee [P]",
          description: `Reduit les degats recus par ce Champion de 10% pour chaque allie sous buff ${BUFFS.ALLY_PROTECT}.${RETURN}${RETURN}
Ce Champion est immunise contre les debuffs ${DEBUFFS.PAIN_LINK}, ainsi que contre les degats infliges par les buffs ${BUFFS.REFLECT_DAM} ou les effets de Renvoi de Degats passifs.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "18 825",
        "ATQ": "859",
        "DEF": "1 465",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "20"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Allies lors de toutes les Batailles de 30%.`
};
