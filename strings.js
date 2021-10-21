

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
      "future text (for expansion stuff)": null,
      "name_de": null,
      "text_de": null,
      "clarification_de": null
    },
    "metal_fatigue": {
      "pic_status": "a",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Metal Fatigue",
      "text_en": "After each adventure, if anyone gained or lost flight days, roll a die. For all ships that moved that much or more, roll for coordinates. The component at those coordinates falls off.",
      "clarification_en": null,
      "future text (for expansion stuff)": null,
      "name_de": "Marodes Metall",
      "text_de": "Würfelt nach jedem Abenteuer, falls jemand in diesem Flugtage gewonnen oder verloren hat. Bei allen Schiffen, die sich so weit oder weiter bewegt habe wie der Koordinatenwurf, fällt das Bauteil an diesen Koordinaten ab.",
      "clarification_de": null
    },
    "explosive_stuff": {
      "pic_status": "a",
      "app_status": "X",
      "translate": null,
      "ship_icon": null,
      "name_en": "Explosive Stuff",
      "text_en": "If a component with goods or a battery token is destroyed, all components in the eight neighboring squares are also destroyed. This may cause a chain reaction.",
      "clarification_en": "- This applies only to components which are destroyed (by cannon fire, meteors, sabotage, or explosions) and not to those which fall off.\n- If components with goods or batteries are destroyed in the explosion, they will also explode.\n- Empty cargo holds or battery components do not explode.",
      "future text (for expansion stuff)": "This applies only to components which are destroyed (by cannon fire, meteors, sabotage, or explosions) and not to those which fall off or are given up.\n If components with goods or batteries are destroyed in the explosion, they will also explode.\n Empty cargo holds or battery components do not explode.",
      "name_de": "Detonierende Dinge",
      "text_de": "Wird ein Bauteil mit Gütern oder Batteriemarker zerstört, werden auch alle Bauteile in den 8 benachbarten Feldern zerstört. Das kann zu Kettenreaktionen führen.",
      "clarification_de": "Das gilt nur für Bauteile, die zerstört werden (durch Kanonenfeuer, Meteore, Sabotage oder Explosionen) und nicht für solche, die abfallen.\n Wenn Bauteile mit Gütern oder Batterien durch die Explosion zerstört werden, explodieren auch sie."
    },
    "paranoid_locals": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Paranoid Locals",
      "text_en": "Anyone who wants to land on a planet first takes one blast of light cannon fire from the front. If only one player wants to land, make it heavy cannon fire.",
      "clarification_en": "- Everyone decides in order. Then roll. Then load goods.",
      "future text (for expansion stuff)": null,
      "name_de": "Paranoide Personen",
      "text_de": "Jeder, der auf einem Planeten landen will, erhält zuvor einen Schuss leichtes Kanonenfeuer von vorn. Falls nur 1 Spieler landen will, ist es schweres Kanonenfeuer.",
      "clarification_de": "Entscheidet euch in Flugreihenfolge. Dann würfelt. Dann ladet Güter."
    },
    "cosmic_psychosis": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Cosmic Psychosis",
      "text_en": "After each adventure, roll for coordinates. If the roll indicates a cabin with one or more human crew members (not aliens), they go insane and the cabin is destroyed.",
      "clarification_en": "- Roll for coordinates as with the Sabotage adventure, but only once for all players.",
      "future text (for expansion stuff)": null,
      "name_de": "Kosmischer Koller",
      "text_de": "Nach jedem Abenteuer erwürfelt ihr Koordinaten. Befinden sich dort Kabinen mit mindest einem menschlichen Crewmitglied (keine Aliens), werden diese Crewmitglieder verrückt und die Kabine zerstört.",
      "clarification_de": "Erwürfelt die Koordinaten wie beim Sabotage-Abenteuer, jedoch nur einmal für alle Trucker."
    },
    "personalized_cabins": {
      "pic_status": "a",
      "app_status": "X",
      "translate": null,
      "ship_icon": null,
      "name_en": "Personalized Cabins",
      "text_en": "The cabins belongs to their crew, they are not paid as lost components. Whenever you lose one or more crew members, give up also their cabins (including a remaining astronaut, if any).",
      "clarification_en": "- First give up all crew member (incl. aliens), then their cabins.\n- Cabins lost by any way are returned to the pile, not to your lost components.",
      "future text (for expansion stuff)": null,
      "name_de": "Crew-Kabinen",
      "text_de": "Die Kabinen sind im Besitz ihrer Crew, müssen also nicht bezahlt werden, wenn sie verloren gehen. Immer wenn du 1 oder mehr Crewmitglieder verlierst, gibst du auch deren Kabinen auf ( inklusive des Astronauten, der sich darin eventuell noch befindet).",
      "clarification_de": "Zuerst gibst du die Crewmitglieder auf (inkl. Aliens), dann ihre Kabinen.\n Kabinen, die (egal wie) verloren wurden, kommen in den Vorrat zurück, nicht zu deinen verlorenen Teilen."
    },
    "tough_trip": {
      "pic_status": "F",
      "app_status": "X",
      "translate": "X",
      "ship_icon": null,
      "name_en": "Tough Trip",
      "text_en": null,
      "clarification_en": null,
      "future text (for expansion stuff)": null,
      "name_de": null,
      "text_de": null,
      "clarification_de": null
    },
    "meteoric_inversion": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Meteoric Inversion",
      "text_en": "Large meteors are small, and small meteors are large.",
      "clarification_en": null,
      "future text (for expansion stuff)": null,
      "name_de": "Invertierte Meteore",
      "text_de": "Große Meteoriten sind klein und kleine Meteoriten sind groß.",
      "clarification_de": null
    },
    "remorseless_fate": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Remorseless Fate",
      "text_en": "Combat Zones and Sabotage affect all players except the one who has the most. Cabins affected by Epidemics must be given up. In Stardust, instead of losing flight days, components with exposed connectors fall off.",
      "clarification_en": "- For example, Sabotage affects everyone except the player with the most crew; roll 3 times, but players hit by one roll ignore the remaining rolls. If everyone is tied, only the player farthest behind is unaffected.",
      "future text (for expansion stuff)": null,
      "name_de": "Schonungsloses Schicksal",
      "text_de": "Kampfzone und Sabotage betreffen alle Spieler außer dem, der das meiste hat. Kabinen, die von Epidemien betroffen sind, müssen aufgegeben werden. Bei Sternenstaub verliert man keine Flugtage, stattdessen fallen Bauteile mit freiliegenden Anschlüssen ab.",
      "clarification_de": "Kampfzone und Sabotage betreffen alle Spieler außer dem, der das meiste hat. Kabinen, die von Epidemien betroffen sind, müssen aufgegeben werden. Bei Sternenstaub verliert man keine Flugtage, stattdessen fallen Bauteile mit freiliegenden Anschlüssen ab."
    },
    "stiff_competition": {
      "pic_status": null,
      "app_status": "X",
      "translate": "X",
      "ship_icon": null,
      "name_en": "Stiff Competition",
      "text_en": null,
      "clarification_en": null,
      "future text (for expansion stuff)": null,
      "name_de": null,
      "text_de": null,
      "clarification_de": null
    },
    "big_baddies": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Big Baddies",
      "text_en": "Whenever you encounter enemies, roll two dice and add the lower die to the enemy’s strength.",
      "clarification_en": null,
      "future text (for expansion stuff)": null,
      "name_de": "Brutale Bösewichte",
      "text_de": "Immer wenn du Feinden begegnest, würfle mit 2 Würfeln und addiere das niedrigere Ergebnis zur Stärke der Feinde.",
      "clarification_de": null
    },
    "engine_envy": {
      "pic_status": null,
      "app_status": "X",
      "translate": "X",
      "ship_icon": null,
      "name_en": "Engine Envy",
      "text_en": "Whenever a new player becomes leader, the player behind him may choose a cannon on his ship (double one must be paid) and send a small cannon fire in the corresponding row or column and from the oposite direction to the new leader.",
      "clarification_en": "- I.e. if you choose a front cannon, opponent is hit from the back, if you choose a left cannon, opponent is hit from the right, etc.",
      "future text (for expansion stuff)": null,
      "name_de": null,
      "text_de": null,
      "clarification_de": null
    },
    "piercing_projectiles": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Piercing Projectiles",
      "text_en": "If a meteor or cannon fire destroys the first component it hits, it will also hit the next component in line.",
      "clarification_en": "- The second hit usually destroys the second component, too, but a small meteor will bounce off the second component if it hits a smooth side.",
      "future text (for expansion stuff)": null,
      "name_de": "Durchschlagende Projektile",
      "text_de": "Zerstört ein Meteorit oder Kanonenfeuer das erste getroffene Bauteil, wird auch das dahinter liegende Bauteil getroffen.",
      "clarification_de": "Zerstört ein Meteorit oder Kanonenfeuer das erste getroffene Bauteil, wird auch das dahinter liegende Bauteil getroffen."
    },
    "union_ship": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Union Ship",
      "text_en": "Before revealing the final adventure card, either give up on the flight or pay 1 credit or 1 goods block per crew member.",
      "clarification_en": "- The crew’s labor union will not accept batteries instead of goods.\n- If you do not have enough goods and credits, you must give up.",
      "future text (for expansion stuff)": null,
      "name_de": "Gewerkschafts-Schiff",
      "text_de": "Vor dem Aufdecken der letzten Abenteuerkarte gibst du entweder den Flug auf oder bezahlst 1 Credit oder 1 Güter-Block pro Crewmitglied.",
      "clarification_de": "Vor dem Aufdecken der letzten Abenteuerkarte gibst du entweder den Flug auf oder bezahlst 1 Credit oder 1 Güter-Block pro Crewmitglied."
    },
    "bad_luck": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Bad Luck",
      "text_en": "If a roll of the dice for a meteor or cannon fire indicates that no one is hit or forced to use a battery, roll again, up to three rolls total.",
      "clarification_en": "- A small meteor that bounces off counts as a hit and does not cause you to roll again.",
      "future text (for expansion stuff)": null,
      "name_de": "Großes Pech",
      "text_de": "Wird beim Würfelwurf für einen Meteor oder Kanonenfeuer niemand getroffen oder es muss keine Batterie ausgegeben werden, würfle erneut – bis zu insgesamt drei Würfen.",
      "clarification_de": "Wird beim Würfelwurf für einen Meteor oder Kanonenfeuer niemand getroffen oder es muss keine Batterie ausgegeben werden, würfle erneut – bis zu insgesamt drei Würfen."
    },
    "nasty_surprise": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Nasty Surprise",
      "text_en": "After building, but before preparing your ship, draw a card to replace this one. (If the replacement is a construction card denoted by [ship icon], draw a different replacement.)",
      "clarification_en": "- After building, discard this card by hitting the [x] button, and hit the [+] button to reveal another.\n- If you find one with a ship icon, keep searching until you find one without it.\n- Enjoy your surprise :)",
      "future text (for expansion stuff)": null,
      "name_de": "Üble Überraschung",
      "text_de": "Nach dem Bau, jedoch vor der Vorbereitung deines Schiffs, ziehst du eine Karte, die diese hier ersetzt. (Falls die Ersatzkarte eine durch [ship icon] gekennzeichnete Baukarte ist, ziehe einen neuen Ersatz.)",
      "clarification_de": "Nach dem Bau, jedoch vor der Vorbereitung deines Schiffs, ziehst du eine Karte, die diese hier ersetzt. (Falls die Ersatzkarte eine durch [ship icon] gekennzeichnete Baukarte ist, ziehe einen neuen Ersatz.)"
    },
    "infected_goods": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Infected Goods",
      "text_en": "When loading goods, if the number of goods depicted exceeds the number of aliens you have aboard, you lose 1 human astronaut for each extra block (even if you don’t load them all).",
      "clarification_en": "- For example, if you have 1 alien and land on a planet that offers 3 goods, you load as many goods as you want, but then lose 2 humans.",
      "future text (for expansion stuff)": null,
      "name_de": "Infizierte Güter",
      "text_de": "Übersteigt beim Laden von Gütern die Anzahl der angezeigten Güter die Anzahl der Aliens an Bord deines Schiffs, verlierst du 1 menschlichen Astronaut pro überzähligem Block (sogar, wenn du nicht alle Güter lädst).",
      "clarification_de": "Übersteigt beim Laden von Gütern die Anzahl der angezeigten Güter die Anzahl der Aliens an Bord deines Schiffs, verlierst du 1 menschlichen Astronaut pro überzähligem Block (sogar, wenn du nicht alle Güter lädst)."
    },
    "defective_connectors": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": "Y",
      "name_en": "Defective Connectors",
      "text_en": "When determining engine strength, subtract 1 for every universal connector joined to a one-pipe or two-pipe connector. You can reduce this penalty by removing any number of components connected this way. (They fall off.)",
      "clarification_en": "- In a Combat Zone, all players with with negative engine strength are considered to be tied at 0.",
      "future text (for expansion stuff)": null,
      "name_de": "Angeknackste Anschlüsse",
      "text_de": "Beim Ermitteln der Antriebsstärke musst du 1 pro Universalanschluss abziehen, der mit einem Ein- oder Zwei-Rohr-Anschluss verbunden ist. Du kannst diese Strafe reduzieren, indem du beliebig viele derart angeschlossene Bauteile entfernst. (Diese fallen ab.)",
      "clarification_de": "Beim Ermitteln der Antriebsstärke musst du 1 pro Universalanschluss abziehen, der mit einem Ein- oder Zwei-Rohr-Anschluss verbunden ist. Du kannst diese Strafe reduzieren, indem du beliebig viele derart angeschlossene Bauteile entfernst. (Diese fallen ab.)"
    },
    "space_junk": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": null,
      "name_en": "Space Junk",
      "text_en": "After each adventure, all components that fell off of any ship act as large meteors from the front for all following ships.",
      "clarification_en": "- Components hit by meteors or cannon fire are destroyed, and do not become space junk. This effect applies only to components which fall off. (Usually this is because the component holding them on to the ship was destroyed.)\n- During the adventure, keep components that fall off in a separate pile.\n- At the end of the adventure, in flight order, evaluate each player’s pile; for each component, roll 1 large meteor that affects all players behind.\n- Components that fall off while resolving the Space Junk effect also become large meteors for all ships behind.",
      "future text (for expansion stuff)": null,
      "name_de": "Weltraumschrott",
      "text_de": "Nach jedem Abenteuer werden alle Bauteile, die von allen Schiffen abgefallen sind, für alle nachfolgenden Schiffe zu großen Meteoriten von vorn.",
      "clarification_de": "Nach jedem Abenteuer werden alle Bauteile, die von allen Schiffen abgefallen sind, für alle nachfolgenden Schiffe zu großen Meteoriten von vorn."
    },
    "sommersault": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": "Y",
      "name_en": "Gravitational Anomaly",
      "text_en": "During building, engines can point backward or forward. Engines pointing forward do not count when determining engine strength. After each Open Space or Planet adventure, rotate your ship 180 degrees.",
      "clarification_en": null,
      "future text (for expansion stuff)": null,
      "name_de": "Gravitationsanomalie",
      "text_de": "Beim Bau dürfen Antriebe nach hinten oder vorne zeigen. Nach vorn zeigende Antriebe zählen beim Ermitteln der Antriebsstärke nicht mit. Nach jedem Freier-Weltraum- oder Planeten-Abenteuer drehst du dein Schiff um 180 Grad.",
      "clarification_de": null
    },
    "dead_zone": {
      "pic_status": "F",
      "app_status": null,
      "translate": null,
      "ship_icon": "Y",
      "name_en": "Dead Zone",
      "text_en": "Before building, roll to determine a column. (If the column is outside the ship’s squares, roll again until you hit). All components in this column are non-functional.",
      "clarification_en": "- Nothing works in that column. Components there can hold no crew, batteries, or goods. Alien life support systems do not support connected cabins. Engines and cannons do not count toward your strength.\n- However, all components still must follow the usual ship-building rules.",
      "future text (for expansion stuff)": "Nothing works in that column. Components there can hold no crew, batteries, or goods. Alien life support systems do not support connected cabins. Engines and cannons do not count toward your strength.\n However, all components still must follow the usual ship-building rules.\n Indestructable plating is considered a structural part of the ship (like the connectors), so it will work as usual.",
      "name_de": "Tote Zone",
      "text_de": "Vor dem Bau erwürfelt ihr eine Spalte. (Sollte sie außerhalb der Felder eurer Schiffe liegen, würfelt erneut, bis ihr eine Spalte trefft, in der mindestens ein Schiff Bauteile hat.) Alle Bauteile in dieser Spalte haben keine Funktion.",
      "clarification_de": "Vor dem Bau erwürfelt ihr eine Spalte. (Sollte sie außerhalb der Felder eurer Schiffe liegen, würfelt erneut, bis ihr eine Spalte trefft, in der mindestens ein Schiff Bauteile hat.) Alle Bauteile in dieser Spalte haben keine Funktion."
    },
    "abandoned_debris": {
      "pic_status": "a",
      "app_status": "X",
      "translate": null,
      "ship_icon": null,
      "name_en": "Abandoned Debris",
      "text_en": "When abandoned ship or station card is revealed, all players (in flight order) vote for a direction. All ships face a big meteor from the direction with the most votes (or from all tied directions).",
      "clarification_en": "- In case of tie, evaluate meteors from all tied directions in order in which they got the first vote.",
      "future text (for expansion stuff)": null,
      "name_de": "Trümmerteile",
      "text_de": "Wenn eine Karte Verlassene Station oder Verlassenes Schiff aufgedeckt wird, stimmen alle Spieler (in Flugreihenfolge) für eine Richtung. Alle Schiffe werden von einem großen Meteoriten aus der Richtung mit den meisten Stimmen getroffen (oder bei Gleichstand aus allen diesen Richtungen).",
      "clarification_de": "Wenn eine Karte Verlassene Station oder Verlassenes Schiff aufgedeckt wird, stimmen alle Spieler (in Flugreihenfolge) für eine Richtung. Alle Schiffe werden von einem großen Meteoriten aus der Richtung mit den meisten Stimmen getroffen (oder bei Gleichstand aus allen diesen Richtungen)."
    }
  },
  "Texts": {
    "title": {
      "string_en": "Welcome to Rough Roads",
      "string_de": "Willkommen zu Krasse Strecken"
    },
    "subtitle": {
      "string_en": "an expansion for the Galaxy Trucker board game",
      "string_de": "eine Erweiterung des Brettspiels Galaxy Trucker"
    },
    "": {
      "string_en": null,
      "string_de": null
    },
    "paragraph1": {
      "string_en": "This app represents a deck of Rough Road cards. You can do the stuff you could do with a regular deck: reveal a card with the [+] button, discard a card with the [x] button, etc. You can check the discard pile by clicking the icon on the bottom left.",
      "string_de": "Die App liefert ein Deck der Krasse-Strecken-Karten. Du kannst damit das machen, was auch bei einem normalen Deck geht: eine Karte durch den [+]-Button aufdecken, eine Karte durch den [x]-Button abwerfen usw. Du kannst den Abwurfstapel durchsuchen, indem du das Icon links unten anklickst."
    },
    "paragraph2": {
      "string_en": "Agree on the difficulty: 1 – hard, 2 – extreme, 3 – insane. Before each flight, reveal that many cards. Read them out loud – they contain special rules for that flight. Keep your device nearby, so players can check the cards at any time. Some cards may have rules clarifications [i].",
      "string_de": "Lege einen Schwierigkeitsgrad fest: 1 – hart, 2 – extrem, 3 – wahnsinnig. Vor jedem Flug deckst du so viele Karte auf. Lies sie laut vor – sie beschreiben besondere Regeln für diesen Flug. Lass das Gerät mit der App in Griffweite, damit alle die Karten jederzeit checken können. Zu einigen Karten gibt es Regelerklärungen [i]."
    },
    "paragraph3": {
      "string_en": "After the flight, discard the cards. The app remembers your discard pile, so you will face different cards next time. Or you can choose to shuffle the discard pile back into the deck.",
      "string_de": "Nach dem Flug wirfst du die Karten ab. Die App merkt sich den Abwurfstapel, daher wird es beim nächsten Mal andere Karten geben. Du kannst aber auch wählen, den Abwurfstapel wieder ins Deck zu mischen."
    },
    "footnote": {
      "string_en": "Important: Do not use this expansion with new players. Lower the difficulty if someone chickens out. [random_extra_hint]. Have fun!",
      "string_de": "Wichtig: Benutze diese Erweiterung niemals mit Neulingen. Senke den Schwierigkeitsgrad, falls jemand kneifen will. [random_extra_hint]. Habt Spaß!"
    },
    "extra_hint0": {
      "string_en": "Do not let kids eat the game pieces",
      "string_de": "Lasst keinesfalls Kinder auf dem Spielmaterial herumkauen"
    },
    "extra_hint1": {
      "string_en": "Do not lick the device screen",
      "string_de": "Bitte den Bildschirm nicht ablecken"
    },
    "extra_hint2": {
      "string_en": "Do not let any cat walk on the table while playing",
      "string_de": "Katzen sind während des Spiels vom Tisch fernzuhalten"
    },
    "extra_hint3": {
      "string_en": "Wash your hands regularly",
      "string_de": "Wasche deine Hände regelmäßig"
    },
    "extra_hint4": {
      "string_en": "Do not use strong language unless your ship completely falls apart",
      "string_de": "Kraftausdrücke sind zu vermeiden, es sei denn, dein Schiff fällt komplett auseinander"
    },
    "extra_hint5": {
      "string_en": "Do not play Galaxy Trucker while driving",
      "string_de": "Galaxy Trucker darf während des Führens eines Fahrzeugs nicht gespielt werden"
    },
    "extra_hint6": {
      "string_en": "Do not flip the table before the game ends",
      "string_de": "Der Tisch darf erst nach dem Ende des Spiels umgeworfen werden"
    },
    "extra_hint7": {
      "string_en": "Do not play insane difficulty with the elderly",
      "string_de": "Der Schwierigkeitsgrad wahnsinnig ist beim Spiel mit Senioren untersagt"
    },
    "extra_hint8": {
      "string_en": "Watch your surroundings while grabbing tiles",
      "string_de": "Achte beim Greifen nach Bauteilen auf deine Umgebung"
    },
    "extra_hint9": {
      "string_en": "Do not close eyes when facing meteors",
      "string_de": "Augen keinesfalls schließen, wenn Meteore im Anflug sind"
    },
    "extra_hint10": {
      "string_en": "Do not drink hot coffee on rough roads",
      "string_de": "Beim Befahren krasser Strecken keinen heißen Kaffee zu sich nehmen"
    },
    "extra_hint11": {
      "string_en": "Expect trouble",
      "string_de": "Rechne immer mit Ärger"
    },
    "extra_hint12": {
      "string_en": "Do not try to cut the deck, especially not with scissors",
      "string_de": "Das Abwerfen von Karten ist nicht wörtlich gemeint"
    },
    "extra_hint13": {
      "string_en": "Watch for potholes",
      "string_de": "Achte auf Schlaglöcher"
    },
    "extra_hint14": {
      "string_en": "Before launch, be sure your hazard lights are in working order",
      "string_de": "Vergewissere dich vor dem Start, dass alle Warnanzeigen korrekt funktionieren"
    },
    "button_discard": {
      "string_en": "Discard All",
      "string_de": "Alle abwerfen"
    },
    "button_reshuffle": {
      "string_en": "Reshuffle Discard",
      "string_de": "Abwurfstapel einmischen"
    },
    "button_title": {
      "string_en": "Hit the Road",
      "string_de": "Los geht's"
    },
    "game_name": {
      "string_en": "Rough Roads",
      "string_de": "Krasse Strecken"
    }
  }
}