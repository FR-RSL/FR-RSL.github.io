const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Toucher de l'Elue",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Place un buff ${BUFFS.HEALS} de 15% sur ce Champion pendant 1 tour si cette attaque passe en critique.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Compagnons du Destin",
          description: `Fais equipe avec 3 allies pris au hasard pour attaquer un seul ennemi. Les allies rejoignant l'attaque utilisent leurs competences par defaut.${RETURN}${RETURN}
Remplit de 30% le Compteur de Tour de tous les allies. Augmente d'1 tour la duree de tous les buffs allies.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Banniere Legendaire",
          description: `Place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.ATK} de 50% sur tous les allies pendant 2 tours.${RETURN}
Possede 25% de chances d'accorder un Tour Supplementaire.`,
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
