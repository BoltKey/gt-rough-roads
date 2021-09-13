

const strings = 
 {
  "Cards": {
    "": {
      "pic_status": "a - assigned \ns - sketch \nF - final",
      "app_status": "X - don't use",
      "translate": "X - not now",
      "ship_icon": null,
      "name_en": null,
      "text_en": null,
      "clarification_en": "(for the [i] button)",
      "future text (for expansion stuff)": null
    },
    "metal_fatigue": {
      "pic_status": "a",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Metal Fatigue",
      "text_en": "Whenever a ship or ships moves (back or forth) on the flight track, roll one die. Players who moved same or more spaces than the result roll for coordinates - if there is a component, it falls off.",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "explosive_stuff": {
      "pic_status": "a",
      "app_status": "X",
      "translate": null,
      "ship_icon": null,
      "name_en": "Explosive Stuff",
      "text_en": "If a component with a batery or goods token is destroyed, all components in the eight neighbouring spaces are also destroyed. Beware of chain reaction!",
      "clarification_en": "- Please note this applies only to destroyed components (directly hit by a cannon fire, meteor, or sabotage, or by an effect that specifically says \"destroy\"). Component that fall off or are given up do not trigger explosions.\n- Empty cargo holds or batteries do not explode.",
      "future text (for expansion stuff)": null
    },
    "paranoid_locals": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Paranoid Locals",
      "text_en": "Anyone who wants to land on a Planet first takes a light cannon fire from the front. If only one player want's to land, make it a heavy cannon fire. (First everyone decides. Then roll. Then load goods.)",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "cosmic_psychosis": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Cosmic Psychosis",
      "text_en": "After each adventure card, roll for coordinates. If the roll indicates a cabin with one or more human crew members (not aliens), they go insane and the cabin is destroyed.",
      "clarification_en": "- You roll for coordinates the same way as when evaluating Sabotage card, but only once.\n- Yes, a 7-7 roll is bad news for your starting cabin!",
      "future text (for expansion stuff)": null
    },
    "personalized_cabins": {
      "pic_status": "a",
      "app_status": "X",
      "translate": null,
      "ship_icon": null,
      "name_en": "Personalized Cabins",
      "text_en": "The cabins belongs to their crew, they are not paid as lost components. Whenever you lose one or more crew members, give up also their cabins (including a remaining astronaut, if any).",
      "clarification_en": "- First give up all crew member (incl. aliens), then their cabins.\n- Cabins lost by any way are returned to the pile, not to your lost components.",
      "future text (for expansion stuff)": null
    },
    "tough_trip": {
      "pic_status": "F",
      "app_status": "X",
      "translate": "X",
      "ship_icon": null,
      "name_en": "Tough Trip",
      "text_en": null,
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "meteoric_inversion": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Meteoric Inversion",
      "text_en": "Large meteors are small, and small meteors are large.",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "remorseless_fate": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Remorseless Fate",
      "text_en": "Combat Zones and Sabotage affect all players except the one who has the most. Cabins affected by Epidemics must be given up. In Stardust, instead of losing flight days, components with open connectors fall off.",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "stiff_competition": {
      "pic_status": null,
      "app_status": "X",
      "translate": "X",
      "ship_icon": null,
      "name_en": "Stiff Competition",
      "text_en": null,
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "big_baddies": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Big Baddies",
      "text_en": "When revealing enemies, roll two dice. Add the lower of the two results to the enemy strength.",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "engine_envy": {
      "pic_status": null,
      "app_status": "X",
      "translate": "X",
      "ship_icon": null,
      "name_en": "Engine Envy",
      "text_en": "Whenever a new player becomes leader, the player behind him may choose a cannon on his ship (double one must be paid) and send a small cannon fire in the corresponding row or column and from the oposite direction to the new leader.",
      "clarification_en": "- I.e. if you choose a front cannon, opponent is hit from the back, if you choose a left cannon, opponent is hit from the right, etc.",
      "future text (for expansion stuff)": null
    },
    "piercing_projectiles": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Piercing Projectiles",
      "text_en": "When a component is destroyed by a meteor or cannon fire, the projectile keeps going until it hits the next component in line (if any). If it destroys a second component, it stops.",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "union_ship": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Union Ship",
      "text_en": "Before revealing the final adventure card, either give up on the flight or pay 1 credit or unit of goods per crew member.",
      "clarification_en": "- The crew's labor union will not accept batteries instead of goods.\n- If you have not enough goods and credits, you won't finish the flight.",
      "future text (for expansion stuff)": null
    },
    "bad_luck": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Bad Luck",
      "text_en": "If a roll of the dice for a meteor or cannon fire indicates that no one is hit or forced to use a battery, roll again (up to three times).",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "nasty_surprise": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Nasty Surprise",
      "text_en": "After building, but before preparing your ship, draw a card to replace this one. (If the replacement is a construction card denoted by [ship icon], draw a different replacement.)",
      "clarification_en": "- After building, discard this card by hitting the [x] button, and reveal another by [+] button.\n- If you find one with a ship icon, keep doing that until you find one without it.\n- Enjoy your surprise :)",
      "future text (for expansion stuff)": null
    },
    "infected_goods": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Infected Goods",
      "text_en": "Only aliens can safely load goods. When loading, if the number of new blocks exceeds the number of aliens you have aboard, you lose 1 human  stronaut for each extra new block (even if you don’t load them).",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "defective_connectors": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": "Y",
      "name_en": "Defective Connectors",
      "text_en": "When determining engine strength, subtract 1 for every universal connector joined to a simple or a double connector. You can reduce this penalty by discarding any number of components connected this way. (They fall off.)",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "space_junk": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Space Junk",
      "text_en": "At the end of each adventure card, any components that fall off of one ship act as large meteors from the front for all ships behind.",
      "clarification_en": "- Please note this applies only to component that fall off (because not connected to the ship anymore, or because of an effect that specifically says \"fall off\"). Destroyed or given up components do not count.\n- When evaluating a card, keep components that fall off on a separate pile.\n- After the entire card is evaluated, evaluate the fall-off-piles of the players, in flight order: for each component in the player's pile, all players behind him roll for a big meteor from the frint. Note this may add components to their fall-off-piles.",
      "future text (for expansion stuff)": null
    },
    "sommersault": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": "Y",
      "name_en": "Sommersault",
      "text_en": "Those pesky gravity anomalies! During building, engines can point both backward and forward. Engines pointing forward do not count when determining engine strength. After each Open Space or Planet card, rotate your ship 180 degrees.",
      "clarification_en": null,
      "future text (for expansion stuff)": null
    },
    "dead_zone": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": "Y",
      "name_en": "Dead Zone",
      "text_en": "Before building, roll to determine a column. (If the column is outside the ship’s squares, roll again until you hit). All components in this column are non-functional.",
      "clarification_en": null,
      "future text (for expansion stuff)": "Before building, roll to determine a column. (If the column is outside the ship’s squares, roll again until you hit). All components in this column (except indestructible plating) are non-functional."
    },
    "abandoned_debris": {
      "pic_status": "a",
      "app_status": "X",
      "translate": null,
      "ship_icon": null,
      "name_en": "Abandoned Debris",
      "text_en": "When abandoned ship or station card is revealed, all players (in flight order) vote for a direction. All ships face a big meteor from the direction with the most votes (or from all tied directions).",
      "clarification_en": "- In case of tie, evaluate meteors from all tied directions in order in which they got the first vote.",
      "future text (for expansion stuff)": null
    }
  },
  "Texts": {
    "title": {
      "string_en": "Welcome to the Rough Roads"
    },
    "subtitle": {
      "string_en": "an expansion to Galaxy Trucker board game"
    },
    "": {
      "string_en": null
    },
    "paragraph1": {
      "string_en": "This app represents a deck of Rough Road cards. You can do the stuff you could do with a regular deck: reveal a card with a [+] button, discard a card with a [x] button, etc. You can also reveal a deck from the discard by clicking the discard deck icon on the bottom left."
    },
    "paragraph2": {
      "string_en": "Agree on the difficulty: 1 - hard, 2 - extreme, 3 - insane. Before each flight, reveal that many cards. Read them out loud - they contain special rules for this flight. Keep your device nearby, so players may check them at any time."
    },
    "paragraph3": {
      "string_en": "After the flight, discard the cards. Note - the app remembers your discard pile, so you face different cards next time. You may reshuffle the discard to prevent that."
    },
    "footnote": {
      "string_en": "Important: Do not use with new players. Lower the difficulty if someone chickens out. [random_extra_hint]. Have fun!"
    },
    "extra_hint0": {
      "string_en": "Do not let kids eat the game pieces."
    },
    "extra_hint1": {
      "string_en": "Do not lick the device screen."
    },
    "extra_hint2": {
      "string_en": "Do not let cat walk over your table while playing."
    },
    "extra_hint3": {
      "string_en": "Wash your hands regularly."
    },
    "extra_hint4": {
      "string_en": "Do not use strong language unless your ship completelly falls off."
    },
    "extra_hint5": {
      "string_en": "Do not play Galaxy Trucker while driving."
    },
    "extra_hint6": {
      "string_en": "Do not flip the table before the game ends."
    },
    "extra_hint7": {
      "string_en": "Do not play insane difficulty with the elderly."
    },
    "extra_hint8": {
      "string_en": "Watch your surroundings while grabing tiles."
    },
    "extra_hint9": {
      "string_en": "Do not close eyes when facing meteors."
    },
    "button_discard": {
      "string_en": "Discard All"
    },
    "button_reshuffle": {
      "string_en": "Reshuffle Discard"
    },
    "button_title": {
      "string_en": "Hit the Road"
    }
  }
}