const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pluie de lances",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 15% de chances de placer un débuff ${DEBUFFS.CRATE} de 30% pendant 2 tours.${RETURN}${RETURN}

Si les PV de ce Champion sont pleins, les chances passent à 30%.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bannière de ralliement",
          description: `Place un buff ${BUFFS.TAUNT} sur une cible alliée pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.REFLECT_DAM} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Médecin de terrain",
          description: `Réduit d'1 tour la durée de 2 débuffs aléatoires sur tous les alliés. Ensuite, soigne tous les alliés à hauteur de 5% de leurs PV MAX.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "969",
        "DEF": "1 189",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
