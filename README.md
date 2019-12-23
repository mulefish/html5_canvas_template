# What
This project is a stab of displaying a project tree. 
This will take a json file generated from madge (( madge -j -d someBigProject ) : https://www.npmjs.com/package/madge ) and make an interactive data-viz from it. 

# Stack
React + html5 canvas

# Dummy data
See file named 'fake.json'. It would generated from mock-shape-maker.js

# Data shape example
{ \
  "src/request/type2/Old_World_sparrows": [], \
  "server/database/Saxaul_sparrow": [], \
  "src/controller/House_sparrow": [ \
    "test/jest/Yellow-throated_sparrow" \
  ], \
  "src/controller/Italian_sparrow": [], \
  "src/controller/Spanish_sparrow": [], \
  "src/resourcesSind_sparrow": [ \
    "test/resources/Abd_al-Kuri_sparrow" \
  ], \
  "src/request/type2/Somali_sparrow": [], \
  "src/resourcesRusset_sparrow": [], \
  "test/jest/Plain-backed_sparrow": [ \
    "react" \
  ] \
}