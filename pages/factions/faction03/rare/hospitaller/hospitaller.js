const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entaille Rapide",
          description: `Attaque un ennemi.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague de Purification",
          description: `Attaque tous les ennemis. Possède 50% de chances de retirer un buff aléatoire sur chaque cible.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prières Revigorantes",
          description: `Place une ${BUFFS.SPD} de 15% et un buff d'${BUFFS.CRATE} de 15% sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Miséricordieux ${PASSIVE}",
          description: `Ranime un allié choisi au hasard avec 25% de PV, puis lui accorde un buff de ${BUFFS.BLOCK_DAMAGE} d'1 tour dès que Harrier tue un ennemi.${RETURN}${RETURN}

[Uniquement disponible lorsque Harrier se trouve dans la même équipe.]`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 035",
        "DEF": "848",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 10%`,
};
