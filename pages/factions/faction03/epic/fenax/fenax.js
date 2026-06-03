const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Euthanasie",
          description: `Attaque un ennemi. Place une frappe supplémentaire si la cible est affligée d'un débuff. Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "4.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Partenaire Austère",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Place un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour si la Compétence ne place pas un débuff ${DEBUFFS.BLOCK_BUFFS}.${RETURN}${RETURN}

[Réduit d'1 tour le compte à rebours de détonation du débuff ${DEBUFFS.BOMB} lorsque Tallia se trouve dans la même équipe.]`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Semer la Faiblesse",
          description: `Attaque un ennemi. Possède 60% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% et un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "6.7*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 454",
        "DEF": "925",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
