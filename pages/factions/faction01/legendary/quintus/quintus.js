const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rappel",
          description: `Attaque un ennemi. Place une frappe supplémentaire si la cible ne possède pas de buff. Si cette attaque passe en critique, répète une fois l'attaque.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Enlever",
          description: `Attaque un ennemi. Retire tous les buffs, puis place un débuff ${DEBUFFS.DEF} de 60 % sur la cible pendant 2 tours avant d'attaquer. Il est impossible de résister à ces effets ou de les bloquer.${RETURN}${RETURN}

Les dégâts infligés par cette compétence ne peuvent pas être réduits par les Compétences Passives ni les Maîtrises des ennemis, sauf les Compétences Passives des Boss. Les dégâts infligés par cette compétence ne peuvent pas non plus être augmentés par les Maîtrises de ce Champion ni les compétences Passives des alliés, sauf lors d'attaques sur les Boss.${RETURN}${RETURN}

Réinitialise le compteur de tour de la compétence [Favori du public] si cette attaque tue un ennemi.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Favori du public",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 3 tours.${RETURN}${RETURN}

Réinitialise le compteur de tour de la compétence [Enlever] si cette attaque tue un ennemi.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Percussion [P]",
          description: `Chacune des compétences de ce Champion inflige des dégâts bruts supplémentaires. La quantité de dégâts bruts infligés est équivalente à 10 % des PV MAX de la cible pour chaque buff qu'elle possède. Les dégâts bruts supplémentaires infligés ignoreront les buffs ${BUFFS.SHIELD}.`,
          damage: "(0.1*Target Buffs)*Target HP",
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 608",
        "DEF": "969",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 35%`,
};
