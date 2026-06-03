const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Défaite du mal",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Si Hansel le Chasseur se trouve dans la même équipe, attaque au lieu de ça tous les ennemis. Possède 25 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. Place également une frappe supplémentaire sur les ennemis bénéficiant de buffs.`,
          damage: "3.8*ATQMultiplier: 2.4*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Carreaux cherche-ombre",
          description: `Attaque 4 fois un ennemi. La première frappe ignorera 10 % de la DÉF de la cible, la deuxième ignorera 15 % de sa DÉF, la troisième ignorera 20 % de sa DÉF et la quatrième ignorera 25% de sa DÉF.${RETURN}${RETURN}

Si cette attaque tue un ennemi, réinitialise le temps de recharge de cette compétence et remplit le Compteur de Tour de cette Championne de 50 %.`,
          damage: "1.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rituel sacré",
          description: `Attaque tous les ennemis. Réduit les Compteurs de Tour de tous les ennemis de 25 %.${RETURN}${RETURN}

Si Hansel le Chasseur se trouve dans la même équipe, réduit au lieu de ça les Compteurs de Tour de tous les ennemis de 50 %. Il est impossible de résister à cet effet.${RETURN}${RETURN}

Remplit ensuite le Compteur de Tour de cette Championne de 20 % pour chaque ennemi vivant après l'attaque.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lien sororal [P]",
          description: `${PASSIVE}

Remplit le Compteur de Tour de cette Championne de 50 % dès qu'un ennemi reçoit un Tour supplémentaire.${RETURN}${RETURN}

Si Hansel le Chasseur se trouve dans la même équipe, remplit également le Compteur de Tour de 50 % dès qu'un ennemi reçoit un Tour supplémentaire.${RETURN}${RETURN}

${ACTIVE}

Si Hansel le Chasseur se trouve dans la même équipe et qu'il est tué par l'ennemi, active instantanément la compétence [Rituel sacré].`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 564",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
