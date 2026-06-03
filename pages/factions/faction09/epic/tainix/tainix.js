const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Carreaux Chercheurs",
          description: `Attaque 2 fois au hasard. Soigne tous les alliés à hauteur de 3% des PV du Champion lors de chaque frappe sur des cibles affligés de débuffs ${DEBUFFS.SPD}.`,
          damage: "1.65*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Méchante Entaille",
          description: `Attaque un ennemi. Possède 50% de chances de placer sur la cible un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours. Sinon, possède 50% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours sur tous les ennemis si cette attaque passe en critique.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Incassable [P]",
          description: `Réduit de 5% les dégâts reçus par tous les alliés. Ce Champion recevra les dégâts à leur place. Si plusieurs Champions dans l'équipe disposent de cette Compétence, une seule sera activée.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 189",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 30%`,
};
