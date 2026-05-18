const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sous la peau",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 50% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Chaque frappe ignorera 50% de la RES de la cible si <span class="gold-t">Oella</span> se trouve dans la meme equipe.${RETURN}${RETURN}
Si la cible est sous buff ${BUFFS.DEF}, chaque frappe a 80% de chances de le retirer. Il est impossible de résister a cet effet.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Inversion deferlante",
          description: `Retire tous les debuffs sur ce Champion et le soigne de 20% de ses PV MAX. Soigne ce Champion de 20% supplementaires de ses PV MAX pour chaque debuff retire.${RETURN}${RETURN}
Ensuite, place un buff ${BUFFS.SHIELD} équivalent a 400% de l'ATQ de ce Champion sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} augmente également de 5% (Multiplicatif) pour chaque debuff retire.${RETURN}${RETURN}
Enfin, attaque un ennemi. Ignorera les buffs ${BUFFS.SHIELD}. Les degats augmentent de 20% pour chaque debuff retirer par cette Competence.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Spores de sommeil",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.SLEEP} et un debuff ${DEBUFFS.SPD} de 30% sur tous les ennemis pendant 2 tours. Si <span class="gold-t">Oella</span> se trouve dans la meme equipe, placera un debuff ${DEBUFFS.STUN} au lieu d'un debuff ${DEBUFFS.SLEEP} et ignorera 50% de la RES de chaque cible.${RETURN}${RETURN}
Remplit le Compteur de Tour de ce Champion de 15% des qu'un debuff ${DEBUFFS.SLEEP} ou ${DEBUFFS.STUN} place par cette competence expire.${RETURN}${RETURN}
Si <span class="gold-t">Oella</span> se trouve dans la meme équipe, accorde un Tour supplémentaire a ce Champion.`,
          damage: "4.1*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Metabolisme [P]",
          description: `Possede 15% de chances de reduire d'1 tour le temps de recharge d'une des competences de ce Champion chaque fois qu'il est soigne par un buff ${BUFFS.HEALS}. Les chances augmentent a 30% si <span class="gold-t">Oella</span> se trouve dans le meme equipe.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 553",
        "DEF": "991",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies lors de toutes les Batailles de 30%.`
};
