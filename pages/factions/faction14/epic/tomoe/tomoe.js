const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Planter et attraper",
          description: `Attaque un ennemi. Possède 30 % de chances de voler un buff aléatoire à la cible.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Embobiner",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Complicité totale",
          description: `Place un buff ${BUFFS.COUNTER} sur une cible alliée pendant 2 tours. Si l'allié appartient à la Faction du Clan de l'Ombre, place un buff ${BUFFS.COUNTER} pendant 3 tours.${RETURN}${RETURN}

Remplit le Compteur de tour de tous les alliés de 15 % et place un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.CRATE} de 30 % pendant 2 tours sur les alliés de la Faction du Clan de l'Ombre.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frères et surs [P]",
          description: `Augmente tous les soins et effets de remplissage du Compteur de Tour de 20 % lorsqu'elle est utilisée sur des alliés de la Faction du Clan de l'Ombre. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 024",
        "DEF": "1 200",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 24%`,
};
