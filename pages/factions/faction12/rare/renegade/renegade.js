const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Douleur Persistante",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % pendant 1 tour.`,
          damage: "1.2*ATQ+SPD",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "À bras raccourcis",
          description: `Attaque 3 fois au hasard. Offre 50 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours. Place un débuff de ${DEBUFFS.PRE} de 25 % pendant 2 tours si la cible possède des buffs actifs.`,
          damage: "1.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rituel Sacrificiel",
          description: `Réduit de 2 tours le temps de recharge de toutes les compétences des alliés. Cette compétence n'affecte pas cette Championne, ni les autres Champions qui ont cette compétence. Cette Championne recevra des dégâts équivalents à 30 % de ses PV MAX. Ceci se produira même si cela tue cette Championne. Le temps de recharge de cette compétence ne peut pas être réduit ou réinitialisé.`,
          damage: "0.3*PV",
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 046",
        "DEF": "749",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
