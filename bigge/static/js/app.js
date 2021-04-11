// TODO
var data = {
    "meta": {
        "temps": {
            "s0": "SPELER0",
            "s1": "SPELER1",
            "a0": "WEINIG",
            "a1": "AANTAL",
            "a2": "VEEL"
        },
        "p_sum": 155,
        "colors": {
            "opdracht": "green",
            "stemrecht": "pink",
            "nhie": "blue",
            "mlt": "blue",
            "medusa": "black",
            "lepeltje": "pink",
            "vingeren": "pink",
            "big": "red",
            "baas":"green",
            "beerput":"red"
        },
        "probabilities": {
            "opdracht": 30,
            "stemrecht": 25,
            "nhie": 20,
            "mlt": 20,
            "medusa": 20,
            "lepeltje": 10,
            "vingeren": 10,
            "big": 10,
            "baas": 10
        }
    },
    "opdracht": [
        "Hey SPELER0, neem AANTAL slokken!",
        "Hey SPELER0, de speler links van jou neemt AANTAL slokken!",
        "Hey SPELER0, de speler rechts van jou neemt AANTAL slokken!",
        "Hey SPELER0, de speler tegenover jou neemt AANTAL slokken!",
        "Hey SPELER0, kies een andere speler uit, die speler neemt AANTAL slokken!",
        "Hoi SPELER0, je mag samen met SPELER1 AANTAL slokken verdelen over de andere spelers!",
        "Hoi SPELER0, je mag samen met SPELER1 AANTAL slokken over jullie twee verdelen! Succes.",
        "Hey SPELER0 bind je schoenveters vast aan de spelers naast je.",
        "Hey SPELER0, noem de kleur van je onderbroek. Voor iedere speler die dezelfde kleur onderbroek draagt mag je een slok uitdelen.",
        "Hii SPELER0, wie vind jij de knapste speler aan tafel???AANTAL slokken voor jullie allebei ;)",
        "SPELER0, jij beheert de komende drie nummers in de playlist. Veel plezier!",
        "SPELER0, de komende twee keer dat jij moet drinken mag je een andere speler kiezen die het dubbele aantal met je mee drinkt. ",
        "Hii SPELER0, drink AANTAL slokken als je nog nooit The Lord of the Rings hebt gezien! Schande!",
        "Hii SPELER0, deel AANTAL slokken uit als je alle Harry Potter-films hebt gezien!",
        "Hey SPELER0, wat is jouw grootste Guilty Pleasure???",
        "Hey SPELER0, op wie was je als laatste verliefd?",
        "Hey SPELER0, vertel ons eens: wanneer heb je voor het laatst gemasturbeerd? ",
        "Hey SPELER0, wat is jouw meest gênante moment wat je op school hebt meegemaakt?",
        "Hey SPELER0, waar heb je afgelopen week het hardst om gelachen?",
        "SPELER0, ga een weddenschap met SPELER1 aan. Het onderwerp mag je zelf verzinnen, de inzet is een adtje.",
        "SPELER0 en SPELER1 zijn nu een koppel. Iedere keer als de een drinkt, drinkt de ander mee. ",
        "SPELER0, roep heel hard 'Floor', de speler die als laatste de grond raakt krijgt AANTAL slokken",
        "SPELER0, doe je beste impressie van een naaktslak.",
        "SPELER0, ga op handen en voeten een rondje om de tafel/door de kamer.",
        "SPELER0, zing een zelfverzonnen serenade over de speler rechts van je.",
        "SPELER0, doe nu je ogen dicht. De andere spelers veranderen iets aan de ruimte waar je nu bent. Spreek van tevoren af om hoeveel slokken je speelt. Raad je wat er veranderd is, dan mag je ze uitdelen, zo niet zijn ze voor jou.",
        "Hey SPELER0, doe jouw beste impressie van een BN'er naar keuze.",
        "Hii SPELER0, stuur een appje naar je ouders en vertel ze hoeveel je van ze houdt.",
        "Hii SPELER0, jij mag niet meer praten tot een van de glazen aan tafel leeg is. Iedere keer dat je wel praat betekent dat AANTAL slokken drinken.",
        "Hoi SPELER0, ga alle andere spelers langs en kus ze. Voor iedere speler die je kust mag je twee slokken uitdelen. ",
        "Hoi SPELER0, kies blind iemand uit je contactenlijst en stuur diegene een berichtje met je neus. Liever niet? AANTAL slokken voor jou!",
        "Hoi SPELER0, kies iemand uit je contacten en vraag of diegene vanavond nog mee komt spelen.",
        "Gefeliciteerd SPELER0! Je hebt de PAPA-kaart gewonnen! Je mag vanaf nu op een door jouw gekozen moment een adtje aan iemand uitdelen. Veel plezier :)",
        "Hey SPELER0 jij mag vanaf de volgende ronde op een willekeurig moment je hand op tafel leggen. De andere spelers moeten zo snel mogelijk hun hand daarbovenop leggen. De laatste speler die zijn hand bovenop legt krijgt VEEL slokken!",
        "SPELER0, begin met het neuriën van een liedje. De andere spelers moeten meeneurien zodra ze het herkennen. De laatste speler die neuriet of de spelers die het nummer niet herkennen drinken VEEL slokken. Kent meer dan de helft het niet, dan drink je ze zelf!",
        "SPELER0 en SPELER1 posten allebei een foto op hun insta-verhaal. De speler die na tien minuten de meeste weergaven heeft mag AANTAL slokken uitdelen!",
        "SPELER0 en SPELER1 moeten beide een foto posten op instagram. De speler die na tien minuten de minste likes heeft krijgt een adtje!",
        "SPELER0 en SPELER1! Let goed op! Leg zo snel mogelijk een voorwerp met de beginletter K op tafel, de speler die dit het snelste doet mag AANTAL slokken uitdelen!",
        "Hii SPELER0, tijd om te stijldansen met de speler rechts van je. De andere spelers bepalen of het goed genoeg is. Is het onvoldoende? Drink allebei AANTAL slokken. Succes!",
        "Let op SPELER0! Je krijgt 30 seconden om een voorwerp te vinden wat je de komende vijf minuten als hoofddeksel moet gebruiken. Lukt dit niet? AANTAL slokken voor jou!",
        "SPELER0, vertel een sterk verhaal (waargebeurd of verzonnen). De andere spelers mogen raden of het echt of verzonnen is. Iedereen die het fout heeft drinkt AANTALslokken",
        "SPELER0, speel steen, papier, schaar met SPELER1. De verliezer drinkt AANTAL slokken en de winnaar mag er nog eens AANTAL uitdelen aan de andere spelers!",
        "SPELER0, maak een drankje klaar voor SPELER1. Als 'ie lekker is mag je AANTAL slokken uitdelen. Is 'ie niet lekker? AANTAL slokken voor jou!",
        "Heyhoi SPELER0, vertel je slechtste grap. Als er iemand lacht mag je AANTAL slokken uitdelen, zo niet zijn ze voor jou.",
        "Heyhoi SPELER0, doe een staredown met de speler tegenover je. De winnaar mag AANTAL slokken uitdelen.",
        "Heyhoi SPELER0, beschrijf je favoriete serie zonder de naam van de serie, acteurs of personages te noemen. Raden de andere spelers het goed? Dan mag je AANTALslokken uitdelen.",
        "SPELER0, tijd voor een potje pispotten met SPELER1. Winnaar ligt onder en mag AANTAL slokken uitdelen.",
        "SPELER0, doe een impressie van een van de spelers aan tafel. Raden de andere spelers wie je nadoet mag je AANTAL slokken uitdelen, zo niet zijn ze van jou! ",
        "SPELER0, beeld je favoriete film uit zonder te praten. Je krijgt 20 seconden. Wordt het geraden, mag je AANTAL slokken uitdelen, zo niet zijn ze voor jou!",
        "Een vraag voor SPELER0: wat is de tweede naam van SPELER1? Heb je het goed, dan mag je AANTAL slokken uitdelen!",
        "Een vraag voor SPELER0: wat is de verjaardag van SPELER1? Weet je het niet of heb je het fout? Schande! Drink AANTAL slokken!",
        "Hoi SPELER0, vertel ons eens: wat is het meest sexy aan jouw lichaam?",
        "Hey SPELER0, wat is er nou het meest sexy aan SPELER1?",
        "SPELER0, app een (oud-)klasgenootje en vraag hem/haar uit op een date. Als hij/zij ja zegt moet iedereen adten. Liever niet appen/bellen? Je mag de opdracht afkopen voor VEEL slokken.",
        "SPELER0, trek een kledingstuk uit! Liever niet? Drink VEEL slokken!",
        "SPELER0, wissel van shirt met SPELER1! Doen jullie dit niet? Allebei VEEL slokken!",
        "SPELER0, wissel een kledingstuk met SPELER1! Doen jullie dit niet? Allebei AANTAL slokken!",
        "Wassup SPELER0? Maak een selfie en post 'm direct op insta (en laat hem minimaal een halfuur online staan). Doe je dit? Dan mag je VEEL slokken uitdelen! Doe je het niet? Dan zijn ze allemaal voor jou!",
        "Hey SPELER0, bel of app een ex en zeg dat je nog een t-shirt van hem/haar krijgt! Doe je dit niet? VEEL slokken voor jou!",
        "Hii SPELER0, lees je laatste insta-dm voor! Doe je dit niet? AANTAL slokken voor jou!",
        "Hii SPELER0, kies een speler uit om sokken mee te wisselen. Doen jullie dit niet? Beide VEEL slokken!",
        "Hey SPELER0, verklaar de iemand in de ruimte de liefde in het Frans. Als je dit niet doet krijg je AANTAL slokken!",
        "SPELER0, haal voor iedereen die een nieuw drankje. Geen zin? Neem dan een adtje en haal alleen voor jezelf.",
        "SPELER0, de andere spelers mogen een filmpersonage voor jou uitkiezen. De komende vijf minuten speel jij die rol. . Geen zin? Dan krijg je AANTALslokken!",
        "Hey SPELER0, de komende drie minuten moet je constant als Yoda praten. Als je dit niet doet krijg je VEEL slokken! Jou veel succes ik wens!",
        "SPELER0, neem nu een foto en stuur die naar je derde insta-DM in je lijst. Geen zin? Adtje!",
        "SPELER0, neem nu een selfie en stel die in als je WhatsApp-profiel foto. Liever niet? AANTAL slokken voor jou!",
        "SPELER0, laat je beste dansmove zien aan de andere spelers! Doe je het niet of niet goed genoeg? AANTAL slokken drinken!",
        "Hii SPELER0, de komende vijf minuten moet je verplicht met een Russisch accent praten. Iedere keer dat je dit niet doet krijg je AANTAL slokken!",
        "Hii SPELER0, de komende vijf minuten moet je verplicht met een Frans accent praten. Iedere keer dat je dit niet doet krijg je AANTAL slokken!",
        "Hoi SPELER0, de komende vijf minuten moet je verplicht met een Italiaans accent praten. Iedere keer dat je dit niet doet krijg je AANTAL slokken!",
        "Hii SPELER0, de komende vijf minuten moet je verplicht met een Duits accent praten. Iedere keer dat je dit niet doet krijg je AANTAL slokken!",
        "Hey SPELER0, doe een handstand! De andere spelers bepalen of het goed genoeg is. Onvoldoende? AANTAL slokken voor jou!",
        "SPELER0, je moet armpje drukken tegen SPELER1. De verliezer moet AANTAL slokken drinken!",
        "SPELER0, houd een duimworstel-wedstrijd met SPELER1. De verliezer moet AANTAL slokken drinken!",
        "SPELER0, de andere spelers mogen bepalen aan wie van jouw volgers jij een (spicy) insta-Dm mag sturen... Durf je niet? VEEL slokken voor jou!",
        "SPELER0, het is tijd voor een prankcall naar iemand naar eigen keuze. De andere spelers mogen het onderwerp van het gesprek bepalen.  Durf je niet? Dan betekent dit een adtje voor jou!",
        "Hii SPELER0, stuur een videoboodschap naar je beste vriend uit groep vijf van de basisschool.  Als je dit niet doet krijg je AANTAL slokken!",
        "Hii SPELER0, de speler rechts van jou mag je een voorwerp toefluisteren dat jij moet beschrijven zonder het woord zelf te zeggen. Wordt het binnen 30 seconden geraden mag jeAANTAL uitdelen, zo niet zijn ze voor jou. Als je het woord wel hardop zegt ben je een valsspeler en krijg je een adtje.",
        "Iedereen kleiner dan SPELER0 drinkt AANTAL slokken!",
        "Iedereen langer dan SPELER0 drinkt AANTAL slokken!",
        "Iedereen meer sekspartners dan SPELER0 drinkt AANTAL slokken!",
        "Iedereen met een rood kledingstuk drinkt AANTAL slokken!",
        "Iedereen met een wit kledingstuk drinkt AANTAL slokken!",
        "Iedereen met een zwart kledingstuk drinkt AANTAL slokken!",
        "Iedereen met blond haar drinkt AANTAL slokken!",
        "Iedereen met een zusje drinkt AANTAL slokken!",
        "Iedereen met gescheiden ouders AANTAL slokken!",
        "Iedereen met een broertje AANTAL slokken!",
        "Iedereen die in de afgelopen twee maanden in het buitenland is geweest drinkt nu AANTAL slokken!",
        "Iedereen die op dit moment Adidas draagt drinkt AANTAL slokken!",
        "Iedereen die de afgelopen maand heeft gehuild krijgt AANTAL slokken!",
        "Iedereen die ooit gehuild heeft om een film drinkt AANTAL slokken!",
        "Iedereen wiens leeftijd een even getal is mag AANTAL slokken uitdelen!",
        "Iedereen wiens leeftijd een oneven getal is mag VEEL slokken uitdelen!",
        "Iedereen die ingeschreven staat bij een sportvereniging of -school mag AANTAL slokken uitdelen! Lekker bezig, pik!",
        "Iedereen op dit moment geen ondergoed draagt mag twee keer VEEL slokken uitdelen!",
        "Iedereen met ondergoed aan drinkt AANTAL slokken!",
        "Iedereen die vandaag of gisteren een salade heeft gegeten mag AANTAL slokken uitdelen!",
        "Iedereen die ooit in Biggekerke is geweest mag VEEL drinken! Proost!",
        "Iedereen die afgelopen maand een date heeft gehad drinkt AANTAL slokken!",
        "Alle jongens drinken AANTAL slokken!",
        "Alle meisjes drinken AANTAL slokken!",
        "Alle maagden drinken AANTAL slokken!",
        "Alle zittenblijvers drinken AANTAL slokken!",
        "Alle spelers met een A in hun naam drinken AANTAL slokken!",
        "Alle spelers met een L in hun naam  drinken AANTAL slokken!",
        "Alle spelers met een achternaam van meer dan zes letters drinken het aantal slokken dat ze meer hebben.",
        "Alle gingers drinken AANTAL slokken!",
        "Alle brunettes delen AANTAL slokken uit!",
        "Drink allemaal evenveel slokken als het aantal keren dat je praktijkexamen voor je rijbewijs hebt gedaan!",
        "SPELER0, drink evenveel slokken als het aantal exen dat je hebt gehad!",
        "SPELER0 drinkt evenveel slokken als het aantal sekspartners dat hij/zij heeft gehad!",
        "SPELER0, deel evenveel slokken uit als het aantal voornamen dat je hebt!",
        "SPELER0, neem evenveel slokken als het aantal tieten in de kamer!",
        "De speler met de hoogste studieschuld drinkt AANTAL slokken!",
        "De host van vanavond drinkt AANTAL slokken!",
        "De eerstvolgende die naar de wc gaat krijgt AANTAL slokken!",
        "De speler die het langst geen feestje heeft gegeven drinkt VEEL slokken!",
        "De speler met de meest SEXY moeder mag VEEL slokken uitdelen!",
        "Handen omhoog! De speler die het laatst zijn handen in de lucht heeft, krijgt AANTAL slokken!",
        "Opstaan! De speler die het laatst opgestaan is, krijgt AANTAL slokken!",
        "De speler die de vorige keer host is geweest mag AANTAL slokken uitdelen! Goed gedaan!",
        "De speler met het langste haar drinkt AANTAL slokken!",
        "De speler met het kortste haar mag AANTAL slokken uitdelen!",
        "Dames! (en heren…), als je vanavond een string draagt, drink AANTAL slokken!",
        "Leg allemaal je telefoon op tafel, de speler die als eerste een notificatie krijgt neemt AANTAL slokken!",
        "De grootste nerd van de groep krijgt AANTAL slokken!",
        "De speler met de meeste paar schoenen neemt nu AANTAL slokken!"
    ],
    "stemrecht": [
        "Je kunt je dromen opnemen OF Je hebt altijd een magisch gevulde koelkast. De verliezer drinkt AANTAL slokken",
        "Je partner wordt porno-acteur OF Je partner voelt altijd koud aan. De verliezer drinkt AANTAL slokken",
        "Je draagt elke dag een ongewoon hoofddeksel OF je moet elke week de ridderzaal schoonmaken. De verliezer drinkt AANTAL slokken",
        "Je moet elk half jaar verhuizen OF Je moet altijd achteruit lopen. De verliezer drinkt AANTAL slokken",
        "één jaar geen mondverzorging OF één jaar dezelfde onderbroek aan. De verliezer drinkt AANTAL slokken",
        "Je bent analfabeet OF Je hebt schubben over je hele lijf. De verliezer drinkt AANTAL slokken",
        "Altijd een clown naast je bed OF Je neus groeit als je liegt. De verliezer drinkt AANTAL slokken",
        "Je zweet olijfolie OF Al je eten is te pittig. De verliezer drinkt AANTAL slokken",
        "Altijd een papegaai op je schouder OF Je enige vervoersmiddel is een paard. De verliezer drinkt AANTAL slokken",
        "Je hebt een rattenstaart OF Je moet altijd buiten poepen en plassen. De verliezer drinkt AANTAL slokken",
        "Iedereen hoort wat je denkt OF Jij hoort wat iedereen denkt. De verliezer drinkt AANTAL slokken",
        "Je plast 3x per week in bed OF Je moet elke avond om 23:00 naar bed. De verliezer drinkt AANTAL slokken",
        "Je kunt de lokale weersomstandigheden bepalen OF Je kunt op elk moment onzichtbaar worden. De verliezer drinkt AANTAL slokken",
        "Je moet eenmalig je nagels eruit laten trekken OF Je moet elke ochtend naakt in de brandnetels rollen. De verliezer drinkt AANTAL slokken",
        "Alle dieren voelen zich seksueel tot je aangetrokken OF Je gebruikt schuurpapier als WC-papier. De verliezer drinkt AANTAL slokken",
        "Al je kleren zijn 3 maten te klein OF Je zegt alles 2 keer. De verliezer drinkt AANTAL slokken",
        "Al je uitgaven in muntjes van 5 cent OF Je hebt altijd windkracht 7 tegen. De verliezer drinkt AANTAL slokken",
        "Je kan alle muziekinstrumenten bespelen OF Je kan alle talen spreken. De verliezer drinkt AANTAL slokken",
        "Je bent doodsbang voor prullenbakken OF Je sokken zijn altijd nat. De verliezer drinkt AANTAL slokken",
        "Je moet altijd ovenwanten aan OF Je mag max. 100 woorden per dag zeggen. De verliezer drinkt AANTAL slokken",
        "Geen warm water in huis OF Alleen maar TL-verlichting. De verliezer drinkt AANTAL slokken",
        "Je hebt een blok aan je been OF Je valt altijd met de deur in huis. De verliezer drinkt AANTAL slokken",
        "Alles wat je zegt moet rijmen OF Je spendeert de rest van je leven in Vlijmen. De verliezer drinkt AANTAL slokken",
        "Je loopt op handen en voeten OF Je ogen zitten aan de zijkant van je hoofd. De verliezer drinkt AANTAL slokken",
        "Je hoort altijd het geluid van een stofzuiger in je hoofd OF Je moet 1 keer per week buiten slapen. De verliezer drinkt AANTAL slokken",
        "Je hebt een kalkoenlel OF Je mag jezelf alleen wassen met knakworstensap. De verliezer drinkt AANTAL slokken",
        "Iedere dag de buren op visite voor een kopje koffie OF Altijd als je danst, dans je de macarena. De verliezer drinkt AANTAL slokken",
        "Je huis is altijd extreem versierd met kerstdecoratie OF Je verblijft vanaf nu twee weken in een levende kerststal. De verliezer drinkt AANTAL slokken",
        "Nooit meer warm eten OF Alles wat je leest, lees je hardop. De verliezer drinkt AANTAL slokken",
        "Een keer per maand verdwijnt onverwacht je kleding OF Je hebt altijd de hik als je wakker bent. De verliezer drinkt AANTAL slokken",
        "Je moet aan elk kind vertellen dat Sinterklaas niet bestaat OF Je hebt altijd in elke schoen 1 pepernoot. De verliezer drinkt AANTAL slokken",
        "Alles wat je zegt wordt ook in het Duits nagesynchroniseerd OF Je wordt op straat altijd achtervolgd door een draaiorgel. De verliezer drinkt AANTAL slokken",
        "Niemand lacht ooit om wat je zegt OF Je moet lachen als iemand anders huilt. De verliezer drinkt AANTAL slokken",
        "Je bilnaad loop door tot je nek OF Je poetst je tanden elke dag met filet americain. De verliezer drinkt AANTAL slokken",
        "Je hebt 100 bijna identieke sleutels aan je sleutelbos OF Je geeft bij 3 zoenen altijd de derde op de mond. De verliezer drinkt AANTAL slokken",
        "Je lichaamshuid is van krokettenkorst OF Er loopt altijd een dwerg naast je die zegt dat je liegt. De verliezer drinkt AANTAL slokken",
        "Er worden iedere nacht 5 muggen losgelaten in je slaapkamer OF Je kruipt altijd voor in de rij. De verliezer drinkt AANTAL slokken",
        "Er staat een paard in de gang OF Je bent een bloemetjesgordijn. De verliezer drinkt AANTAL slokken",
        "Je woont op de 94ste verdieping van een flat zonder lift OF Al je digitale communicatie moet vanaf vandaag via handgeschreven brief. De verliezer drinkt AANTAL slokken",
        "Je draagt alleen maar kleding met een tijgerprint OF Iedere zaterdagavond speel je bingo in een bejaardentehuis. De verliezer drinkt AANTAL slokken",
        "Je gaat hard knorren als je geil bent OF Je wordt elke dag in een vrachtwagen vol varkens vervoerd naar je werk. De verliezer drinkt AANTAL slokken",
        "Overal waar je binnenkomt moet je een schwalbe maken OF Alles wat je doet wordt becommentarieerd door Jack van Gelder. De verliezer drinkt AANTAL slokken",
        "Je moet elke week één bouquet roman lezen OF Al je gebruiksnamen en emailadressen beginnen voor de rest van je leven met piemelboy69. De verliezer drinkt AANTAL slokken",
        "Je moet de basisschool overdoen OF Je praat tegen iedereen zoals je tegen baby’s praat. De verliezer drinkt AANTAL slokken",
        "Je glowt in the dark OF Als je muziek opzet komt de band automatisch live in je woonkamer optreden. De verliezer drinkt AANTAL slokken",
        "Wanneer je loopt draag je een dienblad OF Je moet op al je eten sabbelen. De verliezer drinkt AANTAL slokken",
        "Je hebt verspreid over de dag 10 minuten om te eten OF Je moet elke dag een uur met aandacht naar TEL-SELL reclames kijken. De verliezer drinkt AANTAL slokken",
        "Je hebt een robot-butler OF Je onthoudt alles wat je leest. De verliezer drinkt AANTAL slokken",
        "Er ontstaat een elektrische schok als je iemand kust OF Je slaapt altijd op een vochtig matras. De verliezer drinkt AANTAL slokken",
        "Je moet ieder weekend met een plakje brie onder je tong slapen OF Je bent ziek op alle nationale feestdagen. De verliezer drinkt AANTAL slokken",
        "Je wordt elke dag wakker met “Wake me up before you go-go” van Wham OF Je spuit elke dag een bus haarspray in je haar. De verliezer drinkt AANTAL slokken",
        "Je hebt altijd het gevoel dat je moet niezen (maar het lukt niet) OF De onderkant van je schoenen is spekglad. De verliezer drinkt AANTAL slokken",
        "Je snijtanden worden drie keer zo groot OF Je drinkt dagelijks een glas dierlijk bloed. De verliezer drinkt AANTAL slokken",
        "Je moet altijd een spoor van broodkruimels achterlaten OF Er wonen zeven dwergen in je huis. De verliezer drinkt AANTAL slokken",
        "Je maakt elk uur het geluid van een koekoeksklok OF Je kunt geen klok meer lezen. De verliezer drinkt AANTAL slokken",
        "Al je spullen zitten in kannen en kruiken OF Je loopt altijd tegen de lamp. De verliezer drinkt AANTAL slokken",
        "Als je scheldt of vloekt moet je je mond spoelen met zeep OF Je mag pas praten als je van iemand de beurt hebt gekregen. De verliezer drinkt AANTAL slokken",
        "Je moet één zintuig afstaan OF J kunt d lttr “ ” nit mr uitsprkn of schrijvn. De verliezer drinkt AANTAL slokken",
        "Elke partner die je ooit hebt, speelt – zeer fanatiek – blokfluit OF Je moet in het openbaar vervoer altijd bij een vreemde op schoot zitten. De verliezer drinkt AANTAL slokken",
        "Je eet alleen nog maar vliegtuigeten OF Alle muziek klinkt als een polyfone ringtone. De verliezer drinkt AANTAL slokken"
    ],
    "nhie": [
        "Never have I ever seks gehad op de eerste date. Zo ja, neem AANTAL slokken",
        "Never have I ever in de douche geplast. Zo ja, neem AANTAL slokken",
        "Never have I ever een verkeersboete gehad. Zo ja, neem AANTAL slokken",
        "Never have I ever schade aan andermans auto gereden. Zo ja, neem AANTAL slokken",
        "Never have I ever iemand gedumpt over WhatsApp. Zo ja, neem AANTAL slokken",
        "Never have I ever nudes verstuurd. Zo ja, neem AANTAL slokken",
        "Never have I ever een vakantieliefde gehad. Zo ja, neem AANTAL slokken",
        "Never have I ever de nieuwe partner van een ex gestalked op social media. Zo ja, neem AANTAL slokken",
        "Never have I ever uit de club/kroeg gezet. Zo ja, neem AANTAL slokken",
        "Never have I ever met de ex van een vriend uit geweest. Zo ja, neem AANTAL slokken",
        "Never have I ever andermans tandenborstel gebruikt. Zo ja, neem AANTAL slokken",
        "Never have I ever gekotst door te veel alcohol. Zo ja, neem AANTAL slokken",
        "Never have I ever naar een naaktstrand geweest. Zo ja, neem AANTAL slokken",
        "Never have I ever mijn ouders betrapt. Zo ja, neem AANTAL slokken",
        "Never have I ever betrapt geweest. Zo ja, neem AANTAL slokken",
        "Never have I ever gelogen tijdens dit spelletje. Zo ja, neem AANTAL slokken",
        "Never have I ever drugs gedaan. Zo ja, neem AANTAL slokken",
        "Never have I ever met iemand naar bed gegaan waarvan ik de naam niet meer weet. Zo ja, neem AANTAL slokken",
        "Never have I ever seks in het openbaar gehad. Zo ja, neem AANTAL slokken",
        "Never have I ever iets gestolen uit een winkel. Zo ja, neem AANTAL slokken",
        "Never have I ever iets geleend en nooit meer teruggegeven. Zo ja, neem AANTAL slokken",
        "Never have I ever iemand in het ziekenhuis doen belanden. Zo ja, neem AANTAL slokken",
        "Never have I ever stiekem door iemands telefoon gegaan. Zo ja, neem AANTAL slokken",
        "Never have I ever iemand van hetzelfde geslacht gekust. Zo ja, neem AANTAL slokken",
        "Never have I ever dronken naar de speeltuin gegaan. Zo ja, neem AANTAL slokken",
        "Never have I ever geslijmd bij de docent voor een beter cijfer. Zo ja, neem AANTAL slokken",
        "Never have I ever een gênante video op YouTube gezet. Zo ja, neem AANTAL slokken",
        "Never have I ever geld gestolen van mijn ouders. Zo ja, neem AANTAL slokken",
        "Never have I ever een Tinder-date gehad. Zo ja, neem AANTAL slokken",
        "Never have I ever vreemdgegaan. Zo ja, neem AANTAL slokken",
        "Never have I ever mijn geslachtdeel opgemeten. Zo ja, neem AANTAL slokken",
        "Never have I ever iemand geslagen zonder reden. Zo ja, neem AANTAL slokken",
        "Never have I ever aangevallen door iemands huisdier. Zo ja, neem AANTAL slokken",
        "Never have I ever bodyshots gedaan. Zo ja, neem AANTAL slokken",
        "Never have I ever handboeien omgehad. Zo ja, neem AANTAL slokken",
        "Never have I ever in m'n broek geplast van het lachen. Zo ja, neem AANTAL slokken",
        "Never have I ever een prankcall gedaan. Zo ja, neem AANTAL slokken",
        "Never have I ever gezegd dat ik nóóít meer zou drinken. Zo ja, neem AANTAL slokken",
        "Never have I ever op de bar gedanst. Zo ja, neem AANTAL slokken",
        "Never have I ever ge-skinny-dipped. Zo ja, neem AANTAL slokken",
        "Never have I ever dickpicks verstuurd. Zo ja, neem AANTAL slokken",
        "Never have I ever door rood gereden. Zo ja, neem AANTAL slokken",
        "Never have I ever tegen een glazen deur gelopen. Zo ja, neem AANTAL slokken",
        "Never have I ever iets afgezegd wegens een kater. Zo ja, neem AANTAL slokken",
        "Never have I ever gefouilleerd door de douane op de luchthaven. Zo ja, neem AANTAL slokken",
        "Never have I ever in slaap gevallen tijdens de seks. Zo ja, neem AANTAL slokken",
        "Never have I ever gelogen over mijn leeftijd. Zo ja, neem AANTAL slokken",
        "Never have I ever naar een stripclub geweest. Zo ja, neem AANTAL slokken",
        "Never have I ever een nachtje doorgehaald voor studie. Zo ja, neem AANTAL slokken"
    ],
    "mlt": [
        "Wie van jullie zou als eerste kannibalisme proberen?",
        "Wie van jullie zou als eerste een kind krijgen?",
        "Wie van jullie zou als eerste in een bargevecht terechtkomen?",
        "Wie van jullie zou als eerste overvallen worden?",
        "Wie van jullie zou als eerste trouwen?",
        "Wie van jullie zou als eerste aangevallen worden door een ex?",
        "Wie van jullie zou als eerste de hele groep in de problemen brengen?",
        "Wie van jullie zou als eerste zwanger raken uit een one-night-stand?",
        "Wie van jullie zou als eerste vast komen te zitten in een speeltoestel?",
        "Wie van jullie zou als eerste een meisje in de kroeg regelen?",
        "Wie van jullie zou als eerste stoppen met zijn/haar studie?",
        "Wie van jullie zou als eerste dakloos worden?",
        "Wie van jullie zou als eerste een hele week niet douchen?",
        "Wie van jullie zou als eerste een nachtje doorhalen om te studeren?",
        "Wie van jullie zou als eerste kotsen door teveel alcohol?",
        "Wie van jullie zou als eerste op vakantie gaan naar Mars?",
        "Wie van jullie zou als eerste op een blind date gaan?",
        "Wie van jullie zou als eerste in de gevangenis belanden?",
        "Wie van jullie zou als eerste minister-president worden?",
        "Wie van jullie zou als eerste emigreren?",
        "Wie van jullie zou als eerste in een 'Prins-uit-Senegal-spammail' trappen?",
        "Wie van jullie zou als eerste terug gaan naar de middelbare school als docent?",
        "Wie van jullie zou als eerste failliet gaan?",
        "Wie van jullie zou als eerste BDSM-meester(es) worden?",
        "Wie van jullie zou als eerste kroeghouder worden?",
        "Wie van jullie zou als eerste in de drugshandel eindigen?",
        "Wie van jullie zou als eerste een vuurwapen in bezit hebben?",
        "Wie van jullie zou als eerste in slaap te vallen tijdens de seks?",
        "Wie van jullie zou als eerste verliefd te worden op het broertje/zusje van zijn/haar beste vriend?",
        "Wie van jullie zou als eerste uit een boom te vallen?",
        "Wie van jullie zou als eerste zijn/haar benen te breken?",
        "Wie van jullie zou als eerste verliefd te worden op een stripper?",
        "Wie van jullie zou als eerste als sekswerker eindigen?",
        "Wie van jullie zou als eerste naar de hoeren gaan?",
        "Wie van jullie zou als eerste van de trap vallen?",
        "Wie van jullie zou als eerste in slaap vallen in de trein en je station missen?",
        "Wie van jullie zou als eerste meedoen aan een talentenjacht op tv?",
        "Wie van jullie zou als eerste eindigen als porno-acteur/-actrice?",
        "Wie van jullie zou als eerste zijn/haar baas uitschelden en ontslag nemen?",
        "Wie van jullie zou als eerste een vreselijke pestkop zijn?",
        "Wie van jullie zou als eerste aangevallen worden door een huisdier?",
        "Wie van jullie zou als eerste in het geheim een alien zijn?",
        "Wie van jullie zou als eerste in zijn/haar neus peuteren en het opeten?",
        "Wie van jullie zou als eerste alles op het spel te zetten voor een weddenschap?",
        "Wie van jullie zou als eerste honden- of kattenvoer eten?",
        "Wie van jullie zou als eerste nooit een broek aanhebben tijdens videomeetings?",
        "Wie van jullie zou als eerste in zijn eentje zijn eigen verjaardagstaart op te eten?",
        "Wie van jullie zou als eerste vaste klant worden van de plaatselijke snackbar?",
        "Wie van jullie zou als eerste zwaarder dan 150kg wegen?",
        "Wie van jullie zou als eerste een lievelingetje van de docent zijn?",
        "Wie van jullie zou als eerste stiekem gesprekken afluiisteren?",
        "Wie van jullie zou als eerste de wereld te vernietigen?",
        "Wie van jullie zou als eerste voorzitter zijn van de Phineas and Ferb-fanclub?",
        "Wie van jullie zou als eerste voorzitter zijn van de Frans Bauer-fanclub?",
        "Wie van jullie zou als eerste naar een Yes-R concert gaan?",
        "Wie van jullie zou als eerste naar een concert van Stef Ekkel gaan?",
        "Wie van jullie zou als eerste naar Thunderdome gaan?",
        "Wie van jullie zou als eerste naar de huishoudbeurs gaan?",
        "Wie van jullie zou als eerste een Neo-Nazi worden?",
        "Wie van jullie zou als eerste ruzie krijgen met de BOA's?",
        "Wie van jullie zou als eerste een baan krijgen als BOA?",
        "Wie van jullie zou als eerste de partner van Mark Rutte worden?",
        "Wie van jullie zou als eerste aanhanger van communisme worden?",
        "Wie van jullie zou als eerste naar bed gaan met Thierry Baudet?",
        "Wie van jullie zou als eerste flauwvallen als ze een celebrity ontmoeten?",
        "Wie van jullie zou als eerste acht keer falen voor het rij-examen?",
        "Wie van jullie zou als eerste een 510-score halen op de CiTo-Toets?",
        "Wie van jullie zou als eerste verliefd worden op zijn/haar docent?",
        "Wie van jullie zou als eerste seks hebben voor een voldoende?",
        "Wie van jullie zou als eerste seks hebben voor promotie?",
        "Wie van jullie zou als eerste zijn/haar dood te faken?",
        "Wie van jullie zou als eerste shopliften?",
        "Wie van jullie zou als eerste een overval te plegen?",
        "Wie van jullie zou als eerste tegen zichzelf praten?",
        "Wie van jullie zou als eerste zichzelf ziekmelding op werk om iets leuks te gaan doen?",
        "Wie van jullie zou als eerste op vakantie gaan naar Tadzikistan?",
        "Wie van jullie zou als eerste millionair worden?",
        "Wie van jullie zou als eerste dokter worden?",
        "Wie van jullie zou als eerste een kinderprogramma op tv maken?",
        "Wie van jullie zou als eerste een gokker worden?",
        "Wie van jullie zou als eerste beroemd worden?",
        "Wie van jullie zou als eerste kunstenaar worden?",
        "Wie van jullie zou als eerste gigolo worden?",
        "Wie van jullie zou als eerste gold digger worden?",
        "Wie van jullie zou als eerste monnik of non worden?",
        "Wie van jullie zou als eerste comedian worden?",
        "Wie van jullie zou als eerste stripper worden?",
        "Wie van jullie zou als eerste verslaafd raken aan drugs?",
        "Wie van jullie zou als eerste verslaafd raken aan fast food?",
        "Wie van jullie zou als eerste verslaafd raken aan koffie?",
        "Wie van jullie zou als eerste een hele dag in pyjama blijven lopen?",
        "Wie van jullie zou als eerste fanatiek vierdaagse-loper worden?",
        "Wie van jullie zou als eerste een nacht door te halen om te gamen?",
        "Wie van jullie zou als eerste workaholic te worden?",
        "Wie van jullie zou als eerste trouwen om het geld?",
        "Wie van jullie zou als eerste trouwen met iemand die gehaat wordt door al zijn/haar vrienden en familieleden?",
        "Wie van jullie zou als eerste in een dronken bui met een vreemde trouwen?",
        "Wie van jullie zou als eerste 1.000.000 volgers op TikTok hebben?",
        "Wie van jullie zou als eerste een genante tattoo laten zetten?",
        "Wie van jullie zou als eerste kippenboer worden?",
        "Wie van jullie zou als eerste in Masterchef te zien zijn?",
        "Wie van jullie zou als eerste te zien zijn in 'Help! Mijn Man is Klusser!'?",
        "Wie van jullie zou als eerste volledig bedekt zijn met tattoeages?",
        "Wie van jullie zou als eerste zijn/haar huis in de fik zetten tijdens het koken?",
        "Wie van jullie zou als eerste meer dan vijf kinderen te krijgen?",
        "Wie van jullie zou als eerste 100 jaar oud worden?",
        "Wie van jullie zou als eerste verhuizen naar Antarctica?",
        "Wie van jullie zou als eerste verhuizen naar het platteland?",
        "Wie van jullie zou als eerste alleen een horrorfilm kijken?",
        "Wie van jullie zou als eerste alleen nog maar romcoms kijken?",
        "Wie van jullie zou als eerste alleen sterven?",
        "Wie van jullie zou als eerste verliefd worden op een twintig jaar ouder persoon?",
        "Wie van jullie zou als eerste nooit zijn goede voornemens behalen?",
        "Wie van jullie zou als eerste vreemdgaan?",
        "Wie van jullie zou als eerste een dief helpen ontsnappen?",
        "Wie van jullie zou als eerste seks op het strand te hebben?",
        "Wie van jullie zou als eerste een hele strenge ouder zijn?",
        "Wie van jullie zou als eerste alleen nog maar bier en pizza te eten/drinken?",
        "Wie van jullie zou als eerste gillen om een spin?",
        "Wie van jullie zou als eerste een knorrige oude man te worden?",
        "Wie van jullie zou als eerste naar Hogwarts gaan?",
        "Wie van jullie zou als eerste stiekem wat bijverdienen als escort?"
    ],
    "medusa": [
        "Yess, op naar een rondje Medusa! Kijk allemaal naar de vloer, SPELER1 roept op een willekeurig moment GO! Op dat moment kijkt iedereen van de grond op en kijkt in de richting van een andere speler. Kijken jullie elkaar in de ogen aan? Dan drinken jullie allebei AANTAL slokken!"
    ],
    "lepeltje": [
        "En nu door naar een rondje Lepeltje Lepeltje! SPELER1, pak je drankje erbij en neem gelijk een extra lege beker en een theelepeltje mee. (Tip: een theedoek is misschien ook handig). Je krijgt een minuut de tijd om zoveel mogelijk van jouw mixdrankje in de andere beker te lepelen. De bekers moeten op tafel blijven staan. Alles wat er in jouw beker overblijft moet je daarna adten. Alles in de andere beker mag je aan een vriend doneren. Succes!"
    ],
    "vingeren": [
        "Zet allereerst een drankje in het midden van de tafel, zo dat iedereen erbij kan. Het spel kan beginnen als iedereen met één vinger het glas aanraakt. Er wordt nu afgeteld en je kunt kiezen of je je vinger op het glas houdt. Telkens moet één persoon raden hoeveel vingers er nog op het drankje blijven liggen. De speler die het aantal vingers moet raden, telt af en op één noemt hij het aantal vingers dat hij denkt dat er aan het glas blijven zitten. Is het goed geraden? Dan mag je uit het spel. Zo niet, blijf je meespelen. De beurt gaat dan naar de volgende speler, etc. De speler die als laatste overblijft (en dus het slechtst heeft geraden), moet het glas adten."
    ],
    "big": [
        "Helaas! SPELER1, jij bent De Big. Drink in een keer je glas leeg. Proost!"
    ],
    "baas": [
        "Gefeliciteerd! SPELER1, jij bent vanavond De Baas. Kies een speler uit die zijn glas in een keer leeg moet drinken!"
    ],
    "beerput": [
        "Neem AANTAL slokken uit de beerput!",
        "Neem AANTAL slokken uit de beerput!",
        "Neem AANTAL slokken uit de beerput!",
        "Neem AANTAL slokken uit de beerput!",
        "Doneer AANTAL slokken aan de beerput!",
        "Doneer AANTAL slokken aan de beerput!",
        "Doneer AANTAL slokken aan de beerput!",
        "Doneer AANTAL slokken aan de beerput!",
        "Neem AANTAL slokken uit je eigen glas!",
        "Deel AANTAL slokken uit de beerput uit!",
        "Deel AANTAL slokken uit aan een andere speler! Deze mag ze uit zijn éígen glas drinken.",
        "Vul de beerput aan met drank (met of zonder alcohol) uit de voorraadkast!",
        "Ff rust, deze ronde gebeurt er niets.",
        "De spelrichting draait om! Speel zelf nog eens en geef de beurt daarna door in tegengestelde richting.",
        "FLOOOOOOOOOOOOOOOOORRRRRRR!!!!!!!!",
        "Je mag een wedstrijdje duimworstelen met de speler tegenover je. De winnaar mag AANTAL slokken aan de beerput schenken.",
        "Allereerst een aantal voorbereidingen: ga met alle spelers aan een tafel zitten en zorg dat iedereen een mixdrankje bij zich heeft (geen bier dus!). Zorg daarnaast voor een extra glas (de beerput), vul die tot de helft met een mixdrankje en zet die in het midden van de tafel. Het doel van het spel is om zo snel mogelijk je eigen glas leeg te krijgen. Dit kan door te drinken en door het vullen van het centrale glas. Als het centrale glas leeg is mag de speler die hem leeg heeft gedronken hem weer tot halverwege vullen. De rest van het spel legt zichzelf uit. SPELER1  mag van start!"
    ]
}



var players = [];

// TODO
var beerput = false;
var startupContainer;
var gameContainer;

s0 = data["meta"]["temps"]["s0"];
s1 = data["meta"]["temps"]["s1"];
a0 = data["meta"]["temps"]["a0"];
a1 = data["meta"]["temps"]["a1"];
a2 = data["meta"]["temps"]["a2"];


// Set scrollable for iOS devices
window.onload = function () {

    registerSW();

    if (navigator.standalone) {
        iNoBounce.enable();
    } else {
        iNoBounce.disable();
    }

    // Create new buffer
    window.buff = new Buffer();

    window.setup = new Startup();
}

// Disable double-tap zooming on iOS devices
document.addEventListener("click", event => {});

// Enable touch/click behaviour
document.addEventListener('touchstart', function (e) {
    e.preventDefault();
});


class Startup {

    constructor() {

        this.board = this.createBoard();
        this.nPlayers = players.length;
        this.players = players;

        this.pushGameSelector();
        this.pushAddPlayer();
        this.pushAddPlayer();

        // set initial bg color
        document.body.className = 'red';

        // handle gestures
        this.handle()
    }

    handle() {

        // list all cards
        this.cards = this.board.querySelectorAll('.card')

        // get top card
        this.topCard = this.cards[this.cards.length - 1]

        // get next card
        this.nextCard = this.cards[this.cards.length - 2]

        //
        if ( this.players.length == 3 ) this.addStartButton();

        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy()

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }))

            this.hammer.on('pan', (e) => {
                this.onPan(e)
            })
        }

    }


    onPan(e) {

        if (!this.isPanning) {

            this.isPanning = true

            // remove transition properties
            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect()

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom =
                (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        // get new coordinates
        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1

        // get degrees of rotation, between 0 and +/- 45
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        // get scale ratio, between .95 and 1
        let scale = (95 + (5 * Math.abs(propX))) / 100

        // move and rotate top card
        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

        // scale up next card
        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false

            // set back transition properties
            this.topCard.style.transition = 'transform 100ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'

            // check threshold and movement direction
            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true
                // get right border position
                posX = this.board.clientWidth

            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true
                // get left border position
                posX = -(this.board.clientWidth + this.topCard.clientWidth)

            }
            // check if user input (and verify)
            if (successful &&
                this.topCard.classList.contains('addPlayer') &&
                this.topCard.classList.contains('valid')) {

                // add player to players list
                this.players.push( this.topCard.children[1].children[1].value );

                // add another addPlayer card
                if ( this.nPlayers > 1) this.pushAddPlayer();
            } else if (this.topCard.classList.contains('addPlayer')) {
                successful = false;
            }

            if (successful) {

                if (this.topCard.id == 'gameSelector') {
                    this.setGame();
                }

                // throw card in the chosen direction
                this.topCard.style.transform =
                    'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'

                // wait transition end
                setTimeout(() => {
                    // remove swiped card
                    this.board.removeChild(this.topCard)
                    // handle gestures on new top card
                    this.handle()
                }, 200)

            } else {

                // reset cards position and size
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'
            }
        }
    }

    createBoard() {
        let board = document.createElement('div');
        board.id = 'setup-container';
        board.innerHTML =
            `<div class="card"><div class="card-icon">
                    <img src="/static/images/types/bigge.svg"></div>
                <div class="card-data"><p>
                    Hii, superleuk dat je Bigge! komt spelen.
                    Bigge! is het leukste drankspelletje om de avond mee te beginnen of te eindigen!
                    Roep je vienden erbij en swipe deze kaart om te beginnen met het spel! Veel plezier!</p>
                </div>
            </div>`

        document.body.appendChild(board);
        startupContainer = board;
        return board;
    }

    createCard() {
        let card = document.createElement('div');
        let icon = document.createElement('div');
        let data = document.createElement('div');

        card.className = 'card';
        icon.className = 'card-icon';
        data.className = 'card-data';

        icon.innerHTML =
            "<img src='/static/images/types/bigge.svg'>";

            card.appendChild(icon);
        card.appendChild(data);
        return card;
    }

    pushGameSelector() {
        let card = this.createCard();
        card.id = 'gameSelector';

        card.children[1].innerHTML =
            `<div class="radiobtn">
                <input type="radio" name="gameMode" id="standard" checked=true />
                <label for="standard">Standaard</label>
            </div>
            <div class="radiobtn">
                <input type="radio" name="gameMode" id="beerput" />
                <label for="beerput">Beerput</label>
            </div>`

        this.board.insertBefore(card, this.board.firstChild)
    }

    pushAddPlayer() {

        let card = this.createCard();
        card.classList.add('addPlayer');

        let input = document.createElement('input');
        input.type = 'text';
        input.id = 'player' + (this.nPlayers + 1);

        card.children[1].innerHTML =
            `<label for="player${this.nPlayers+1}">
                Speler ${this.nPlayers+1}:
            </label>`;
        card.children[1].appendChild(input);

        //input changed event
        input.oninput = function(){
            if (this.value != '' && !players.includes(this.value) ) {
                if (!card.classList.contains('valid')) card.classList.add('valid');
            } else {
                if (card.classList.contains('valid')) card.classList.remove('valid');
            }
        };

        this.board.insertBefore(card, this.board.firstChild)
        this.nPlayers++;
    }

    addStartButton() {
        let container = this;
        let button = document.createElement('div')
        button.id = 'startGame'
        button.innerHTML = '<p>Spel starten!</p>'

        insertAfter(button, this.board);

        button.addEventListener("click",startGame);

    }

    setGame() {
        beerput = !this.topCard.children[1].firstChild.firstElementChild.checked;
    }

}

class Game {

    constructor() {

        this.board = this.createBoard();

        // add first two cards programmatically
        if (beerput)
            this.push(beerput);
        else
            this.push();

        this.push();

        this.addStartButton();

        // set initial bg color
        document.body.className =
            window.data["meta"]["colors"][this.board.lastChild.firstElementChild.classList[1]];

        // handle gestures
        this.handle()
    }

    handle() {


        // list all cards
        this.cards = this.board.querySelectorAll('.card')

        // get top card
        this.topCard = this.cards[this.cards.length - 1]

        // get next card
        this.nextCard = this.cards[this.cards.length - 2]


        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy()

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }))

            this.hammer.on('pan', (e) => {
                this.onPan(e)
            })

        }

    }

    onPan(e) {

        if (!this.isPanning) {

            this.isPanning = true

            // remove transition properties
            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect()

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom =
                (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        // get new coordinates
        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1

        // get degrees of rotation, between 0 and +/- 45
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        // get scale ratio, between .95 and 1
        let scale = (95 + (5 * Math.abs(propX))) / 100

        // move and rotate top card
        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

        // scale up next card
        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false

            // set back transition properties
            this.topCard.style.transition = 'transform 100ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'

            // check threshold and movement direction
            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true
                // get right border position
                posX = this.board.clientWidth

            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true
                // get left border position
                posX = -(this.board.clientWidth + this.topCard.clientWidth)

            }
            if (successful) {

                this.updateBG();

                // throw card in the chosen direction
                this.topCard.style.transform =
                    'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'

                // wait transition end
                setTimeout(() => {
                    // remove swiped card
                    this.board.removeChild(this.topCard)
                    // add new card
                    this.push()
                    // handle gestures on new top card
                    this.handle()
                }, 200)

            } else {

                // reset cards position and size
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'
            }
        }
    }

    push(explainer) {

        let card = document.createElement('div')
        let icon = document.createElement('div')
        let data = document.createElement('div')

        var newCard = getCard(explainer);

        card.classList.add('card')
        icon.classList.add('card-icon')
        icon.classList.add(newCard['type'])

        icon.innerHTML = "<img src=\"/static/images/types/" + newCard['type'] + ".svg\">";

        data.className = 'card-data'
        data.innerHTML = text

        card.appendChild(icon)
        card.appendChild(data)

        this.board.insertBefore(card, this.board.firstChild)
        fadeIn(card);


    }

    createBoard() {
        let board = document.createElement('div');
        board.id = 'game-container';

        document.body.appendChild(board);
        gameContainer = board;
        return board;
    }

    addStartButton() {
        let container = this;
        let button = document.createElement('div')
        button.id = 'stopGame'
        button.innerHTML = '<p>Spel stoppen!</p>'

        insertAfter(button, this.board);

        button.addEventListener("click",stopGame);

    }

    updateBG() {

        document.body.className = window.data["meta"]["colors"][this.nextCard.firstElementChild.classList[1]];

    }

}

// Buffer containing last n card types
class Buffer {

    constructor() {

        this.types = [];
        this.maxLength = 5;
        this.prevName = "";

    }

    // Add type to buffer
    addType(t) {

        if (this.types.length > this.maxLength) {

            this.types.shift();

        }

        this.types.push(t);
    }

    // Check if type was played too much
    checkType(t) {

        var count = 0;

        for (var e in this.types) {

            if (e == t) {

                count++;
            }

        }

        return count <= 1;
    }

    // Set latest player name
    setPrevName(n) {

        this.prevName = n;

    }

    checkName(n) {

        return n == this.prevName;

    }
}

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        }
        catch (e) {
            console.log(`SW registration failed`);
        }
    }
}


// Get random number in range [min,max)
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// Gets card type
function getType() {

    var probabilities = window.data["meta"]["probabilities"];

    // Generate a number from 1 to probability-sum
    var r = rnd(1, window.data["meta"]["p_sum"]+1);
    var P_key = 0;

    for (var key in probabilities) {

        P_key += probabilities[key];

        if (r <= P_key) {

            return key;
        }
    }
}
// Gets card data
function getCard (explainer) {

    if ( !beerput ) {
        do {

            type = getType();

        } while (!buff.checkType(type));
        buff.addType(type);

        text = window.data[type][ rnd(0, window.data[type].length) ];

    } else {
        type =  'beerput';
        text = window.data[type][ rnd(0, window.data[type].length-1) ];
    }
    if (explainer)
        text = window.data[type][window.data[type].length-1];

    speler0 = players[ rnd(0, players.length) ];

    do {

        speler1 = players[rnd(0, players.length)];

    } while (speler0 == speler1);

    weinig = rnd(2,4)
    aantal = rnd(2,5);
    veel = rnd(5,7)

    text = text.replace(window.s0, speler0)
        .replace(window.s1, speler1)
        .replace(window.a0, weinig)
        .replace(window.a1, aantal)
        .replace(window.a2, veel);

    return {"type": type, "data": text};
}

// Probabilities:
// Baas==Big==Vingeren==Lepeltje : 10 → 5  (20)
// Medusa==MLT==NHIE             : 20 → 10 (30)
// Stemrecht                     : 25 → 20 (20)
// Opdracht                      : 30 → 30 (30)
//                                         +100

function startGame () {
    startupContainer.remove();
    document.getElementById('startGame').remove();
    window.game = new Game();
}
function stopGame () {
    gameContainer.remove();
    document.getElementById('stopGame').remove();
    players = [];
    window.setup = new Startup();
}

function insertAfter (newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
