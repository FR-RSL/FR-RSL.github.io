const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre de transfert",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe transfère un débuff aléatoire de cette Championne sur la cible. Remplit le Compteur de Tour de cette Championne de 5% pour chaque buff transféré.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Explosion fantôme",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75% de chances de placer un débuff ${DEBUFFS.RES} de 50% sur tous les ennemis pendant 2 tours et un débuff ${DEBUFFS.SLEEP} sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

Remplit le Compteur de Tour de cette Championne de 10% pour chaque débuff placé.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lame de purge",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Avant d'attaquer, retire tous les débuffs sur cette Championne et vole tous les buffs de la cible ennemie.${RETURN}${RETURN}

Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CDAM} de 30% sur cette Championne pendant 2 tours si cette attaque tue un ennemi. Il est impossible de retirer ces buffs.`,
          damage: "2.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sens en éveil [P]",
          description: `Immunisée contre les débuffs ${DEBUFFS.SLEEP}.${RETURN}${RETURN}

Augmente la PRÉ de cette Champion de 10 points et ses DÉG C. de 3% pour chaque buff dont l'équipe ennemie est affligée.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 553",
        "DEF": "1 046",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
