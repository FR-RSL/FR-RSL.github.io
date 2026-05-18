const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Propagation de Panique",
          description: `Attaque un ennemi. Possede 20% de chances de placer un debuff ${DEBUFFS.FEAR} pendant 1 tour.${RETURN}${RETURN}
Ces chances passent a 30% si la cible est affligee d'un debuff.${RETURN}${RETURN}
Ces chances passent a 45% si la cible est affligee de 2 debuffs ou plus.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bonbons et Sorts",
          description: `Attaque tous les ennemis. Possede 40% de chances de voler 1 buff aleatoire sur chaque cible.${RETURN}${RETURN}
Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les allies pendant 2 tours en cas de vol de buff.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour sur les ennemis dont les buffs ont ete voles.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Rituel de Minuit",
          description: `Retire tous les buffs dont disposent les ennemis. Place un debuff ${DEBUFFS.ATK} de 50% et un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours sur tous les ennemis.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Grace de Sorciere [P]",
          description: `Au debut de chaque Tour, place sur cette Championne un buff ${BUFFS.SHIELD} equivalent a 10% de ses PV MAX.${RETURN}${RETURN}
Quand cette Championne se fait attaquer lorsqu'elle dispose d'un buff ${BUFFS.SHIELD}, possede 35% de chances de placer un debuff ${DEBUFFS.FEAR} sur l'assaillant pendant 1 tour.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "19 650",
        "ATQ": "826",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = null;
