const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dû de la Faucheuse",
          description: `Attaque 2 fois un ennemi. Possède 50% de chances de placer 2 frappes supplémentaires si la cible se trouve sous débuff ${DEBUFFS.HEX}. Les chances de placer une frappe supplémentaire sont calculées individuellement par frappe.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Torturer",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.HEX} et un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Fin inexorable",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.SHIELD} si les cibles se trouvent sous débuff ${DEBUFFS.HEX}.${RETURN}${RETURN}

Place un buff ${BUFFS.UNKILLABLE} sur cette Championne pendant 1 tour si cette attaque tue un ennemi sans débuff ${DEBUFFS.HEX}. Place un buff ${BUFFS.UNKILLABLE} pendant 2 tours si cette attaque tue un ennemi sous débuff ${DEBUFFS.HEX}.`,
          damage: "4.1*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Agente de la Mort [P]",
          description: `Réinitialise le temps de recharge de la compétence [Fin inexorable] dès que cette Championne tue un ennemi sous débuff ${DEBUFFS.HEX}.${RETURN}${RETURN}

Augmente l'ATQ de cette Championne de 5% pour chaque ennemi sous débuff ${DEBUFFS.HEX}.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 487",
        "DEF": "1 068",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = null;
