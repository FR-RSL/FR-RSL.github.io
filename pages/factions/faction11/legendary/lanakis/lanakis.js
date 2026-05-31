const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toucher de l'Élue",
          description: `Attaque un ennemi. Place, pendant 1 tour, un buff de ${BUFFS.HEALS} de 15 % sur ce Champion si cette attaque passe en critique.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Compagnons du Destin",
          description: `Fais équipe avec 3 alliés pris au hasard pour attaquer un seul ennemi. Les alliés rejoignant l'attaque utilisent leurs compétences par défaut. Remplit de 30 % le Compteur de Tour de tous les alliés. Augmente d'1 tour la durée de tous les buffs alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Bannière Légendaire",
          description: `Place un buff d'${BUFFS.CRATE} de 30 % et un buff d'${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours. Possède 25 % de chances d'accorder un Tour Supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 255",
        "DEF": "980",
        "VIT": "108",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
