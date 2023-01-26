
import { TimeoutError } from 'puppeteer';
import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';



(async ()=>{
    // let links = ['https://discord.com/', 'https://nuro.ai/', 'https://gong.com/', 'https://lyrahealth.com/', 'https://www.guildeducation.com/', 'https://shopmonkey.io/', 'https://www.brex.com/', 'https://brex.com/', 'https://suzy.com/', 'https://ramp.com/', 'https://dispatch.me/', 'https://www.correlation-one.com/', 'https://www.brex.com/', 'http://www.seamless.ai/', 'https://faire.com/', 'https://cerebral.com/', 'https://gong.io/', 'https://www.attentive.com/', 'https://corvusinsurance.com/', 'https://drata.com/', 'https://figma.com/', 'https://www.verkada.com/', 'https://moveworks.com/', 'https://onceuponafarmorganics.com/', 'https://turing.com/', 'https://clickup.com/', 'https://www.hingehealth.com/', 'https://www.gravysolutions.io/', 'https://highspot.com/', 'https://www.medable.com/', 'https://bestow.com/', 'https://dutchie.com/', 'https://hypeauditor.com/', 'https://getaway.house/', 'https://homebound.com/', 'https://www.rippling.com/', 'http://crickethealth.com/', 'https://getplume.co/', 'https://deel.com/', 'https://ripplematch.com/', 'https://calendly.com/', 'https://www.lyrahealth.com/', 'https://petalcard.com/', 'https://springhealth.com/', 'https://masterclass.com/', 'https://www.hingehealth.com/', 'https://hazelhealth.co/', 'https://www.droneup.com/', 'https://odetta.ai/', 'https://liquiddeath.com/', 'https://seekout.com/', 'https://www.sanabenefits.com/', 'https://b12.io/', 'https://lattice.com/', 'https://terminus.com/', 'https://scale.com/', 'https://faire.com/', 'https://esusurent.com/', 'https://industriousoffice.com/', 'https://www.headset.io/', 'https://cameo.com/', 'https://www.sweet.io/', 'https://databricks.com/', 'https://www.get-carrot.com/', 'https://joinblvd.com/', 'https://www.pacaso.com/', 'https://cityblock.com/', 'https://www.meetdandy.com/', 'https://datavant.com/', 'https://gparency.com/', 'https://policygenius.com/', 'https://ritual.com/', 'https://www.redesignhealth.com/', 'https://allbirds.com/', 'https://www.treez.io/', 'https://unstoppabledomains.com/', 'https://www.chilipiper.com/', 'https://kinsta.com/', 'https://www.knoetic.com/', 'https://piano.io/', 'https://www.vuoriclothing.com/', 'https://www.unqork.com/', 'https://www.nuro.ai/', 'https://safegraph.com/', 'https://www.deel.com/', 'https://www.branchmetrics.io/', 'https://equip.health/', 'https://faherty.com/', 'https://www.relativityspace.com/', 'https://rippling.com/', 'https://www.faire.com/', 'https://chime.com/', 'https://www.masterworks.com/', 'https://deepwatch.com/', 'https://www.fractalsoftware.com/', 'https://dataiku.com/', 'https://helloalma.com/', 'https://voltus.co/', 'https://woebothealth.com/']
    let links = ['https://thisisdash.com/', 'https://www.micheleverze.com/', 'https://cinekidfestival.nl/', 'https://stytch.com/', 'https://www.eachandother.com/', 'https://bryantcodes.art/', 'https://www.archi-vandenhaute.be/', 'https://indigov.com/', 'https://2021.malala.org/', 'https://www.alexstreza.dev/', 'https://option5.studio/', 'https://www.wealthsimple.com/', 'https://magic.estudionk.com/', 'http://u-mts.com/', 'https://saasinterface.com/', 'https://mrbeast.basement.studio/', 'https://shareight.com/', 'https://kampr.be/', 'https://www.morrisengineeringllc.com/', 'https://yomi.roguestudios.io/', 'https://www.weareathlon.com/', 'https://tenpixls.com/', 'https://drawaurora.com/', 'https://alexandergarcia.me/', 'https://serieseight.com/', 'https://angrytide.io/', 'https://www.1place.com.au/', 'https://www.case-3d.com/', 'https://desidaru.com/', 'https://www.suku.world/', 'https://marioecg.com/', 'https://www.maisonmastrorelli.com/', 'https://www.ebikestore.nl/en/', 'http://ugistelmokaitis.com/', 'https://www.everstream.ai/', 'https://www.bulleandco.fr/', 'https://www.alba-tools.com.tw/360_inbuilt_kink_free/', 'https://gass.zone/', 'http://www.diverently.com/', 'https://gardenofvegan.com.au/', 'http://bonniehong.com/', 'https://passky.org/', 'https://leyann-studio.com/', 'https://frescocooks.com/', 'https://www.movemedical.com/', 'https://thetournament.com/', 'https://www.akershusfestning.info/', 'https://www.miyagami.com/', 'https://www.fornasettiprofumi.com/', 'https://www.rebel-co.com/', 'http://www.op.ac.nz/', 'https://www.machinefactor.tk/', 'https://www.museothyssen.org/webdocs/conectathyssen/artistas-migrantes/', 'https://dressfordignity.org.au/', 'https://www.oht.hr/en', 'https://www.alixia.com/', 'http://nyctim.es/', 'https://halo.shakuro.com/', 'https://www.offorte.com/', 'https://liftoffcourse.com/', 'https://www.lathamdigitalshowroom.co.uk/', 'https://tenutasangiorgio.com/', 'https://sizzer.nl/', 'https://vercel.com/workflow', 'https://prevalent.ai/', 'https://www.punchlistusa.com/', 'https://www.mosaic.tech/strategic-finance/', 'https://sally-r.com/', 'https://tbs.bg/', 'https://avilis.com.ar/', 'https://ensoul.it/', 'https://walkingmen.com/podcasts/', 'https://godly.shop/product/starter', 'https://lecrans.com/', 'https://notioly.com/', 'https://jugaadprod.com/', 'https://www.smcpackaging.com/', 'https://mthk.com/', 'https://ilovetechnoeurope.com/', 'https://www.base-mag.com/', 'https://www.smashdeltaquest.com/', 'https://www.alastairgray.com/', 'https://themaltaprotests.com/', 'https://outhere-music.com/en', 'https://www.mtb-recycling.fr/', 'https://trendkraft.io/', 'https://www.pilot-in.com/', 'https://www.groupehillstone.com/', 'https://lamalama.nl/', 'https://flowbite.com/', 'https://adarma.com/', 'https://weswwim.com/', 'https://cruip.com/mosaic/', 'https://dearworldleaders.org/', 'https://www.meanpug.com/', 'https://shopify.supply/', 'https://nationalmuseumofmexicanart.org/', 'https://sigurdlewerentz.arkdes.se/en', 'https://branding.shakuro.com/', 'https://www.theartnewspaper.com/', 'https://www.glideapps.com/', 'https://umag-2021-2030.volimumag.hr/', 'https://thecosine.com/', 'https://www.clevershot.co.uk/', 'https://shulman-hill.com/', 'https://fundaciomacba.es/es', 'https://www.fctwente.nl/', 'https://slavakirilenko.com/', 'https://tubijezrodloapple.pl/', 'https://compassionappeal.znstudio.com.au/', 'https://nicovanzyl.com/', 'https://www.aletebewusst.de/', 'https://flameapp.fr/', 'https://proofserve.com/', 'https://coastpay.com/', 'https://simpsonmotorcyclehelmets.eu/', 'https://thursday.studio/', 'https://cometly.com/', 'http://roccat.com/', 'https://moongy.group/', 'https://skybar.ebc.redhat.com/', 'https://www.biggreenegg.co.uk/', 'https://www.slalombuild.com/', 'https://paleoridge.co.uk/', 'https://cameronmcnab.com/', 'https://bravepeople.co/']
    for (let i=0;i<links.length;i++) {
        try {
            console.log("in", links[i])
            await new Promise(async (resolve,reject)=>{
                setTimeout(()=>{
                    reject(new Error("Data fetch failed in "+1000*60*10+" ms"))
                },1000*60*10);
                try {
                let r = await scrape({
                    urls: links[i],
                    directory: `demo/${(new URL(links[i])).hostname}`,
                    sources: [
                        {selector: 'img', attr: 'src'},
                        {selector: 'link[rel="stylesheet"]', attr: 'href'}
                    ],
                    recursive: false,
                    maxRecursiveDepth: 4,
                    plugins: [ 
                      new PuppeteerPlugin({
                        launchOptions: { headless: true }, /* optional */
                        scrollToBottom: { timeout: 10000, viewportN: 10 }, /* optional */
                        blockNavigation: true, /* optional */
                      })
                    ],
                
                })
                resolve()
            }
            catch (e) {
                reject(e)
            }

            })
    
        }
        catch (e) {
            console.log(e)
        }
    }
})()