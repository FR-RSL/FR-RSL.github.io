const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe de fierte",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Place une frappe supplementaire si la cible se trouve sous debuff ${DEBUFFS.DEF}.${RETURN}${RETURN}
Reduit le Compteur de Tour de la cible de 10%.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Part du superpredateur",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.BLOCK_REA} si la cible est tuee.${RETURN}${RETURN}
Remplit le Compteur de Tour de cette Championne de 30%.`,
          damage: "6.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Aspirante de Theosomi",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
Ignorera 15% de la DEF de la cible si elle est d'Affinite Esprit.${RETURN}
Ignorera 25% de la DEF de la cible si elle est d'une autre Affinite.${RETURN}${RETURN}
Active la competence <span class="grn-t">Part du superpredateur</span> sur un ennemi aleatoire dont les PV ont ete reduits de plus de 50% par cette competence. Se produit une fois par competence.`,
          damage: "3.8*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Lecons de Garde-Lion [P]",
          description: `Avant d'attaquer, a 25% de chances de retirer les debuffs ${DEBUFFS.ATK} sur cette Championne et de les remplacer par leur buff miroir equivalent.${RETURN}
A egalement 25% de chances de retirer les buffs ${BUFFS.DEF} sur les ennemis et de les remplacer par leur debuff miroir equivalent.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 321",
        "DEF": "881",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
