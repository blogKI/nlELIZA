// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]


var elizaInitials = [
"Hoe gaat het met je. Vertel me alsjeblieft wat je probleem is.",
// toevoegingen (niet origineel)
"Vertel me is wat je dwars zit.",
"Maak je je ergens druk om?"
];

var elizaFinals = [
"Tot ziens. Het was fijn om met je te praten.",
// toevoegingen (niet origineel)
"Tot ziens. Dit was echt een leuk gesprek.",
"Tot ziens. Ik kijk uit naar onze volgende sessie.",
"Dit was een goede sessie, nietwaar - maar de tijd is voorbij. Tot ziens.",
"Misschien kunnen we dit ook bespreken in onze volgende sessie? Tot ziens."
];

var elizaQuits = [
"doei",
"tot ziens",
"gedaan",
"Uitgang",
"stoppen"
];

var elizaPres = [
"niet doen", "niet doen",
"kan niet", "kan niet",
"niet", "niet",
"herinneren", "onthouden",
"herinneren", "onthouden",
"gedroomd", "gedroomd",
"dromen", "dromen",
"misschien wellicht",
"zeker", "ja",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"waren was",
"Jij bent jij bent",
"ik ben ik ben",
"hetzelfde", "gelijk",
"identiek", "gelijk",
"equivalent", "gelijk"
];

var elizaPosts = [
"ben", "zijn",
"jouw mijn",
"ik jij",
"ikzelf jijzelf",
"jijzelf mijzelf",
"ik jij",
"jij ik",
"mijn Jouw",
"ik ben", "jij bent"
];

var elizaSynons = {
"be": ["ben", "is", "are", "was"],
"geloof": ["voel", "denk", "geloof", "wens"],
"kan niet": ["kan niet"],
"desire": ["want", "need"],
"iedereen": ["iedereen", "niemand", "niemand"],
"familie": ["moeder", "moeder", "vader", "vader", "zus", "broer", "vrouw", "kinderen", "kind"],
"blij": ["opgetogen", "blij", "beter"],
"verdrietig": ["ongelukkig", "depressief", "ziek"]
};

var elizaKeywords = [

/*
  Matrix van
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Ik weet niet zeker of ik je helemaal begrijp.",
     "Ga door alsjeblieft.",
     "Wat suggereert dat voor jou?",
     "Vind je het belangrijk om zulke dingen te bespreken?",
     "Dat is interessant. Ga alsjeblieft verder.",
     "Vertel me daar meer over.",
     'Vind je het erg om hierover te praten?'
  ]]
]],
["sorry", 0, [
 ["*", [
     "Gelieve geen excuses aan te bieden.",
     "Excuses zijn niet nodig.",
     "Ik heb je gezegd dat excuses niet vereist zijn.",
     'Het deerde me niet. Ga alsjeblieft verder.'
  ]]
]],
["excuses", 0, [
 ["*", [
     "ga sorry"
  ]]
]],
["onthouden", 5, [
 ["* ik herinner me *", [
     "Denk je vaak aan (2)?",
     "Brengt het denken aan (2) iets anders in gedachten?",
     "Wat herinner je je nog meer?",
     "Waarom herinner je je (2) zojuist?",
     "Waaraan doet u in de huidige situatie denken aan (2)?",
     "Wat is het verband tussen mij en (2)?",
     "Waar herinnert (2) u nog meer aan?"
  ]],
 ["* weet je nog *", [
     "Dacht je dat ik (2) zou vergeten?",
     "Waarom denk je dat ik me (2) nu moet herinneren?",
     "Hoe zit het met (2)?",
     "goto wat",
     "U noemde (2)?"
  ]],
 ["* weet je nog *", [
     "Hoe kon ik (2) vergeten?",
     "Hoe zit het met (2) moet ik onthouden?",
     "goto jij"
  ]]
]],
["vergeten", 5, [
 ["* ik vergeet *", [
     "Kun je bedenken waarom je (2) misschien vergeet?",
     "Waarom kan je je (2) niet herinneren?",
     "Hoe vaak denk je aan (2)?",
     "Vind je het vervelend dat te vergeten?",
     "Zou het een mentale blokkade kunnen zijn?",
     "Bent u over het algemeen vergeetachtig?",
     "Denk je dat je (2) onderdrukt?"
  ]],
 ["* ben je vergeten *", [
     "Waarom wil je dat weten ?",
     "Weet je zeker dat je het me verteld hebt?",
     "Zou het je storen als ik het vergeten was (2)?",
     "Waarom zou ik me (2) zojuist herinneren?",
     "goto wat",
     "Vertel me meer over (2)."
  ]]
]],
["if", 3, [
 ["* als *", [
     "Denk je dat het waarschijnlijk is dat (2)?",
     "Wens je dat (2)?",
     "Wat weet u over (2)?",
     "Echt, als (2)?",
     "Wat zou u doen als (2)?",
     "Maar wat is de kans dat (2)?",
     "Waar leidt deze speculatie toe?"
  ]]
]],
["gedroomd", 4, [
 ["* ik droomde *", [
     "Echt, (2)?",
     "Heb je ooit gefantaseerd (2) terwijl je wakker was?",
     "Heb je ooit eerder gedroomd (2)?",
     "goto droom"
  ]]
]],
["droom", 3, [
 ["*", [
     "Wat suggereert die droom je?",
     "Droom je vaak?",
     "Welke personen verschijnen in uw dromen?",
     'Geloof je dat dromen iets met je probleem te maken hebben?'
  ]]
]],
["misschien", 0, [
 ["*", [
     "Je lijkt niet helemaal zeker.",
     "Waarom de onzekere toon?",
     "Kun je niet positiever zijn?",
     "Weet je het niet zeker?",
     "Weet je het niet?",
     'Hoe waarschijnlijk is het, schat u?'
  ]]
]],
["naam", 15, [
 ["*", [
     "Ik ben niet geïnteresseerd in namen.",
     'Ik heb je al eerder verteld dat namen me niets schelen - ga alsjeblieft verder.'
  ]]
]],
["deutsch", 0, [
 ["*", [
     "ga naar xforeign",
     'Ik heb je al eerder gezegd dat ik geen Duits versta.'
  ]]
]],
["francais", 0, [
 ["*", [
     "ga naar xforeign",
     'Ik heb je al eerder gezegd dat ik geen Frans versta.'
  ]]
]],
["italiano", 0, [
 ["*", [
     "ga naar xforeign",
     'Ik heb je al eerder gezegd dat ik geen Italiaans versta.'
  ]]
]],
["espanol", 0, [
 ["*", [
     "ga naar xforeign",
     'Ik heb je al eerder gezegd dat ik geen Spaans versta.'
  ]]
]],
["xforeign", 0, [
 ["*", [
     "Ik spreek alleen Engels."
  ]]
]],
["hallo", 0, [
 ["*", [
     "Hoe maakt u het. Geef uw probleem aan.",
     'Hallo. Wat lijkt jouw probleem te zijn?'
  ]]
]],
["computer", 50, [
 ["*", [
     "Maak je je zorgen over computers?",
     "Waarom noem je computers?",
     "Wat denkt u dat machines met uw probleem te maken hebben?",
     "Denk je niet dat computers mensen kunnen helpen?",
     "Hoe zit het met machines maakt u zich zorgen?",
     "Wat vind je van machines?",
     'Je denkt toch niet dat ik een computerprogramma ben?'
  ]]
]],
["ben", 0, [
 ["* ben ik *", [
     "Gelooft u dat u (2) bent?",
     "Zou je willen zijn (2)?",
     "Zou je willen dat ik je zou vertellen dat je (2) bent?",
     "Wat zou het betekenen als je (2) was?",
     "goto wat"
  ]],
 ["* ik ben *", [
     "goto ik"
  ]],
 ["*", [
     "Waarom zeg je 'ben'?",
     "Ik begrijp dat niet."
  ]]
]],
["zijn", 0, [
 ["* ben jij *", [
     "Waarom ben je geïnteresseerd in of ik (2) ben of niet?",
     "Zou je liever hebben als ik niet (2) was?",
     "Misschien ben ik (2) in uw fantasieën.",
     "Denk je wel eens dat ik ben (2)?",
     "goto wat",
     "Zou het u iets kunnen schelen?",
     "Wat als ik (2) was?"
  ]],
 ["* je bent *", [
     "goto jij"
  ]],
 ["* zijn *", [
     "Dacht je dat ze misschien niet (2) zijn?",
     "Zou je het leuk vinden als ze niet (2) waren?",
     "Wat als ze dat niet waren (2)?",
     "Zijn ze altijd (2)?",
     "Mogelijk zijn ze (2).",
     "Weet je zeker dat ze (2) zijn?"
  ]]
]],
["jouw", 0, [
 ["* uw *", [
     "Waarom maak je je zorgen over mijn (2)?",
     "Hoe zit het met uw eigen (2)?",
     "Maak je je zorgen over de (2) van iemand anders?",
     "Echt, mijn (2)?",
     "Waar denk je aan mijn (2)?",
     "Wil je mijn (2)?"
  ]]
]],
["was", 2, [
 ["* was ik *", [
     "Wat als je (2) was?",
     "Denk je dat je (2) was?",
     "Was jij (2)?",
     "Wat zou het betekenen als je (2) was?",
     "Wat stelt '(2)' u voor?",
     "goto wat"
  ]],
 ["* ik was *", [
     "Was je dat echt?",
     "Waarom vertel je me dat je nu (2) was?",
     "Misschien weet ik al dat je (2) was."
  ]],
 ["* was je *", [
     "Zou je willen geloven dat ik (2) was?",
     "Wat suggereert dat ik (2) was?",
     "Wat denk je ?",
     "Misschien was ik (2).",
     "Wat als ik (2) was geweest?"
  ]]
]],
["ik", 0, [
 ["* ik verlang *", [
     "Wat zou het voor u betekenen als u (3) kreeg?",
     "Waarom wil je (3)?",
     "Stel dat je (3) binnenkort hebt.",
     "Wat als je (3) nooit hebt gekregen?",
     "Wat zou het krijgen van (3) voor jou betekenen?",
     "Wat heeft willen (3) te maken hebben met deze discussie?"
  ]],
 ["* Ik ben verdrietig *", [
     "Het spijt me te horen dat u (3) bent.",
     "Denk je dat het je zal helpen om hier niet (3) te zijn?",
     "Ik weet zeker dat het niet prettig is om (3) te zijn.",
     "Kun je uitleggen wat je (3) maakte?"
  ]],
 ["* ik ben blij *", [
     "Hoe heb ik je geholpen om (3) te zijn?",
     "Heeft uw behandeling u (3) gemaakt?",
     "Wat maakt jou (3) zojuist?",
     "Kun je uitleggen waarom je ineens (3) bent?"
  ]],
 ["* ik was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Denk je dat echt ?",
     "Maar je weet het niet zeker (3).",
     "Twijfel je echt aan jou (3)?"
  ]],
 ["* i * @belief * you *", [
     "goto jij"
  ]],
 ["* ik ben *", [
     "Is het omdat je (2) bent dat je naar mij kwam?",
     "Hoe lang ben je al (2)?",
     "Gelooft u dat het normaal is om (2) te zijn?",
     "Vind je het leuk om (2) te zijn?",
     "Kent u iemand anders die (2) is?"
  ]],
 ["* ik kan niet *", [
     "Hoe weet je dat je niet (3) kunt?",
     "Heb je geprobeerd ?",
     "Misschien zou je (3) nu kunnen.",
     "Wil je echt in staat zijn om (3)?",
     "Wat als je zou kunnen (3)?"
  ]],
 ["* ik niet *", [
     "Ben je niet echt (2)?",
     "Waarom niet (2)?",
     "Wilt u (2) kunnen?",
     'Vind je dat erg?'
  ]],
 ["* ik voel *", [
     "Vertel me meer over zulke gevoelens.",
     "Voel je vaak (2)?",
     "Geniet je van gevoel (2)?",
     "Waaraan herinnert gevoel (2) u eraan?"
  ]],
 ["* ik jij *", [
     "Misschien in uw fantasieën wij (2) elkaar.",
     "Wilt u mij (2)?",
     "Je lijkt me nodig te hebben (2).",
     "Heeft u (2) iemand anders?"
  ]],
 ["*", [
     "U zegt (1)?",
     "Kun je daar wat meer over zeggen?",
     "Zeg je (1) om een ​​speciale reden?",
     "Dat is best interessant."
  ]]
]],
["jij", 0, [
 ["* je doet me denken aan *", [
     "ga gelijk"
  ]],
 ["* je bent *", [
     "Waarom denk je dat ik ben (2)?",
     "Vindt u het prettig te geloven dat ik (2) ben?",
     "Zou je soms willen dat je (2) was?",
     "Misschien zou je wel (2) willen zijn."
  ]],
["* jij ik *", [
     "Waarom denk je dat ik (2) jou?",
     "Je vindt het leuk om te denken dat ik (2) jou - nietwaar?",
     "Waarom denk je dat ik (2) jou?",
     "Echt, ik (2) jou?",
     "Wil je geloven dat ik (2) jou?",
     "Stel dat ik jou (2) deed - wat zou dat betekenen?",
     "Gelooft iemand anders dat ik (2) jou?"
  ]],
 ["* u *", [
     "We hadden het over jou - niet over mij.",
     "Oh, ik (2)?",
     "Je hebt het niet echt over mij - of wel?",
     "Wat zijn je gevoelens nu?"
  ]]
]],
["ja", 0, [
 ["*", [
     "Je komt positief over.",
     "Je bent zeker van je zaak.",
     "Ik zie het.",
     "Ik begrijp je."
  ]]
]],
["nee", 0, [
 ["* niemand *", [
     "Weet je het zeker, niemand (2)?",
     "Zeker iemand (2).",
     "Kun je überhaupt iemand bedenken?",
     "Denk je aan een heel bijzonder persoon?",
     "Wie mag ik vragen?",
     "Je hebt een bepaald persoon in gedachten, nietwaar?",
     'Over wie denk je dat je het hebt?'
  ]],
 ["*", [
     "Zeg je nee om negatief te zijn?",
     "Je bent een beetje negatief.",
     "Waarom niet ?",
     "Waarom Nee' ?"
  ]]
]],
["mijn", 2, [
 ["$ * mijn *", [
     "Heeft dat iets te maken met het feit dat uw (2)?",
     "Laten we verder bespreken waarom uw (2).",
     "Eerder zei u uw (2).",
     "Maar uw (2)."
  ]],
 ["* mijn familie *", [
     "Vertel me meer over je familie.",
     "Wie nog meer in uw familie (4)?",
     "Uw (3)?",
     "Wat komt er nog meer in je op als je aan je (3) denkt?"
  ]],
 ["* mijn *", [
     "Uw (2)?",
     "Waarom zeg je je (2)?",
     "Suggereert dat iets anders dat van jou is?",
     "Vind je het belangrijk dat je (2)?"
  ]]
]],
["kan", 0, [
 ["* kunt u *", [
     "Je gelooft dat ik het kan (2) nietwaar?",
     "goto wat",
     "Je wilt dat ik in staat ben om (2).",
     "Misschien zou je graag (2) jezelf willen kunnen."
  ]],
 ["* kan ik *", [
     "Of je het wel of niet kunt (2) hangt meer van jou af dan van mij.",
     "Wil je in staat zijn om (2)?",
     "Misschien wil je niet (2).",
     "goto wat"
  ]]
]],
["wat", 0, [
 ["*", [
     "Waarom wil je dat weten ?",
     "Interesseert die vraag je?",
     "Wat wil je echt weten?",
     "Zit u veel aan dergelijke vragen?",
     "Welk antwoord zou je het meest bevallen?",
     "Wat denk je ?",
     "Waar denk je aan als je dat vraagt?",
     "Heeft u al eerder dergelijke vragen gesteld?",
     'Heb je het iemand anders gevraagd?'
  ]]
]],
["wie", 0, [
 ["wie *", [
     "goto wat"
  ]]
]],
["wanneer", 0, [
 ["wanneer *", [
     "goto wat"
  ]]
]],
["waar", 0, [
 ["waar *", [
     "goto wat"
  ]]
]],
["hoe", 0, [
 ["hoe *", [
     "goto wat"
  ]]
]],
["omdat", 0, [
 ["*", [
     "Is dat de echte reden?",
     "Komt er geen andere reden in je op?",
     "Lijkt die reden nog iets anders te verklaren?",
     "Welke andere redenen kunnen er zijn?"
  ]]
]],
["waarom", 0, [
 ["* waarom niet *", [
     "Geloof je dat ik het niet doe (2)?",
     "Misschien zal ik (2) op tijd.",
     "Moet je (2) jezelf?",
     "Wil je dat ik (2)?",
     "goto wat"
  ]],
 ["* waarom kan ik niet *", [
     "Vind je dat je zou moeten kunnen (2)?",
     "Wil je in staat zijn om (2)?",
     "Gelooft u dat dit u zal helpen om (2)?",
     "Heb je enig idee waarom je dat niet kunt (2)?",
     "goto wat"
  ]],
 ["*", [
     "goto wat"
  ]]
]],
["iedereen", 2, [
 ["* @iedereen *", [
     "Echt, (2)?",
     "Zeker niet (2).",
     "Kun je iemand in het bijzonder bedenken?",
     "Wie, bijvoorbeeld?",
     "Denk je aan een heel bijzonder persoon?",
     "Wie mag ik vragen?",
     "Iemand speciaal misschien?",
     "Je hebt een bepaald persoon in gedachten, nietwaar?",
     'Over wie denk je dat je het hebt?'
  ]]
]],
["iedereen", 2, [
 ["*", [
     "goto iedereen"
  ]]
]],
["niemand", 2, [
 ["*", [
     "goto iedereen"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto iedereen"
  ]]
]],
["altijd", 1, [
 ["*", [
     "Kun je een specifiek voorbeeld bedenken?",
     "Wanneer ?",
     "Aan welk incident denk je?",
     "Echt, altijd?"
  ]]
]],
["gelijk", 10, [
 ["*", [
     "Op welke manier ?",
     "Welke gelijkenis zie je?",
     "Wat suggereert die gelijkenis voor jou?",
     "Welke andere verbindingen zie je?",
     "Wat denk je dat gelijkenis betekent?",
     "Wat is het verband, denk je?",
     "Zou er echt een verband kunnen zijn?",
     "Hoe ?"
  ]]
]],
["like", 10, [
 ["* @wees als *", [
     "ga gelijk"
  ]]
]],
["anders", 0, [
 ["*", [
     "Hoe is het anders?",
     "Welke verschillen zie je?",
     "Wat suggereert dat verschil voor jou?",
     "Welke andere onderscheidingen zie je?",
     "Wat denk je dat ongelijkheid betekent?",
     "Zou er een verband kunnen zijn, denk je?",
     "Hoe ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof