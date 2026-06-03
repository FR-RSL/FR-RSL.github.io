const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupeur de chitine",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 75 % de chances de voler un buff aléatoire à la cible. Il est impossible de résister à cet effet et de le bloquer.`,
          damage: "3.8*ATQ",
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +15%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Multitude affamée",
          description: `Attaque un ennemi. Accorde un Tour supplémentaire si cette attaque tue un ennemi.${RETURN}${RETURN}

Si la cible initiale survit, place une frappe supplémentaire sur tous les ennemis.`,
          damage: "6*ATQ | 4*ATQ (Zone)",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Festin insectoïde",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Les dégâts infligés par cette compétence augmentent de 10 % chaque fois qu'un ennemi reçoit un débuff. L'augmentation des dégâts se réinitialise chaque fois que cette compétence est utilisée.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          factions: [
            `Chaque fois qu'un ennemi est tue par cette competence, augmente de maniere permanente l'ATQ de ce Champion de 30% (s'accumule jusqu'a 120%).`,
            `Si la cible est tuee par cette competence, reinitialise le temps de recharge de cette competence et remplit le Compteur de Tour de ce Champion de 50%.`,
            `Possede 50% de chances d'attaquer un ennemi avec competence des que l'ennemi essaie de placer un buff. Peut se produire une fois par competence.`
          ],
        },
        {
          img: "assets/sort4.webp",
          name: "Conducteur de nuée [P]",
          description: `Ignorera 12 % de la DÉF de chaque cible si elle ne dispose d'aucun buff actif.`,
          factions: [
            `Les allies recoivent 15% de degats en moins de la part des ennemis qui ont des buffs.${RETURN}
Les allies recoivent 30% de degats en moins de la part des ennemis qui n'ont aucun buff.`,
            `Lorsque ce Champion ou un allie retire ou vole un buff a un ennemi, la competence suivante de ce Champion infligera 50% de degats en plus.`,
            `Au debut de chaque manche, place un debuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 1 tour. Il est impossible de resister a ce debuff.`
          ],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 575",
        "DEF": "1 068",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/sup-speed.webp",
  description: `Augmente la statistique VIT des Allies lors de toutes les Batailles de 19%.${RETURN}${RETURN}
Augmente la statistique PRE des Allies lors de toutes les Batailles de 60 (ne s'applique qu'a la Faction des Elfes Noirs).`
};
