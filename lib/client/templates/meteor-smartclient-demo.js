if (Meteor.isClient) {

	  var animalsData = [
                {commonName:'Elephant (African)',scientificName:'Loxodonta africana',diet:'Herbivore',lifeSpan:'40-60 years',information:'The African Elephant is the largest of all land animals and also has the biggest brain of any land animal. Both males and females have ivory tusks. Elephants are also wonderful swimmers. Man is the only real enemy of the elephant. Man threatens the elephant by killing it for its tusks and by destroying its habitat.',status:'Threatened'},
                {commonName:'Alligator (American)',scientificName:'Allligator mississippiensis',diet:'Carnivore',lifeSpan:'50 years',information:'In the 16th century, Spanish explorers in what is now Florida encountered a large formidable animal which they called "el largo" meaning "the lizard". The name "el largo" gradually became pronounced "alligator".',status:'Not Endangered'},
                {commonName:'Anteater',scientificName:'Myrmecophaga tridactyla',diet:'Ground dwelling ants/termites',lifeSpan:'25 years',information:'Anteaters can eat up to 35,000 ants daily. Tongue is around 2 feet long and is not sticky but rather covered with saliva. They have very strong sharp claws used for digging up anthills and termite mounds.',status:'Not Endangered'},
                {commonName:'Camel (Arabian Dromedary)',scientificName:'Camelus dromedarius',diet:'Herbivore',lifeSpan:'20-50 years',information:'Can eat any vegetation including thorns. Has one hump for fat storage. Is well known as a beast of burden.',status:'Not Endangered'},
                {commonName:'Bald Eagle',scientificName:'southern subspecies: Haliaeetus leucocephalus leuc',diet:'Carnivore',lifeSpan:'Up to 50 years',information:'Females lay one to three eggs. Visual acuity is 3-4 times greater than a human. Bald eagles build the largest nest of any North American bird. The largest nest found was 3.2 yds (2.9 m) in diameter and 6.7 yds (6.1 m) tall. Protection of the Bald Eagle is afforded by three federal laws: (1) the Endangered Species Act, (2) the Bald Eagle and Golden Eagle Protection Act, and (3) the Migratory Bird Treaty Act.',status:'Endangered'},
                {commonName:'Black Spider Monkey',scientificName:'Ateles panicus',diet:'Herbivore',lifeSpan:'20 years',information:'They can perform remarkable feats with their tails.',status:'Not Endangered'},
                {commonName:'Bottlenosed Dolphin',scientificName:'Tursiops truncatus',diet:'Fish shrimp eels and squid',lifeSpan:'35 years',information:'The bottlenosed dolphin is classified as a toothed whale. They are excellent hunters. They use sound waves to "see" their environment and where they are going through a process known as echolocation.',status:'Dolphins are vulnerable to commercial fishing practices and ocean pollution.'},
                {commonName:'Boa Constrictor(Common)',scientificName:'Boa constrictor constrictor',diet:'Carnivore',lifeSpan:'40 years',information:'Boas kill by constriction, actually suffocating rather than crushing their prey. Spend time in trees but are primarily ground dwellers.',status:'Not Endangered'},
                {commonName:'Screech Owl(Common)',scientificName:'Otus asio',diet:'Carnivore',lifeSpan:'10 years',information:'Generally does not migrate, most common in North America. Three color phases: red, grey and brown.',status:'Not Endangered'},
                {commonName:'Costas Hummingbird',scientificName:'Calypte costae',diet:'Nectar and small insects',lifeSpan:'Up to 12 years',information:'Costas habit of soaring between flower beds is helpful in distinguishing it. Has a preference for red flowers. Males do not participate in nesting or raising young. Of the seven major species breeding in the West, the Costas prefers the driest climates. Nests are frequently held together with spider webs.',status:'Not Endangered'},
                {commonName:'Iguana (Cuban Ground Iguana)',scientificName:'Cyclura nubila nubila',diet:'Fruit and small vertebrates',lifeSpan:'10 years',information:'Easily become obese in captivity so must be fed sparingly. The ability to store up fat helps them to survive during times of drought.',status:'Threatened'},
                {commonName:'Iguana (Desert Iguana)',scientificName:'Dipsosaurus dorsalis',diet:'Plants and insects',lifeSpan:'10 years',information:'Require much heat during the day. When in danger they flee by running in part on hind legs only. Able to remain active up to 115 degrees F; cool off by climbing into low shrubs.',status:'Not Endangered'},
                {commonName:'Emu',scientificName:'Dromaius novaehollandiae',diet:'Herbivore',lifeSpan:'10-20 years',information:'The Emu is Australias largest bird and is second in size only to the ostrich. The Emu does not fly, but can run up to 30 mph (50 kph).',status:'Not currently listed; however, these birds are often exterminated by humans for destroying crops.'},
                {commonName:'Stingray (Freshwater)',scientificName:'Potamotrygen motoro',diet:'Crustaceans worms and mollusks',lifeSpan:'Unknown',information:'Locate their prey by using the digging motion of their pectoral fins to excavate the substrate to expose the animals buried in the sand.',status:'Not Endangered'},
                {commonName:'Octopus (Giant Pacific)',scientificName:'Octopus dofleini',diet:'Carnivore',lifeSpan:'1 to 3 years',information:'This is one of the largest known species of Octopus. Its diet will include almost anything it can overpower. Octopuses constantly flash many colors to blend in instantly with their surroundings. The female dies shortly after laying her eggs.',status:'Not endangered'},
                {commonName:'Zebra (Grants Zebra)',scientificName:'Equus burchelli bohmi',diet:'Herbivore',lifeSpan:'20 years',information:'The stripe patterns of a zebra distinguish one subspecies from another. Zebras have a high resistance to the effects of drought, and they can eat dried grasses. The young are weaned at 6-8 months. Lions and hyenas are enemies.',status:'Not currently listed'},
                {commonName:'Baboon (Guinea Baboon)',scientificName:'Papio papio',diet:'Omnivore',lifeSpan:'25-30 years',information:'These baboons live in large groups which consist of a hierarchical group structure based on a dominating male while breeding occurs; after breeding, the male leaves and a dominant female leads the troop. Much of their time is spent in feeding, grooming, and sleeping.',status:'May become threatened'},
                {commonName:'Howler Monkey',scientificName:'Alouatta spp.',diet:'Herbivore',lifeSpan:'Over 20 years',information:'These animals produce a low growling sound that has been compared to the roar of a lion. These calls can be heard up to 3 km through the forest and are used to communicate danger as well as keeping the troop together.',status:'Endangered'},
                {commonName:'Indian Rock Python',scientificName:'Python molurus molurus',diet:'Carnivore',lifeSpan:'20-30 years',information:'Can become very tame. The Python species are covered by import regulations and are therefore most available as captive bred specimens. Frightening numbers of these snakes have been killed for the leather trade.',status:'Not Endangered'},
                {commonName:'Koala',scientificName:'Phascolarctos cinereus',diet:'Herbivore (Eucalyptus leaves)',lifeSpan:'10-15 years',information:'Koalas do not require water. Males larger than females. Noctural/crepuscular, sleeps up to 19 hours a day. Young are carried on mothers back after leaving pouch.',status:'Protected'},
                {commonName:'Lion',scientificName:'Panthera leo - various subspecies',diet:'Carnivore',lifeSpan:'15 years',information:'Males have manes on cheeks and throat, some species have manes on shoulders and bellies. Young lions have leopard like markings. A pride usually consists of 4-12 related adult females, their offspring and 1-6 adult males. Lions eat animals weighing 110 or 1100 lbs.',status:'Endangered (Asiatic Lion only)'},
                {commonName:'Salamander (Marbled Salamander)',scientificName:'Ambystoma opacum',diet:'Carnivore',lifeSpan:'5 to 8 years',information:'It is a beautiful animal, black with white or silvery bands. Lives well in captivity.',status:'Not Endangered.'},
                {commonName:'Orangutan',scientificName:'Pongo pygmaeus',diet:'Fruits, Vegetation and Birds eggs',lifeSpan:'Up to 50 years',information:'Orangutan means "man of the forest". Enemies include tigers, clouded leopard, humans.',status:'Endangered'},
                {commonName:'Ostrich',scientificName:'Struthio camelus',diet:'Insects, Fruit, seeds and grasses',lifeSpan:'40-50 years',information:'Largest of living birds. Adult males may exceed 8 feet in height and 300 lbs. in weight. In Egypt, the ostrich was the emblem of the Goddess of Truth and Justice.',status:'Endangered'},
                {commonName:'Piranha',scientificName:'Plecostomus - Hypostomus plecostomus',diet:'Carnivore (mainly smaller fish)',lifeSpan:'Unknown',information:'Afraid of nothing; will attack any animal regardless of size. Is attracted by the smell of blood. Considered the most dangerous fish in the Amazon',status:'Not Endangered'},
                {commonName:'Platypus',scientificName:'Ornithorhynchus Anatinus',diet:'Insects and Larvae',lifeSpan:'10-15 years',information:'Were thought to be a hoax when first discovered. The male has a venemous spur on his hind legs.  Capable of many vocalizations including sounds like a growling puppy and a brooding hen.', status:'Not Endangered'},
                {commonName:'Polar Bear',scientificName:'Ursus maritimus',diet:'Carnivore',lifeSpan:'30-40 years',information:'The polar bear is the largest non-aquatic carnivore. Its stomach can hold more than 150 lbs of food. The polar bears fur is water repellant and the individual hairs are clear due to hollow hair shafts. The feet of the polar bear serve as snow boots and as paddles when they are in the water.',status:'Protected in Russia'},
                {commonName:'Tarantula (Red Legged Tarantula AKA Orange Knee Tarantula)',scientificName:'Brachypelma smithi',diet:'Insects, small reptiles and mammals',lifeSpan:'Males - 11 years, Females - 20 years',information:'Tarantulas shed their skin about once a month as hatchlings and will slow down to about once every year or two as adults. Their number one enemy is the Spider Hunting Wasp.',status:'Not Endangered'},
                {commonName:'Gazelle (Thomsons Gazelle)',scientificName:'Gazella thomsoni',diet:'Herbivore',lifeSpan:'10 years',information:'The stiff-legged bouncing movement common to gazelles is called stotting or pronking. They can run quickly, 36 mph (57.6 km/hr), and if fleeing from an enemy, they can run as fast as 48 mph (76.8 km/hr).',status:'Not Currently Listed'}
            ];
	   var animalFields = [
                {name:"commonName", hidden:true, title:"Animal"},
                {name:"scientificName", title:"Scientific Name"},
                {name:"lifeSpan", title:"Life Span"},
                {name:"status",title:"Endangered Species Status"},
                {name:"diet", title:"Diet"},
                {name:"information", title:"Interesting Facts"}
            ];
	   
	   var countryData = [
{
    continent:"North America",
    countryName:"United States",
    countryCode:"US",
    area:9631420,
    population:298444215,
    gdp:12360.0,
    independence:new Date(1776,6,4),
    government:"federal republic",
    government_desc:2,
    capital:"Washington, DC",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/United_states"
},
{
    continent:"Asia",
    countryName:"China",
    countryCode:"CH",
    area:9596960,
    population:1313973713,
    gdp:8859.0,
    government:"Communist state",
    government_desc:0,
    capital:"Beijing",
    member_g8:false,
    article:"http://en.wikipedia.org/wiki/China"
},
{
    continent:"Asia",
    countryName:"Japan",
    countryCode:"JA",
    area:377835,
    population:127463611,
    gdp:4018.0,
    government:"constitutional monarchy with parliamentary government",
    government_desc:1,
    capital:"Tokyo",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/Japan"
},
{
    continent:"Asia",
    countryName:"India",
    countryCode:"IN",
    area:3287590,
    population:1095351995,
    gdp:3611.0,
    independence:new Date(1947,7,15),
    government:"federal republic",
    government_desc:2,
    capital:"New Delhi",
    member_g8:false,
    article:"http://en.wikipedia.org/wiki/India"
},
{
    continent:"Europe",
    countryName:"Germany",
    countryCode:"GM",
    area:357021,
    population:82422299,
    gdp:2504.0,
    independence:new Date(1871,0,18),
    government:"federal republic",
    government_desc:2,
    capital:"Berlin",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/Germany"
},
{
    continent:"Europe",
    countryName:"United Kingdom",
    countryCode:"UK",
    area:244820,
    population:60609153,
    gdp:1830.0,
    independence:new Date(1801,0,1), 
    government:"constitutional monarchy",
    government_desc:1,
    capital:"London",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/United_kingdom"
},
{
    continent:"Europe",
    countryName:"France",
    countryCode:"FR",
    area:547030,
    population:60876136,
    gdp:1816.0,
    government:"republic",
    government_desc:5,
    capital:"Paris",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/France"
},
{
    continent:"Europe",
    countryName:"Italy",
    countryCode:"IT",
    area:301230,
    population:58133509,
    gdp:1698.0,
    independence:new Date(1861,2,17),
    government:"republic",
    government_desc:5,
    capital:"Rome",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/Italy"
},
{
    continent:"Asia",
    countryName:"Russia",
    countryCode:"RS",
    area:17075200,
    population:142893540,
    gdp:1589.0,
    independence:new Date(1991,7,24),
    government:"federation",
    government_desc:3,
    capital:"Moscow",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/Russia"
},
{
    continent:"South America",
    countryName:"Brazil",
    countryCode:"BR",
    area:8511965,
    population:188078227,
    gdp:1556.0,
    independence:new Date(1822,8,7),
    government:"federative republic",
    government_desc:3,
    capital:"Brasilia",
    member_g8:false,
    article:"http://en.wikipedia.org/wiki/Brazil"
},
{
    continent:"North America",
    countryName:"Canada",
    countryCode:"CA",
    area:9984670,
    population:33098932,
    gdp:1114.0,
    independence:new Date(1867,6,1),
    government:"constitutional monarchy with parliamentary democracy and federation",
    government_desc:1,
    capital:"Ottawa",
    member_g8:true,
    article:"http://en.wikipedia.org/wiki/Canada"
},
{
    continent:"North America",
    countryName:"Mexico",
    countryCode:"MX",
    area:1972550,
    population:107449525,
    gdp:1067.0,
    independence:new Date(1810,8,16),
    government:"federal republic",
    government_desc:2,
    capital:"Mexico (Distrito Federal)",
    member_g8:false,
    article:"http://en.wikipedia.org/wiki/Mexico"
},
{
    continent:"Europe",
    countryName:"Spain",
    countryCode:"SP",
    area:504782,
    population:40397842,
    gdp:1029.0,
    independence:new Date(1492,0,1),
    government:"parliamentary monarchy",
    government_desc:4,
    capital:"Madrid",
    member_g8:false,
    article:"http://en.wikipedia.org/wiki/Spain"
},
{
    continent:"Asia",
    countryName:"South Korea",
    countryCode:"KS",
    area:98480,
    population:48846823,
    gdp:965.3,
    independence:new Date(1945,7,15),
    government:"republic",
    government_desc:5,
    capital:"Seoul",
    member_g8:false,
    article:"http://en.wikipedia.org/wiki/South_korea"
},
{
    continent:"Asia",
    countryName:"Indonesia",
    countryCode:"ID",
    area:1919440,
    population:245452739,
    gdp:865.6,
    independence:new Date(1945,7,17),
    government:"republic",
    government_desc:5,
    capital:"Jakarta",
    member_g8:false,
    article:"http://en.wikipedia.org/wiki/Indonesia"
}
	   ];

		Template.meteorSmartclientDemoExample1.onRendered(function() {
	  		  isc.ListGrid.create({
				    ID: "countryList2",
				    htmlElement: "meteorSmartclientDemoExample1",
				    width:800, height:400, alternateRecordStyles:true,
				    data: countryData,
				    fields:[
				        {name:"countryName", title:"Country"},
				        {name:"capital", title:"Capital", showIf:"false"},
				        {name:"continent", title:"Continent"}
				    ],
				    canReorderFields: true
				})
		});

		Template.meteorSmartclientDemoExample2.onRendered(function() {
				ListGrid.create({
	  			    ID:"animalList3",
				    htmlElement: "meteorSmartclientDemoExample2",
	  			    data:animalsData,
	  			    sortFieldNum:2,
	  			    
	  			    fields:animalFields,
	  			    canReorderRecords:true,
	  			    width:800,
	  			    height:600,
	  			    alternateRecordStyles:true
	  			});
		});


}
