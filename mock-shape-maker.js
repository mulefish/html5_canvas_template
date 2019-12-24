// Create a tree that mimicks the output of madge
// madge -j -d someBigProject
// https://www.npmjs.com/package/madge

const numberOfFiles = 100 // I.e., how complex will this tree be

// Pretend directories
const dirs = [
    "src/controller/",
    "src/utils/",
    "src/resources",
    "src/request/type1/",
    "src/request/type2/",
    "test/jest/",
    "test/resources/",
    "server/database/",
    "server/cache/"
]

// Pretend directories
const externals = [
    "react",
    "react-dom",
    "@MaterialUI",
    "@Material",
    "@_"
]



// Pretend files 
let files = [ 
"Old_World_sparrows",
"Saxaul_sparrow",
"House_sparrow",
"Italian_sparrow",
"Spanish_sparrow",
"Sind_sparrow",
"Somali_sparrow",
"Russet_sparrow",
"Plain-backed_sparrow",
"Dead_Sea_sparrow",
"Iago_sparrow",
"Great_sparrow",
"Kenya_sparrow",
"Kordofan_sparrow",
"Shelley's_sparrow",
"Socotra_sparrow",
"Abd_al-Kuri_sparrow",
"Cape_sparrow",
"Northern_grey-headed_sparrow",
"Swainson's_sparrow",
"Parrot-billed_sparrow",
"Swahili_sparrow",
"Southern_grey-headed_sparrow",
"Desert_sparrow",
"Eurasian_tree_sparrow",
"Sudan_golden_sparrow",
"Arabian_golden_sparrow",
"Chestnut_sparrow",
"Rock_sparrows",
"Yellow-spotted_petronia",
"Yellow-throated_sparrow",
"Yellow-throated_petronia",
"Bush_petronia",
"Rock_sparrow",
"Snowfinches_(sparrows)",
"White-winged_snowfinch",
"Black-winged_snowfinch",
"White-rumped_snowfinch",
"Pere_David's_snowfinch",
"Rufous-necked_snowfinch",
"Plain-backed_snowfinch",
"Afghan_snowfinch",
"Weavers",
"Sociable_weaver",
"White-billed_buffalo_weaver",
"Speckle-fronted_weaver",
"White-headed_buffalo_weaver",
"Cape_weaver",
"Southern_masked_weaver",
"Jackson's_widowbird",
"Spectacled_weaver",
"Red-billed_quelea",
"Waxbills_and_relatives",
"Green-winged_pytilia",
"Pink-throated_twinspot",
"Cut-throat_finch",
"Western_bluebill",
"Red-billed_firefinch",
"Purple_grenadier",
"Black-rumped_waxbill",
"Orange-breasted_waxbill",
"Painted_finch",
"Zebra_finch",
"Red-browed_finch",
"Blue-faced_parrotfinch",
"Gouldian_finch",
"Chestnut_munia",
"Java_sparrow"
] 
// Set the fullpath for each file
let seen = {} 
files.forEach((file, i) => { 
    if ( i < numberOfFiles ) {
        const dir = dirs[Math.floor(Math.random()*dirs.length)];
        const fullName = dir + file
        seen[fullName] = []    
    }
})
// Overwrite the files array so that they have their fullpaths 
files = Object.keys(seen)

// Set dependancies of each file 
Object.keys(seen).forEach((key)=>{
    let ignore = new Set()
    ignore.add(key)
    // For logic internal to the project
    for ( let i = 0 ; i < 5; i++) {
        const r = Math.random() 
        if ( r > 0.9 ) {
            const candidate = files[Math.floor(Math.random()*files.length)];
            if ( ignore.has(candidate)) {
                // do nothing 
            } else {
                seen[key].push(candidate)
            }
            ignore.add(candidate)
        }
    }

    // For logic external to the project ( e.g., a react module)
    ignore = new Set()
    for ( let i = 0 ; i < 3; i++) {
        const r = Math.random() 
        if ( r > 0.9 ) {
            const candidate = externals[Math.floor(Math.random()*externals.length)];
            if ( ignore.has(candidate)) {
                // do nothing 
            } else {
                seen[key].push(candidate)
            }
            ignore.add(candidate)
        }
    }



})
console.log( JSON.stringify(seen, null, 2 ))




