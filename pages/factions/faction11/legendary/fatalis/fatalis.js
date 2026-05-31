const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup chargé",
          description: `Attaque un ennemi. Ignore 15 % de la DÉF de la cible si cette attaque passe en critique. 

Possède également 20 % de chances d'accorder un Tour supplémentaire.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Coup large",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.STRENGTHEN}, ${BUFFS.STONE_SKIN}, ${BUFFS.DEF} et ${BUFFS.ALLY_PROTECT}. Ignore également 15 % de la DÉF de la cible si cette attaque passe en critique. 

Réduit l'ATQ de la cible de 10 % (s'accumule jusqu'à 30 %).`,
          damage: "0.3*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Coup large puissant",
          description: `Attaque tous les ennemis. Ignore 15 % de la DÉF de la cible si cette attaque passe en critique. 

Réduit la DÉF de la cible de 5 % (s'accumule jusqu'à 30 %).`,
          damage: "0.26*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Véritable coup chargé",
          description: `Attaque un ennemi. Ignorera 50 % de la DÉF de la cible. Remplit le Compteur de Tour de ce Champion de 50 % si l'attaque passe en critique.

Les dégâts infligés par cette compétence ne peuvent pas être réduits par les Compétences Passives ou Maîtrises des ennemis, sauf les Compétences Passives des Boss. 

Les dégâts infligés par cette compétence ne peuvent pas non plus être augmentés par les Maîtrises de ce Champion ni les compétences Passives des alliés, sauf lors d'attaques sur les Boss.

C'est une compétence secrète qui devient uniquement disponible lorsque 3 des compétences de ce Champion ont été utilisées au cours d'un round.`,
          damage: "0.36*PV",
        },
        {
          img: "assets/sort5.webp",
          name: "Legende de Fatalis",
          description: `Place sur ce Champion un buff ${BUFFS.SHIELD} equivalent a 25% de ses PV MAX pendant 2 tours la la fin de son tour.${RETURN}${RETURN}
Ce Champion ne peut pas recevoir de coups critiques lorsqu'il se trouve sous un buff ${BUFFS.SHIELD} qu'il s'est accorde.`,
        }
  ],
  stats: {
        "PV": "23 130",
        "ATQ": "782",
        "DEF": "1 255",
        "VIT": "104",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Allies dans les batailles d'Arene de 35%.`
};
