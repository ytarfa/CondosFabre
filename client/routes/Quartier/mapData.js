const rachel_nodes = ['83895961', '329066842', '329066843', '393665070', '393658870', '463851995', '393865864', '452245718', '452222946', '452222945', '393865865', '463886963', '621514317', '393785994', '463886961', '475009072', '475009069', '475009070', '453940107', '453940116', '463886949', '475308562', '465184061', '465184058', '393785998', '465191913', '465191912', '465192480', '165321653'];
const montRoyal_nodes = ['393886290', '463631222', '464080256', '470242938', '229485293', '471004956', '464106928', '464080257', '452060453', '452060452', '393787289', '464057453', '463886932', '463886933', '393873277', '452101823', '463886941', '463886942', '452101821', '8140255', '452098813', '452098812', '452098812', '4320351', '393792173', '452049816', '452049817', '452096884', '452096883', '463886948', '337509255', '465183712', '4687363', '465195709', '465195711', '465195710', '480212640', '465195712', '453713155', '111771063', '453713154', '393885897']

export const plateau_path = [{lat: 45.5285501, lng: -73.600486}, {lat: 45.5287098, lng: -73.5996974}, {lat: 45.5287419, lng: -73.5995541}, {lat: 45.528785, lng: -73.5993621}, {lat: 45.5290182, lng: -73.5986036}, {lat: 45.5292136, lng: -73.5980296}, {lat: 45.529546, lng: -73.5972189}, {lat: 45.5298992, lng: -73.5965108}, {lat: 45.52996, lng: -73.5964022}, {lat: 45.5301719, lng: -73.5960233}, {lat: 45.5303521, lng: -73.5957169}, {lat: 45.5305026, lng: -73.5954814}, {lat: 45.5306865, lng: -73.5952369}, {lat: 45.5310135, lng: -73.5948319}, {lat: 45.5318947, lng: -73.5937965}, {lat: 45.5348257, lng: -73.590366}, {lat: 45.5356449, lng: -73.5893949}, {lat: 45.5363964, lng: -73.5885287}, {lat: 45.5371028, lng: -73.5876972}, {lat: 45.5374804, lng: -73.5872627}, {lat: 45.5380403, lng: -73.5866028}, {lat: 45.5382038, lng: -73.5864164}, {lat: 45.5384389, lng: -73.5861494}, {lat: 45.5388876, lng: -73.5856024}, {lat: 45.53916, lng: -73.5852591}, {lat: 45.5394156, lng: -73.5848982}, {lat: 45.5397707, lng: -73.5843376}, {lat: 45.5400365, lng: -73.5838508}, {lat: 45.5403267, lng: -73.5832701}, {lat: 45.5405737, lng: -73.5826626}, {lat: 45.5406874, lng: -73.5823649}, {lat: 45.5408743, lng: -73.581811}, {lat: 45.54105, lng: -73.581237}, {lat: 45.5411796, lng: -73.5807032}, {lat: 45.5413045, lng: -73.5801266}, {lat: 45.5413928, lng: -73.5795982}, {lat: 45.5414548, lng: -73.5790564}, {lat: 45.541498, lng: -73.5786044}, {lat: 45.5415243, lng: -73.5783161}, {lat: 45.541545, lng: -73.5778802}, {lat: 45.5415638, lng: -73.577321}, {lat: 45.5415572, lng: -73.5769414}, {lat: 45.5415421, lng: -73.5764506}, {lat: 45.5415271, lng: -73.5762172}, {lat: 45.5414613, lng: -73.5755038}, {lat: 45.5412791, lng: -73.5736021}, {lat: 45.5410631, lng: -73.5714456}, {lat: 45.5408696, lng: -73.5694768}, {lat: 45.5407569, lng: -73.5683235}, {lat: 45.5405408, lng: -73.5662019}, {lat: 45.5403398, lng: -73.5640695}, {lat: 45.5401256, lng: -73.5618594}, {lat: 45.5398731, lng: -73.5593144}, {lat: 45.5398045, lng: -73.559309}, {lat: 45.539686, lng: -73.5593741}, {lat: 45.5391034, lng: -73.5596961}, {lat: 45.538482, lng: -73.5600262}, {lat: 45.5372538, lng: -73.5606832}, {lat: 45.5359164, lng: -73.5613477}, {lat: 45.5288268, lng: -73.5636559}, {lat: 45.5279406, lng: -73.5639033}, {lat: 45.5270121, lng: -73.5641704}, {lat: 45.5232446, lng: -73.5654065}, {lat: 45.5232101, lng: -73.5654175}, {lat: 45.5225901, lng: -73.5655378}, {lat: 45.5219009, lng: -73.5655686}, {lat: 45.5213705, lng: -73.5655828}, {lat: 45.5211633, lng: -73.565615}, {lat: 45.5207452, lng: -73.5657294}, {lat: 45.5198425, lng: -73.5661319}, {lat: 45.5198069, lng: -73.566149}, {lat: 45.5194819, lng: -73.5662755}, {lat: 45.5189318, lng: -73.5665256}, {lat: 45.5178472, lng: -73.5670269}, {lat: 45.5166528, lng: -73.5675917}, {lat: 45.515156, lng: -73.5682912}, {lat: 45.5142472, lng: -73.5686873}, {lat: 45.5139738, lng: -73.5688064}, {lat: 45.513039, lng: -73.5692268}, {lat: 45.5122554, lng: -73.5695561}, {lat: 45.5119968, lng: -73.5696647}, {lat: 45.5118455, lng: -73.5697293}, {lat: 45.5111819, lng: -73.5700132}, {lat: 45.5111044, lng: -73.5700462}, {lat: 45.5110427, lng: -73.5700749}, {lat: 45.5104787, lng: -73.5703354}, {lat: 45.5103826, lng: -73.5703799}, {lat: 45.510176, lng: -73.5704704}, {lat: 45.5093325, lng: -73.5708134}, {lat: 45.5083738, lng: -73.5712791}, {lat: 45.5076856, lng: -73.5716819}, {lat: 45.5066546, lng: -73.5723038}, {lat: 45.5062989, lng: -73.5725103}, {lat: 45.5062462, lng: -73.572541}, {lat: 45.5059162, lng: -73.5727521}, {lat: 45.5055649, lng: -73.5729766}, {lat: 45.5052544, lng: -73.573214}, {lat: 45.5049722, lng: -73.5735001}, {lat: 45.5069233, lng: -73.5774779}, {lat: 45.507102, lng: -73.5778421}, {lat: 45.50745, lng: -73.5785516}, {lat: 45.5082263, lng: -73.5801287}, {lat: 45.5109458, lng: -73.578384}, {lat: 45.5116261, lng: -73.57808}, {lat: 45.5125745, lng: -73.5802406}, {lat: 45.5167918, lng: -73.5893397}, {lat: 45.5166059, lng: -73.5895151}, {lat: 45.5158018, lng: -73.5902916}, {lat: 45.5160891, lng: -73.5908988}, {lat: 45.5161836, lng: -73.591215}, {lat: 45.5162677, lng: -73.5914602}, {lat: 45.5164844, lng: -73.5918681}, {lat: 45.517134, lng: -73.5932402}, {lat: 45.5174682, lng: -73.5940481}, {lat: 45.5175023, lng: -73.5941305}, {lat: 45.517574, lng: -73.5943038}, {lat: 45.5177207, lng: -73.5946587}, {lat: 45.5177542, lng: -73.5946238}, {lat: 45.5178896, lng: -73.5949591}, {lat: 45.5180138, lng: -73.5952669}, {lat: 45.5185921, lng: -73.5965832}, {lat: 45.5186298, lng: -73.596641}, {lat: 45.5187252, lng: -73.5966848}, {lat: 45.5187958, lng: -73.5967237}, {lat: 45.5249003, lng: -73.6105853}, {lat: 45.5255432, lng: -73.6120456}, {lat: 45.5256618, lng: -73.6123681}, {lat: 45.5276444, lng: -73.6087471}, {lat: 45.5279037, lng: -73.6081811}, {lat: 45.5280277, lng: -73.6078486}, {lat: 45.5281574, lng: -73.6073739}, {lat: 45.5282438, lng: -73.6069714}, {lat: 45.528334, lng: -73.6062876}, {lat: 45.5283566, lng: -73.6058477}, {lat: 45.5283472, lng: -73.6051584}, {lat: 45.5283171, lng: -73.6035007}, {lat: 45.5283039, lng: -73.6030715}, {lat: 45.5283146, lng: -73.6025645}, {lat: 45.5283206, lng: -73.602495}, {lat: 45.528352, lng: -73.6019039}, {lat: 45.5285501, lng: -73.600486}];
export const rachel_path = [{lat:45.5399411, lng:-73.5614004}, {lat:45.5398692, lng:-73.5614004}, {lat:45.5395451, lng:-73.5614120}, {lat:45.5395451, lng:-73.5614178}, {lat:45.5394204, lng:-73.5614231}, {lat:45.5392929, lng:-73.5614555}, {lat:45.5391640, lng:-73.5615155}, {lat:45.5390400, lng:-73.5616006}, {lat:45.5390400, lng:-73.5616006}, {lat:45.5384411, lng:-73.5620843}, {lat:45.5379645, lng:-73.5625165}, {lat:45.5373908, lng:-73.5630193}, {lat:45.5373908, lng:-73.5630193}, {lat:45.5368403, lng:-73.5635161}, {lat:45.5368403, lng:-73.5635161}, {lat:45.5362699, lng:-73.5640546}, {lat:45.5362353, lng:-73.5640873}, {lat:45.5356823, lng:-73.5646094}, {lat:45.5356699, lng:-73.5646212}, {lat:45.5351224, lng:-73.5651380}, {lat:45.5345989, lng:-73.5656323}, {lat:45.5341072, lng:-73.5660965}, {lat:45.5341072, lng:-73.5660965}, {lat:45.5333703, lng:-73.5667860}, {lat:45.5333703, lng:-73.5667860}, {lat:45.5332078, lng:-73.5669453}, {lat:45.5327803, lng:-73.5673644}, {lat:45.5327803, lng:-73.5673644}, {lat:45.5327399, lng:-73.5674060}, {lat:45.5321654, lng:-73.5679717}, {lat:45.5321654, lng:-73.5679717}, {lat:45.5317003, lng:-73.5684137}, {lat:45.5312254, lng:-73.5688649}, {lat:45.5305503, lng:-73.5695065}, {lat:45.5305503, lng:-73.5695065}, {lat:45.5298214, lng:-73.5702007}, {lat:45.5298214, lng:-73.5702007}, {lat:45.5291743, lng:-73.5708241}, {lat:45.5291036, lng:-73.5708922}, {lat:45.5285022, lng:-73.5714715}, {lat:45.5283177, lng:-73.5716492}, {lat:45.5279221, lng:-73.5720303}, {lat:45.5279221, lng:-73.5720303}, {lat:45.5274540, lng:-73.5724684}, {lat:45.5269433, lng:-73.5729463},{lat:45.5269433, lng:-73.5729463}, {lat:45.5263926, lng:-73.5734534}, {lat:45.5263926, lng:-73.5734534}, {lat:45.5258147, lng:-73.5739867}, {lat:45.5257199, lng:-73.5741490}, {lat:45.5256509, lng:-73.5743281}, {lat:45.5256509, lng:-73.5743281}, {lat:45.5255915, lng:-73.5745716}, {lat:45.5255358, lng:-73.5747237}, {lat:45.5255358, lng:-73.5747237}, {lat:45.5252047, lng:-73.5750482}, {lat:45.5252047, lng:-73.5750482}, {lat:45.5248650, lng:-73.5753533}, {lat:45.5248650, lng:-73.5753533}, {lat:45.5245707, lng:-73.5756186}, {lat:45.5245707, lng:-73.5756186}, {lat:45.5242844, lng:-73.5758767}, {lat:45.5239843, lng:-73.5761569}, {lat:45.5235214, lng:-73.5765914}, {lat:45.5231594, lng:-73.5769208}, {lat:45.5227964, lng:-73.5772587}, {lat:45.5227964, lng:-73.5772587}, {lat:45.5225757, lng:-73.5774615}, {lat:45.5223497, lng:-73.5776691}, {lat:45.5223497, lng:-73.5776691}, {lat:45.5221245, lng:-73.5778707}, {lat:45.5221245, lng:-73.5778707}, {lat:45.5217940, lng:-73.5781665}, {lat:45.5217940, lng:-73.5781665}, {lat:45.5214623, lng:-73.5784749}, {lat:45.5212077, lng:-73.5787116}, {lat:45.5207592, lng:-73.5791285}, {lat:45.5207592, lng:-73.5791285}, {lat:45.5205369, lng:-73.5793341}, {lat:45.5202855, lng:-73.5795667}, {lat:45.5200289, lng:-73.5798041}, {lat:45.5198291, lng:-73.5799889}, {lat:45.5198291, lng:-73.5799889}, {lat:45.5193723, lng:-73.5804142}, {lat:45.5189296, lng:-73.5808263}, {lat:45.5189296, lng:-73.5808263}, {lat:45.5184878, lng:-73.5812402}, {lat:45.5184878, lng:-73.5812402}, {lat:45.5180147, lng:-73.5816922}, {lat:45.5180147, lng:-73.5816922},{lat:45.5174796, lng:-73.5821904}, {lat:45.5171192, lng:-73.5825044}, {lat:45.5170037, lng:-73.5826042}, {lat:45.5168878, lng:-73.5827143}, {lat:45.5168249, lng:-73.5828148}, {lat:45.5168249, lng:-73.5828148}, {lat:45.5167710, lng:-73.5829015}, {lat:45.5162861, lng:-73.5833404}];
export const parclafontaine_path = [{ lat: 45.5255515, lng: -73.5739117 }, { lat: 45.5256267, lng: -73.5738668 }, { lat: 45.5262057, lng: -73.5733032 }, { lat: 45.5262949, lng: -73.5732912 }, { lat: 45.5264664, lng: -73.5733488 }, { lat: 45.5304767, lng: -73.5694858 }, { lat: 45.5279095, lng: -73.5640322 }, { lat: 45.5234583, lng: -73.5654625 }, { lat: 45.5232751, lng: -73.5655268 }, { lat: 45.5231361, lng: -73.5656006 }, { lat: 45.5221358,lng: -73.5664676 }, { lat: 45.5221159, lng: -73.5665109 }, { lat: 45.5220922, lng: -73.5666385 }, { lat: 45.5253448, lng: -73.5737703 }, { lat: 45.5254275, lng: -73.5738729 }, { lat: 45.5254890, lng: -73.5739050 }, { lat: 45.5255515, lng: -73.5739117 }];
export const montRoyal_path = [{lat:45.5393863, lng:-73.5684807}, {lat:45.5390403, lng:-73.5687516}, {lat:45.5390403, lng:-73.5687516}, {lat:45.5385559, lng:-73.5691961}, {lat:45.5385559, lng:-73.5691961}, {lat:45.5380640, lng:-73.5696771}, {lat:45.5374982, lng:-73.5702253}, {lat:45.5369904, lng:-73.5707143}, {lat:45.5369113, lng:-73.5707910}, {lat:45.5364941, lng:-73.5711808}, {lat:45.5364941, lng:-73.5711808}, {lat:45.5363334, lng:-73.5713371}, {lat:45.5363334, lng:-73.5713371}, {lat:45.5360339, lng:-73.5716250}, {lat:45.5357646, lng:-73.5718751}, {lat:45.5357646, lng:-73.5718751}, {lat:45.5351679, lng:-73.5724466}, {lat:45.5351679, lng:-73.5724466}, {lat:45.5345535, lng:-73.5730187}, {lat:45.5345535, lng:-73.5730187}, {lat:45.5340730, lng:-73.5734886}, {lat:45.5335946, lng:-73.5739301}, {lat:45.5335946, lng:-73.5739301}, {lat:45.5329214, lng:-73.5745709}, {lat:45.5329214, lng:-73.5745709}, {lat:45.5321760, lng:-73.5752746}, {lat:45.5321760, lng:-73.5752746}, {lat:45.5315161, lng:-73.5759008}, {lat:45.5308561, lng:-73.5765220}, {lat:45.5302695, lng:-73.5770767}, {lat:45.5302695, lng:-73.5770767}, {lat:45.5298074, lng:-73.5775263}, {lat:45.5298074, lng:-73.5775263}, {lat:45.5292905, lng:-73.5780151}, {lat:45.5292905, lng:-73.5780151}, {lat:45.5292565, lng:-73.5780476}, {lat:45.5292085, lng:-73.5780936}, {lat:45.5287402, lng:-73.5785265}, {lat:45.5287402, lng:-73.5785265}, {lat:45.5280067, lng:-73.5792084}, {lat:45.5280067, lng:-73.5792084}, {lat:45.5279018, lng:-73.5793030}, {lat:45.5273624, lng:-73.5798146}, {lat:45.5273624, lng:-73.5798146}, {lat:45.5270235, lng:-73.5801347},{lat:45.5270235, lng:-73.5801347}, {lat:45.5264537, lng:-73.5806744}, {lat:45.5264537, lng:-73.5806744}, {lat:45.5259777, lng:-73.5811223}, {lat:45.5259777, lng:-73.5811223}, {lat:45.5257591, lng:-73.5813245}, {lat:45.5257358, lng:-73.5813460}, {lat:45.5255624, lng:-73.5815020}, {lat:45.5255624, lng:-73.5815020}, {lat:45.5255410, lng:-73.5815207}, {lat:45.5252518, lng:-73.5817733}, {lat:45.5252518, lng:-73.5817733}, {lat:45.5252518, lng:-73.5817733}, {lat:45.5249843, lng:-73.5820089}, {lat:45.5249843, lng:-73.5820089}, {lat:45.5249843, lng:-73.5820089}, {lat:45.5245717, lng:-73.5823683}, {lat:45.5245308, lng:-73.5824039}, {lat:45.5245308, lng:-73.5824039}, {lat:45.5244824, lng:-73.5824473}, {lat:45.5243126, lng:-73.5825993}, {lat:45.5243126, lng:-73.5825993}, {lat:45.5240442, lng:-73.5828396}, {lat:45.5239741, lng:-73.5829023}, {lat:45.5239741, lng:-73.5829023}, {lat:45.5238807, lng:-73.5829846}, {lat:45.5236168, lng:-73.5832173}, {lat:45.5236168, lng:-73.5832173}, {lat:45.5234138, lng:-73.5833858}, {lat:45.5233719, lng:-73.5834206}, {lat:45.5229174, lng:-73.5838297}, {lat:45.5224436, lng:-73.5842670}, {lat:45.5222070, lng:-73.5844829}, {lat:45.5221856, lng:-73.5845024}, {lat:45.5221856, lng:-73.5845024}, {lat:45.5219751, lng:-73.5846879}, {lat:45.5219751, lng:-73.5846879}, {lat:45.5219540, lng:-73.5847074}, {lat:45.5216621, lng:-73.5849775}, {lat:45.5216621, lng:-73.5849775}, {lat:45.5215218, lng:-73.5851083}, {lat:45.5211408, lng:-73.5854621}, {lat:45.5210597, lng:-73.5855319}, {lat:45.5208475, lng:-73.5857255}, {lat:45.5206289, lng:-73.5859249},{lat:45.5206289, lng:-73.5859249}, {lat:45.5201178, lng:-73.5863671}, {lat:45.5201178, lng:-73.5863671}, {lat:45.5198435, lng:-73.5866119}, {lat:45.5195946, lng:-73.5868340}, {lat:45.5195946, lng:-73.5868340}, {lat:45.5189858, lng:-73.5873909}, {lat:45.5189324, lng:-73.5874398}, {lat:45.5189324, lng:-73.5874398}, {lat:45.5188512, lng:-73.5875119}, {lat:45.5183671, lng:-73.5879419}, {lat:45.5183671, lng:-73.5879419}, {lat:45.5183084, lng:-73.5879953}, {lat:45.5181814, lng:-73.5881109}, {lat:45.5181814, lng:-73.5881109}, {lat:45.5178920, lng:-73.5883665}, {lat:45.5178920, lng:-73.5883665}, {lat:45.5175494, lng:-73.5886641}, {lat:45.5175494, lng:-73.5886641}, {lat:45.5167918, lng:-73.5893396}, {lat:45.5167918, lng:-73.5893396}, {lat:45.5166059, lng:-73.5895151}, {lat:45.5162802, lng:-73.5898226}, {lat:45.5162802, lng:-73.5898226}, {lat:45.5161673, lng:-73.5899248}, {lat:45.5161673, lng:-73.5899248}, {lat:45.5158690, lng:-73.5902241}, {lat:45.5158018, lng:-73.5902915}];