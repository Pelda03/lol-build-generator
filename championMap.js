// Description: This file contains the champion map, which is a map of champion names to champion objects.

import { aatroxBuild } from "./champs/aatrox.js";
import { ahriBuild } from "./champs/ahri.js";
import { akaliBuild } from "./champs/akali.js";
import { akshanBuild } from "./champs/akshan.js";
import { alistarBuild } from "./champs/alistar.js";
import { amumuBuild } from "./champs/amumu.js";
import { aniviaBuild } from "./champs/anivia.js";
import { annieBuild } from "./champs/annie.js";
import { apheliosBuild } from "./champs/aphelios.js";
import { asheBuild } from "./champs/ashe.js";
import { aurelionsolBuild } from "./champs/aurelionsol.js";
import { azirBuild } from "./champs/azir.js";
import { bardBuild } from "./champs/bard.js";
import { belvethBuild } from "./champs/belveth.js";
import { blitzcrankBuild } from "./champs/blitzcrank.js";
import { brandBuild } from "./champs/brand.js";
import { braumBuild } from "./champs/braum.js";
import { briarBuild} from "./champs/briar.js";
import { caitlynBuild } from "./champs/caitlyn.js";
import { camilleBuild } from "./champs/camille.js";
import { cassiopeiaBuild } from "./champs/cassiopeia.js";
import { chogathBuild } from "./champs/chogath.js";
import { corkiBuild } from "./champs/corki.js";
import { dariusBuild } from "./champs/darius.js";
import { dianaBuild } from "./champs/diana.js";
import { drmundoBuild } from "./champs/dr.mundo.js";
import { dravenBuild } from "./champs/draven.js";
import { ekkoBuild } from "./champs/ekko.js";
import { eliseBuild } from "./champs/elise.js";
import { evelynnBuild } from "./champs/evelynn.js";
import { ezrealBuild } from "./champs/ezreal.js";
import { fiddlesticksBuild } from "./champs/fiddlesticks.js";
import { fioraBuild } from "./champs/fiora.js";
import { fizzBuild } from "./champs/fizz.js";
import { galioBuild } from "./champs/galio.js";
import { gangplankBuild } from "./champs/gangplank.js";
import { garenBuild } from "./champs/garen.js";
import { gnarBuild } from "./champs/gnar.js";
import { gragasBuild } from "./champs/gragas.js";
import { gravesBuild } from "./champs/graves.js";
import { gwenBuild } from "./champs/gwen.js";
import { hecarimBuild } from "./champs/hecarim.js";
import { heimerdingerBuild } from "./champs/heimerdinger.js";
import { illaoiBuild } from "./champs/illaoi.js";
import { ireliaBuild } from "./champs/irelia.js";
import { ivernBuild } from "./champs/ivern.js";
import { jannaBuild } from "./champs/janna.js";
import { jarvanBuild } from "./champs/jarvan.js";
import { jaxBuild } from "./champs/jax.js";
import { jayceBuild } from "./champs/jayce.js";
import { jhinBuild } from "./champs/jhin.js";
import { jinxBuild } from "./champs/jinx.js";
import { kaisaBuild } from "./champs/kaisa.js";
import { kalistaBuild } from "./champs/kalista.js";
import { karmaBuild } from "./champs/karma.js";
import { kartushBuild } from "./champs/karthus.js";
import { kassadinBuild } from "./champs/kassadin.js";
import { katarinaBuild } from "./champs/katarina.js";
import { kayleBuild } from "./champs/kayle.js";
import { kaynBuild } from "./champs/kayn.js";
import { kennenBuild } from "./champs/kennen.js";
import { khazixBuild } from "./champs/khazix.js";
import { kindredBuild } from "./champs/kindred.js";
import { kledBuild } from "./champs/kled.js";
import { kogmawBuild } from "./champs/kogmaw.js";
import { ksanteBuild } from "./champs/ksante.js";
import { leblancBuild } from "./champs/leblanc.js";
import { leesinBuild } from "./champs/leesin.js";
import { leonaBuild } from "./champs/leona.js";
import { lilliaBuild } from "./champs/lillia.js";
import { lissandraBuild } from "./champs/lissandra.js";
import { lucianBuild } from "./champs/lucian.js";
import { luluBuild } from "./champs/lulu.js";
import { luxBuild } from "./champs/lux.js";
import { malphiteBuild } from "./champs/malphite.js";
import { malzaharBuild } from "./champs/malzahar.js";
import { maokaiBuild } from "./champs/maokai.js";
import { masteryiBuild } from "./champs/masteryi.js"; 
import { milioBuild } from "./champs/milio.js";
import { missfortuneBuild } from "./champs/missfortune.js";
import { mordekaiserBuild } from "./champs/mordekaiser.js";
import { morganaBuild } from "./champs/morgana.js";
import { naafiriBuild } from "./champs/naafiri.js";
import { namiBuild } from "./champs/nami.js";
import { nasusBuild } from "./champs/nasus.js";
import { nautilusBuild } from "./champs/nautilus.js";
import { neekoBuild } from "./champs/neeko.js";
import { nidaleeBuild } from "./champs/nidalee.js";
import { nilahBuild } from "./champs/nilah.js";
import { nocturneBuild } from "./champs/nocturne.js";
import { nunuBuild } from "./champs/nunu.js";
import { olafBuild } from "./champs/olaf.js";
import { oriannaBuild } from "./champs/orianna.js";
import { ornnBuild } from "./champs/ornn.js";
import { pantheonBuild } from "./champs/pantheon.js";
import { poppyBuild } from "./champs/poppy.js";
import { pykeBuild } from "./champs/pyke.js";
import { qiyanaBuild } from "./champs/qiyana.js";
import { quinnBuild } from "./champs/quinn.js";
import { rakanBuild } from "./champs/rakan.js";
import { rammusBuild } from "./champs/rammus.js";
import { reksaiBuild } from "./champs/reksai.js";
import { rellBuild } from "./champs/rell.js";
import { renataBuild } from "./champs/renata.js";
import { renektonBuild } from "./champs/renekton.js";
import { rengarBuild } from "./champs/rengar.js";
import { rivenBuild } from "./champs/riven.js";
import { rumbleBuild } from "./champs/rumble.js";
import { ryzeBuild } from "./champs/ryze.js";
import { samiraBuild } from "./champs/samira.js";
import { sejuaniBuild } from "./champs/sejuani.js";
import { sennaBuild } from "./champs/senna.js";
import { seraphineBuild } from "./champs/seraphine.js";
import { settBuild } from "./champs/sett.js";
import { shacoBuild } from "./champs/shaco.js";
import { shenBuild } from "./champs/shen.js";
import { shyvanaBuild } from "./champs/shyvana.js";
import { singedBuild } from "./champs/singed.js";
import { sionBuild } from "./champs/sion.js";
import { sivirBuild } from "./champs/sivir.js";
import { skarnerBuild } from "./champs/skarner.js";
import { sonaBuild } from "./champs/sona.js";
import { sorakaBuild } from "./champs/soraka.js";
import { swainBuild } from "./champs/swain.js";
import { sylasBuild } from "./champs/sylas.js";
import { syndraBuild } from "./champs/syndra.js";
import { tahmkenchBuild } from "./champs/tahmkench.js";
import { taliyahBuild } from "./champs/taliyah.js";
import { talonBuild } from "./champs/talon.js";
import { taricBuild } from "./champs/taric.js";
import { teemoBuild } from "./champs/teemo.js";
import { threshBuild } from "./champs/thresh.js";
import { tristanaBuild } from "./champs/tristana.js";
import { trundleBuild } from "./champs/trundle.js";
import { tryndamereBuild } from "./champs/tryndamere.js";
import { twistedfateBuild } from "./champs/twistedfate.js";
import { twitchBuild } from "./champs/twitch.js";
import { udyrBuild } from "./champs/udyr.js";
import { urgotBuild } from "./champs/urgot.js";
import { varusBuild } from "./champs/varus.js";
import { vayneBuild } from "./champs/vayne.js";
import { veigarBuild } from "./champs/veigar.js";
import { velkozBuild } from "./champs/velkoz.js";
import { vexBuild } from "./champs/vex.js";
import { viBuild } from "./champs/vi.js";
import { viegoBuild } from "./champs/viego.js";
import { viktorBuild } from "./champs/viktor.js";
import { vladimirBuild } from "./champs/vladimir.js";
import { volibearBuild } from "./champs/volibear.js";
import { warwickBuild } from "./champs/warwick.js";
import { wukongBuild } from "./champs/wukong.js";
import { xayahBuild } from "./champs/xayah.js";
import { xerathBuild } from "./champs/xerath.js";
import { xinzhaoBuild } from "./champs/xinzhao.js";
import { yasuoBuild } from "./champs/yasuo.js";
import { yoneBuild } from "./champs/yone.js";
import { yuumiBuild } from "./champs/yuumi.js";
import { zacBuild } from "./champs/zac.js";
import { zedBuild } from "./champs/zed.js";
import { zeriBuild } from "./champs/zeri.js";
import { ziggsBuild } from "./champs/ziggs.js";
import { zileanBuild } from "./champs/zilean.js";
import { zoeBuild } from "./champs/zoe.js";
import { zyraBuild } from "./champs/zyra.js";

const championMap = new Map([

  [aatroxBuild.championName.toLowerCase(), aatroxBuild],
  [ahriBuild.championName.toLowerCase(), ahriBuild],
  [akaliBuild.championName.toLowerCase(), akaliBuild],
  [akshanBuild.championName.toLowerCase(), akshanBuild],
  [alistarBuild.championName.toLowerCase(), alistarBuild],
  [amumuBuild.championName.toLowerCase(), amumuBuild],
  [aniviaBuild.championName.toLowerCase(), aniviaBuild],
  [annieBuild.championName.toLowerCase(), annieBuild],
  [apheliosBuild.championName.toLowerCase(), apheliosBuild],
  [asheBuild.championName.toLowerCase(), asheBuild],
  [aurelionsolBuild.championName.toLowerCase(), aurelionsolBuild],
  [azirBuild.championName.toLowerCase(), azirBuild],
  [bardBuild.championName.toLowerCase(), bardBuild],
  [belvethBuild.championName.toLowerCase(), belvethBuild],
  [blitzcrankBuild.championName.toLowerCase(), blitzcrankBuild],
  [brandBuild.championName.toLowerCase(), brandBuild],
  [braumBuild.championName.toLowerCase(), braumBuild],
  [briarBuild.championName.toLowerCase(), briarBuild], // TO DO: Add the rest of the items
  [caitlynBuild.championName.toLowerCase(), caitlynBuild],
  [camilleBuild.championName.toLowerCase(), camilleBuild],
  [cassiopeiaBuild.championName.toLowerCase(), cassiopeiaBuild],
  [chogathBuild.championName.toLowerCase(), chogathBuild],
  [corkiBuild.championName.toLowerCase(), corkiBuild],
  [dariusBuild.championName.toLowerCase(), dariusBuild],
  [dianaBuild.championName.toLowerCase(), dianaBuild],
  [drmundoBuild.championName.toLowerCase(), drmundoBuild],
  [dravenBuild.championName.toLowerCase(), dravenBuild],
  [ekkoBuild.championName.toLowerCase(), ekkoBuild],
  [eliseBuild.championName.toLowerCase(), eliseBuild],
  [evelynnBuild.championName.toLowerCase(), evelynnBuild],
  [ezrealBuild.championName.toLowerCase(), ezrealBuild],
  [fiddlesticksBuild.championName.toLowerCase(), fiddlesticksBuild],
  [fioraBuild.championName.toLowerCase(), fioraBuild],
  [fizzBuild.championName.toLowerCase(), fizzBuild],
  [galioBuild.championName.toLowerCase(), galioBuild],
  [gangplankBuild.championName.toLowerCase(), gangplankBuild],
  [garenBuild.championName.toLowerCase(), garenBuild], //TO DO: Add garen R icon
  [gnarBuild.championName.toLowerCase(), gnarBuild], //TO DO: Add gnar build
  [gragasBuild.championName.toLowerCase(), gragasBuild],
  [gravesBuild.championName.toLowerCase(), gravesBuild],
  [gwenBuild.championName.toLowerCase(), gwenBuild],
  [hecarimBuild.championName.toLowerCase(), hecarimBuild],
  [heimerdingerBuild.championName.toLowerCase(), heimerdingerBuild],
  [illaoiBuild.championName.toLowerCase(), illaoiBuild],
  [ireliaBuild.championName.toLowerCase(), ireliaBuild],
  [ivernBuild.championName.toLowerCase(), ivernBuild],
  [jannaBuild.championName.toLowerCase(), jannaBuild],
  [jarvanBuild.championName.toLowerCase(), jarvanBuild],
  [jaxBuild.championName.toLowerCase(), jaxBuild],
  [jayceBuild.championName.toLowerCase(), jayceBuild],
  [jhinBuild.championName.toLowerCase(), jhinBuild],
  [jinxBuild.championName.toLowerCase(), jinxBuild],
  [kaisaBuild.championName.toLowerCase(), kaisaBuild],
  [kalistaBuild.championName.toLowerCase(), kalistaBuild],
  [karmaBuild.championName.toLowerCase(), karmaBuild],
  [kartushBuild.championName.toLowerCase(), kartushBuild],
  [kassadinBuild.championName.toLowerCase(), kassadinBuild],
  [katarinaBuild.championName.toLowerCase(), katarinaBuild],
  [kayleBuild.championName.toLowerCase(), kayleBuild],
  [kaynBuild.championName.toLowerCase(), kaynBuild],
  [kennenBuild.championName.toLowerCase(), kennenBuild],
  [khazixBuild.championName.toLowerCase(), khazixBuild],
  [kindredBuild.championName.toLowerCase(), kindredBuild],
  [kledBuild.championName.toLowerCase(), kledBuild],
  [kogmawBuild.championName.toLowerCase(), kogmawBuild],
  [ksanteBuild.championName.toLowerCase(), ksanteBuild],
  [leblancBuild.championName.toLowerCase(), leblancBuild],
  [leesinBuild.championName.toLowerCase(), leesinBuild],
  [leonaBuild.championName.toLowerCase(), leonaBuild],
  [lilliaBuild.championName.toLowerCase(), lilliaBuild],
  [lissandraBuild.championName.toLowerCase(), lissandraBuild],
  [lucianBuild.championName.toLowerCase(), lucianBuild],
  [luluBuild.championName.toLowerCase(), luluBuild],
  [luxBuild.championName.toLowerCase(), luxBuild],
  [malphiteBuild.championName.toLowerCase(), malphiteBuild],
  [malzaharBuild.championName.toLowerCase(), malzaharBuild],
  [maokaiBuild.championName.toLowerCase(), maokaiBuild],
  [masteryiBuild.championName.toLowerCase(), masteryiBuild],
  [milioBuild.championName.toLowerCase(), milioBuild],
  [missfortuneBuild.championName.toLowerCase(), missfortuneBuild],
  [mordekaiserBuild.championName.toLowerCase(), mordekaiserBuild],
  [morganaBuild.championName.toLowerCase(), morganaBuild],
  [naafiriBuild.championName.toLowerCase(), naafiriBuild],
  [namiBuild.championName.toLowerCase(), namiBuild],
  [nasusBuild.championName.toLowerCase(), nasusBuild],
  [nautilusBuild.championName.toLowerCase(), nautilusBuild],
  [neekoBuild.championName.toLowerCase(), neekoBuild],
  [nidaleeBuild.championName.toLowerCase(), nidaleeBuild],
  [nilahBuild.championName.toLowerCase(), nilahBuild],
  [nocturneBuild.championName.toLowerCase(), nocturneBuild],
  [nunuBuild.championName.toLowerCase(), nunuBuild],
  [olafBuild.championName.toLowerCase(), olafBuild],
  [oriannaBuild.championName.toLowerCase(), oriannaBuild],
  [ornnBuild.championName.toLowerCase(), ornnBuild],
  [pantheonBuild.championName.toLowerCase(), pantheonBuild],
  [poppyBuild.championName.toLowerCase(), poppyBuild],
  [pykeBuild.championName.toLowerCase(), pykeBuild],
  [qiyanaBuild.championName.toLowerCase(), qiyanaBuild],
  [quinnBuild.championName.toLowerCase(), quinnBuild],
  [rakanBuild.championName.toLowerCase(), rakanBuild],
  [rammusBuild.championName.toLowerCase(), rammusBuild],
  [reksaiBuild.championName.toLowerCase(), reksaiBuild],
  [rellBuild.championName.toLowerCase(), rellBuild], // TO DO: Complete the build
  [renataBuild.championName.toLowerCase(), renataBuild],
  [renektonBuild.championName.toLowerCase(), renektonBuild],
  [rengarBuild.championName.toLowerCase(), rengarBuild],
  [rivenBuild.championName.toLowerCase(), rivenBuild],
  [rumbleBuild.championName.toLowerCase(), rumbleBuild],
  [ryzeBuild.championName.toLowerCase(), ryzeBuild],
  [samiraBuild.championName.toLowerCase(), samiraBuild],
  [sejuaniBuild.championName.toLowerCase(), sejuaniBuild],
  [sennaBuild.championName.toLowerCase(), sennaBuild],
  [seraphineBuild.championName.toLowerCase(), seraphineBuild],
  [settBuild.championName.toLowerCase(), settBuild],
  [shacoBuild.championName.toLowerCase(), shacoBuild],
  [shenBuild.championName.toLowerCase(), shenBuild],
  [shyvanaBuild.championName.toLowerCase(), shyvanaBuild],
  [singedBuild.championName.toLowerCase(), singedBuild],
  [sionBuild.championName.toLowerCase(), sionBuild],
  [sivirBuild.championName.toLowerCase(), sivirBuild],
  [skarnerBuild.championName.toLowerCase(), skarnerBuild],
  [sonaBuild.championName.toLowerCase(), sonaBuild],
  [sorakaBuild.championName.toLowerCase(), sorakaBuild],
  [swainBuild.championName.toLowerCase(), swainBuild],
  [sylasBuild.championName.toLowerCase(), sylasBuild],
  [syndraBuild.championName.toLowerCase(), syndraBuild],
  [tahmkenchBuild.championName.toLowerCase(), tahmkenchBuild],
  [taliyahBuild.championName.toLowerCase(), taliyahBuild],
  [talonBuild.championName.toLowerCase(), talonBuild],
  [taricBuild.championName.toLowerCase(), taricBuild],
  [teemoBuild.championName.toLowerCase(), teemoBuild],
  [threshBuild.championName.toLowerCase(), threshBuild],
  [tristanaBuild.championName.toLowerCase(), tristanaBuild],
  [trundleBuild.championName.toLowerCase(), trundleBuild],
  [tryndamereBuild.championName.toLowerCase(), tryndamereBuild],
  [twistedfateBuild.championName.toLowerCase(), twistedfateBuild],
  [twitchBuild.championName.toLowerCase(), twitchBuild],
  [udyrBuild.championName.toLowerCase(), udyrBuild],
  [urgotBuild.championName.toLowerCase(), urgotBuild],
  [varusBuild.championName.toLowerCase(), varusBuild],
  [vayneBuild.championName.toLowerCase(), vayneBuild],
  [veigarBuild.championName.toLowerCase(), veigarBuild],
  [velkozBuild.championName.toLowerCase(), velkozBuild],
  [vexBuild.championName.toLowerCase(), vexBuild],
  [viBuild.championName.toLowerCase(), viBuild],
  [viegoBuild.championName.toLowerCase(), viegoBuild],
  [viktorBuild.championName.toLowerCase(), viktorBuild],
  [vladimirBuild.championName.toLowerCase(), vladimirBuild],
  [volibearBuild.championName.toLowerCase(), volibearBuild],
  [warwickBuild.championName.toLowerCase(), warwickBuild],
  [wukongBuild.championName.toLowerCase(), wukongBuild],
  [xayahBuild.championName.toLowerCase(), xayahBuild],
  [xerathBuild.championName.toLowerCase(), xerathBuild],
  [xinzhaoBuild.championName.toLowerCase(), xinzhaoBuild],
  [yasuoBuild.championName.toLowerCase(), yasuoBuild],
  [yoneBuild.championName.toLowerCase(), yoneBuild],
  [yuumiBuild.championName.toLowerCase(), yuumiBuild],
  [zacBuild.championName.toLowerCase(), zacBuild],
  [zedBuild.championName.toLowerCase(), zedBuild],
  [zeriBuild.championName.toLowerCase(), zeriBuild],
  [ziggsBuild.championName.toLowerCase(), ziggsBuild],
  [zileanBuild.championName.toLowerCase(), zileanBuild],
  [zyraBuild.championName.toLowerCase(), zyraBuild],
  [zoeBuild.championName.toLowercase(), zoeBuild],
]);

export default championMap;