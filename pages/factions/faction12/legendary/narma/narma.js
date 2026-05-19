const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Croissant Diabolique",
          description: `Attaque un ennemi. Possede 50% de chances d'augmenter d'1 tour la duree de tous les debuffs de la cible.`,
          damage: "4.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Danse Effrayante",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 75% de chances de placer un debuff ${DEBUFFS.ATK} de 50% pendant 3 tours. A egalement 75% de chances de placer un debuff ${DEBUFFS.LEECH} sur tous les ennemis pendant 2 tours. Ensuite, active instantanement tous les debuffs ${DEBUFFS.POISON} sur tous les ennemis.${RETURN}${RETURN}
Soigne tous les allies a hauteur de 25% des PV MAX de cette Championne.`,
          damage: "6.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Transe Toxique",
          description: `Attaque un ennemi. A 75% de chances de placer trois debuffs ${DEBUFFS.POISON} de 5% et un debuff ${DEBUFFS.POISON_S} de 25% pendant 3 tours.${RETURN}${RETURN}
Si la cible initiale se trouve deja sous 3 debuffs ou plus, place au lieu de ca trois debuffs ${DEBUFFS.POISON} de 5% et un debuff ${DEBUFFS.POISON_S} de 25% sur tous les ennemis pendant 3 tours.`,
          damage: "6.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Refutation Toxique [P]",
          description: `Des qu'un allie est attaque, a 25% de chances de placer un debuff ${DEBUFFS.POISON} de 5% sur l'assaillant pendant 2 tours. Des que ce Champion est attaque, les chances passent a 50%.${RETURN}${RETURN}
Les ennemis sous debuffs ${DEBUFFS.POISON} infligent 5% de degats en moins par debuff ${DEBUFFS.POISON} sur eux (s'accumule jusqu'a 25%). Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 002",
        "DEF": "1 255",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "20"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Alliés dans les Donjons de 80.`
};
