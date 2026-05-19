const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Echine de Haine",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Repetera l'attaque contre l'ennemi qui a le Compteur de Tour le plus eleve si la cible initiale se trouve sous debuff ${DEBUFFS.LEECH}.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +20%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Acier incarnat",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.STUN} pendant 1 tour et reduit de 50% le Compteur de Tour de tous les ennemis. Les cibles dont l'ATQ est inferieure a celle de cette Championne ne peuvent pas resister a ces effets.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Hemalestrom",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs des ennemis. Les cibles dont l'ATQ est inferieure a celle de cette Championne ne peuvent pas resister a cet effet.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.LEECH} et un debuff ${DEBUFFS.ATK} de 50% sur tous les ennemis pendant 2 tours. Les cibles dont l'ATQ est inferieure a celle de cette Championne ne peuvent pas resister a ces debuffs.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Metamorphe [P]",
          description: `Fait passer cette Championne a sa Forme alternative des qu'elle est ranime par une competence, un effet ou un buff ${BUFFS.REVIVE_ON_DEATH}.${RETURN}${RETURN}
Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: true,
        },
        {
          img: "assets/sort5.webp",
          name: "Moteur de meurtre [P]",
          description: `Des qu'un ennemi voit son Compteur de Tour rempli, cette Championne inflige des degats bruts a cet ennemi, equivalent a 3% de ses PV MAX, par tranche de 10% de Compteur de Tour rempli.${RETURN}
Infligera au lieu de cela 6% de ses PV MAX en degats bruts si l'ennemi se trouve sous debuff ${DEBUFFS.LEECH}.${RETURN}
Ces degats ne peuvent pas etre critiques et ignoreront les buffs ${BUFFS.STONE_SKIN}, ${BUFFS.ALLY_PROTECT}, ${BUFFS.SHIELD}, ${BUFFS.STRENGTHEN} et ${BUFFS.FERVEUR}, les piles d'${BUFFS.BONE_ARMOR}, ainsi que les competences ou effets qui modifient les degats.${RETURN}
Si l'ennemi est un Boss, les degats ne peuvent pas depasser 50 000 PV par frappe.${RETURN}${RETURN}
Des qu'un ennemi voit son Compteur de Tour rempli, detruit egalement 3 points de sa VIT par tranche de 10% de Compteur de Tour rempli (s'accumule jusqu'a 100).${RETURN}
Detruira au lieu de cela 6 points de VIT par tranche de 10% de Compteur de Tour rempli si l'ennemi se trouve sous debuff ${DEBUFFS.LEECH}. Cet effet ne fonctionne pas contre les Boss.${RETURN}${RETURN}
Ranime cette Championne avec 100% de PV tout les 2 tours si au moins un allie est en vie. Une fois par Manche, ranime instantanément cette Championne avec 100% de PV si tous les allies sont morts.`,
          isPassive: true,
        }
    ],
    stats: {
          "PV": "18 165",
          "ATQ": "1 487",
          "DEF": "1 156",
          "VIT": "110",
          "TAUX C.": "15%",
          "DEG C.": "63%",
          "RES": "30",
          "PRE": "0"
    }
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort_f2_1.webp",
          name: "Aiguille de terreur",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Ignorera 10% de la DEF de la cible. Ignorera au lieu de cela 20% de la DEF de la cible si l'ATQ de la cible est inferieure a celle de cette Championne.${RETURN}${RETURN}
Les degats infliges par cette competence augmentent de 5% pour chaque debuff sur la cible.`,
          damage: "ATQ*(0.5*VIT/100)",
          levelInfo: ["Dégâts +20%"],
        },
        {
          img: "assets/sort_f2_2.webp",
          name: "Epees dentelees",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Ignorera 50% de la DEF de la cible. Ignorera au lieu de cela 100% de la DEF de la cible si l'ATQ de la cible est inferieure a celle de cette Championne.${RETURN}${RETURN}
Ignorera egalement les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE} si la cible se trouve sous debuff ${DEBUFFS.HEALS}.${RETURN}${RETURN}
Si cette competence tue un ennemi, soigne cette Championne de 100% de ses PV MAX et repetera l'attaque sur une cible aleatoire qui se trouve sous debuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}. Se produit une fois par competence.`,
          damage: "ATQ*(0.75*VIT/100)",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort_f2_3.webp",
          name: "Un millier d'ailes",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.HEALS} de 100% et un debuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 2 tours. Ignorera les buffs ${BUFFS.BLOCK_DEBUFFS}. Les cibles dont l'ATQ est inferieure a celle de cette Championne ne peuvent pas resister a ces debuffs.${RETURN}${RETURN}
Ignorera egalement 20% de la DEF de chaque cible si l'ATQ de la cible est inferieure a celle de cette Championne.`,
          damage: "ATQ*(1+VIT/100)",
          cooldown: 3,
          levelInfo: ["Dégâts +20%"],
        },
        {
          img: "assets/sort_f2_4.webp",
          name: "Metamorphe",
          description: `Fait passer cette Championne a sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
        },
        {
          img: "assets/sort_f2_5.webp",
          name: "Alimentee par le sang [P]",
          description: `Soigne cette Championne de 1% de ses PV MAX par tranche de 1% de Compteur de Tour rempli par les ennemis. Soignera au lieu de cela cette Championne de 2% de ses PV MAX par tranche de 1% de Compteur de Tour rempli par les ennemis si l'ATQ de cette Championne est plus elevee que celle de l'ennemi.${RETURN}${RETURN}
Augmente la VIT de cette Championne de 3 points par tranche de par tranche de 1% de Compteur de Tour rempli par les ennemis (s'accumule jusqu'a 100). Augmentera au lieu de cela la VIT de cette Championne de 6 points par tranche de 1% de Compteur de Tour rempli par les ennemis si l'ATQ de cette Championne est plus elevee que celle de l'ennemi.`,
          isPassive: true,
        }
    ],
    stats: {
          "PV": "15 690",
          "ATQ": "1 905",
          "DEF": "903",
          "VIT": "110",
          "TAUX C.": "15%",
          "DEG C.": "63%",
          "RES": "30",
          "PRE": "0"
    }
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%.`
};
