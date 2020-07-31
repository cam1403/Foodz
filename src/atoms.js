import { atom, selector } from 'recoil';

const searchState = atom({
  key: 'searchState',
  default: '',
});

const currentSearch = atom({
  key: 'currentSearch',
  default: 'a',
});

const userData = atom({
  key: 'userData',
  default: [],
});

const inStock = atom({
  key: 'inStock',
  default: [],
});

const apiData = atom({
  key: 'apiData',
  default: [
    {
      food: {
        foodId: 'food_bhpradua77pk16aipcvzeayg732r',
        label: 'egg',
        nutrients: {
          ENERC_KCAL: 143.0,
          PROCNT: 12.56,
          FAT: 9.51,
          CHOCDF: 0.72,
          FIBTG: 0.0,
        },
        category: 'Generic foods',
        categoryLabel: 'food',
        image:
          'https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
          qualified: [
            {
              qualifiers: [
                {
                  uri:
                    'http://www.edamam.com/ontologies/edamam.owl#Qualifier_extra_large',
                  label: 'extra large',
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri:
                    'http://www.edamam.com/ontologies/edamam.owl#Qualifier_large',
                  label: 'large',
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri:
                    'http://www.edamam.com/ontologies/edamam.owl#Qualifier_small',
                  label: 'small',
                },
              ],
            },
            {
              qualifiers: [
                {
                  uri:
                    'http://www.edamam.com/ontologies/edamam.owl#Qualifier_medium',
                  label: 'medium',
                },
              ],
            },
          ],
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_jumbo',
          label: 'Jumbo',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
          label: 'Cup',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_liter',
          label: 'Liter',
        },
      ],
    },
    {
      food: {
        foodId: 'food_aqos7exbekunt3akfuus3bc8yxej',
        label: 'Mitlitsky Eggs Eggs',
        nutrients: {
          ENERC_KCAL: 136.36363636363637,
          PROCNT: 13.636363636363637,
          FAT: 9.090909090909092,
          CHOCDF: 0.0,
        },
        brand: 'Mitlitsky Eggs',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'MEDIUM EGG',
        image:
          'https://www.edamam.com/food-img/963/9633e24decdc42ed674fdc787623b492.png',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_egg',
          label: 'Egg',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_brwf3yhba3ww1dbvivmu8b2sdzgz',
        label: "Sauder's Eggs Eggs",
        nutrients: {
          ENERC_KCAL: 142.85714285714286,
          PROCNT: 12.698412698412698,
          FAT: 9.523809523809524,
          CHOCDF: 0.0,
        },
        brand: "Sauder's Eggs",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'Egg',
        image:
          'https://www.edamam.com/food-img/963/9633e24decdc42ed674fdc787623b492.png',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_egg',
          label: 'Egg',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_avajtrfaetdgmpaldhjtuatm8red',
        label: "Better'n Eggs Eggs",
        nutrients: {
          ENERC_KCAL: 54.347826086956516,
          PROCNT: 10.869565217391305,
          FAT: 0.0,
          CHOCDF: 0.0,
          FIBTG: 0.0,
        },
        brand: "Better'n Eggs",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel:
          'EGG WHITES; NATURAL FLAVORS; SODIUM HEXAMETHYL; XANTHAN GUM; COLOR; VITAMINS AND MINERALS: VITAMIN A PALMITATE; IRON(FERRIC); VITAMIN E(ALPHA-TOCOPHEROL); ZINC SULFATE; CALCIUM PANTOTHENATE; VITAMIN B12; VITAMIN B1(THIAMINE MONONITRATE); (PYRIDOXINE HYDROCHLORIDE); VITAMIN B2(RIBOFLAVIN); FOLIC ACID',
        image:
          'https://www.edamam.com/food-img/963/9633e24decdc42ed674fdc787623b492.png',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
          label: 'Tablespoon',
        },
      ],
    },
    {
      food: {
        foodId: 'food_budu8jqaufljzmbq0cuyzadpy6aw',
        label: 'Egg Beaters  Egg Product  Egg Whites',
        nutrients: {
          ENERC_KCAL: 49.18032786885246,
          PROCNT: 9.836065573770492,
          FAT: 0.0,
          CHOCDF: 1.639344262295082,
          FIBTG: 0.0,
        },
        brand: 'Egg Beaters',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'Egg Whites.',
        image:
          'https://www.edamam.com/food-img/e52/e522611330ccd8828976241b71425aca.jpg',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 61.0,
          },
        ],
        servingsPerContainer: 1.0,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_agoq89xahqlvl1b2tcrsya9wo5mt',
        label: 'Bread, egg',
        nutrients: {
          ENERC_KCAL: 287.0,
          PROCNT: 9.5,
          FAT: 6.0,
          CHOCDF: 47.8,
          FIBTG: 2.3,
        },
        category: 'Generic foods',
        categoryLabel: 'food',
        image:
          'https://www.edamam.com/food-img/5f6/5f64cc5bd5c3ddc3013ebe9a2e21b0c5.jpg',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_slice',
          label: 'Slice',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_loaf',
          label: 'Loaf',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
          label: 'Cup',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_roll',
          label: 'Roll',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_ao5zke5aq85e1oavdi4kla1cms6g',
        label: 'Eggs',
        nutrients: {
          ENERC_KCAL: 123.45886682353144,
          PROCNT: 10.582188584874125,
          FAT: 8.818490487395103,
          CHOCDF: 0.0,
          FIBTG: 0.0,
        },
        brand: "Pete And Gerry's Organics, Llc.",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'Eggs',
        image:
          'https://www.edamam.com/food-img/7bc/7bc934323e4b276d9a699b05947aebf1.png',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
            label: 'Whole',
            quantity: 1.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 50.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
            label: 'Ounce',
            quantity: 2.0,
          },
        ],
        servingsPerContainer: 1.0,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_ammdhjbaet66pfat86qz1bgv6xl7',
        label: 'EGGS',
        nutrients: {
          ENERC_KCAL: 143.0,
          PROCNT: 12.5,
          FAT: 8.930000305175781,
          CHOCDF: 0.0,
        },
        brand: "Pete and Gerry's Organics",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'FRESH BROWN EGGS',
        image:
          'https://www.edamam.com/food-img/b86/b8657981f65b66a08ddd756ae059901d.jpg',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
            label: 'Whole',
            quantity: 1.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 56.0,
          },
        ],
        servingsPerContainer: 1.13904333984375,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_egg',
          label: 'Egg',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_bfksec1bjp5s8zbbrj38dal0m1dv',
        label: "Streit's Egg Flakes Egg",
        nutrients: {
          ENERC_KCAL: 381.8181818181818,
          PROCNT: 14.545454545454545,
          FAT: 3.6363636363636362,
          CHOCDF: 70.9090909090909,
          FIBTG: 3.6363636363636362,
        },
        brand: "Streit's",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel:
          'DURUM FLOUR (WHEAT); EGG YOLKS OR EGGS; NIACIN; IRON (FERROUS SULFATE); THIAMINE MONONITRATE (VITAMIN B1); RIBOFLAVIN (VITAMIN B2) AND FOLIC ACID.',
        image:
          'https://www.edamam.com/food-img/19c/19c30828f39d8b9b7c513255195e2c20.jpg',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
          label: 'Cup',
        },
      ],
    },
    {
      food: {
        foodId: 'food_b7nqvlxag1olezb7sdclma30yvfv',
        label: 'Eggs',
        nutrients: {
          ENERC_KCAL: 120.0,
          PROCNT: 12.0,
          FAT: 8.0,
          CHOCDF: 0.0,
        },
        brand: "Eggland's Best, Inc.",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'Eggs',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 50.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
            label: 'Whole',
            quantity: 1.0,
          },
        ],
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_ans5qx9a1ladeobeadgz2auvaefi',
        label: 'EGGS',
        nutrients: {
          ENERC_KCAL: 158.0,
          PROCNT: 13.15999984741211,
          FAT: 10.529999732971191,
          CHOCDF: 2.630000114440918,
        },
        brand: 'Mr. Beverages Old Time Cocktail Mixes',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'EGGS.',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 38.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
            label: 'Whole',
            quantity: 1.0,
          },
        ],
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_bewy3imbmidf13aaqzt1faog1mb5',
        label: 'Eggs',
        nutrients: {
          ENERC_KCAL: 140.0,
          PROCNT: 12.0,
          FAT: 10.0,
          CHOCDF: 0.0,
        },
        brand: 'Safeway, Inc.',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'Eggs',
        image:
          'https://www.edamam.com/food-img/910/9101fe75b538f9ef9b6f5d8af698fa07.jpg',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 50.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
            label: 'Whole',
            quantity: 1.0,
          },
        ],
        servingsPerContainer: 1.0,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_at425x4bw0zc1pay1hcdza29c50n',
        label: 'EGGS',
        nutrients: {
          ENERC_KCAL: 143.0,
          PROCNT: 12.5,
          FAT: 8.930000305175781,
          CHOCDF: 0.0,
        },
        brand: 'Costco Companies Inc.',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'EGGS.',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
            label: 'Whole',
            quantity: 1.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 56.0,
          },
        ],
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
    {
      food: {
        foodId: 'food_b54nosyb1iiwl3bl26sola7qsg30',
        label: 'EGG',
        nutrients: {
          ENERC_KCAL: 53.0,
          PROCNT: 9.729999542236328,
          FAT: 0.0,
          CHOCDF: 1.7699999809265137,
          FIBTG: 0.8999999761581421,
        },
        brand: 'Nabisco Food Company',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel:
          'EGG WHITES (99%); LESS THAN 1% OF THE FOLLOWING: NATURAL FLAVORS; COLOR (INCLUDES BETA CAROTENE); SPICES; SALT; ONION POWDER; VEGETABLE GUMS (XANTHAN GUM; GUAR GUM). VITAMINS AND MINERALS: CALCIUM (SULFATE); IRON (FERRIC PHOSPHATE); VITAMIN E (ALPHA TOCOPHEROL ACETATE); ZINC (SULFATE); CALCIUM PANTOTHENATE; VITAMIN B2 (RIBOFLAVIN); VITAMIN B1 (THIAMINE MONONITRATE); VITAMIN B6 (PYRIDOXINE HYDROCHLORIDE); VITAMIN B12; FOLIC ACID; VITAMIN D3; BIOTIN.',
        image:
          'https://www.edamam.com/food-img/974/97443b1632082ec0af64b0cfdb8e5f70.jpg',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 113.0,
          },
          {
            uri:
              'http://www.edamam.com/ontologies/edamam.owl#Measure_container',
            label: 'Container',
            quantity: 1.0,
          },
        ],
        servingsPerContainer: 0.13333333333333333,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_container',
          label: 'Container',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
          label: 'Tablespoon',
        },
      ],
    },
    {
      food: {
        foodId: 'food_bq4klzfa5o2wnua619ovrbh5g2f1',
        label: 'EGG BEATERS Egg Whites',
        nutrients: {
          PROCNT: 10.869999885559082,
          FAT: 0.0,
          CHOCDF: 0.0,
          FIBTG: 0.0,
        },
        brand: 'Egg Beaters',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'Egg Whites. CONTAINS: EGGS.',
        image:
          'https://www.edamam.com/food-img/59c/59c660c95fa1c31aaf1054f6fcac91b2.png',
        servingSizes: [
          {
            uri:
              'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
            label: 'Tablespoon',
            quantity: 3.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 46.0,
          },
        ],
        servingsPerContainer: 0.9860703695652175,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
          label: 'Tablespoon',
        },
      ],
    },
    {
      food: {
        foodId: 'food_a9wao4obwjz5gobdizjmuay3qigj',
        label: 'Egg Beaters Egg Whites',
        nutrients: {
          ENERC_KCAL: 54.347826086956516,
          PROCNT: 10.869565217391305,
          FAT: 0.0,
          CHOCDF: 2.1739130434782608,
          FIBTG: 0.0,
        },
        brand: 'Egg Beaters',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel: 'EGG WHITES',
        image:
          'https://www.edamam.com/food-img/21b/21b83f439a71f804157011fc5c37fe5a.JPG',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
          label: 'Tablespoon',
        },
      ],
    },
    {
      food: {
        foodId: 'food_bu6nv2pbqbjio8b1tsd7zas5fbpz',
        label: "BETTER'N EGGS, EGG PRODUCT",
        nutrients: {
          ENERC_KCAL: 54.0,
          PROCNT: 10.869999885559082,
          FAT: 0.0,
          CHOCDF: 0.0,
          FIBTG: 0.0,
        },
        brand: "Better'n Eggs",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel:
          'EGG WHITES (98%); WATER; NATURAL FLAVORS; SODIUM HEXAMETAPHOSPHATE; GUAR GUM; XANTHAN GUM; COLOR (INCLUDES BETA-CAROTENE). VITAMINS AND MINERALS: CALCIUM SULFATE; VITAMIN A PALMITATE; IRON (FERRIC ORTHOPHOSPHATE); VITAMIN E (ALPHA-TOCOPHEROL ACETATE); VITAMIN D3; ZINC SULFATE; CALCIUM PANTHOTHENATE; VITAMIN B12; VITAMIN B1 (THIAMINE MONONITRATE); VITAMIN B6 (PYRIDOXINE HYDROCHLORIDE); VITAMIN B2 (RIBOFLAVIN); FOLIC ACID.',
        image:
          'https://www.edamam.com/food-img/a8b/a8b3cb361563c2c62be5d1618dcec6d1.jpg',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 46.0,
          },
          {
            uri:
              'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
            label: 'Tablespoon',
            quantity: 3.0,
          },
        ],
        servingsPerContainer: 0.9860703695652175,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
          label: 'Tablespoon',
        },
      ],
    },
    {
      food: {
        foodId: 'food_aixor9nbz7edaub8v4krsbu6vewa',
        label: 'Eggs',
        nutrients: {
          ENERC_KCAL: 50.721034052764495,
          PROCNT: 10.1442068105529,
          FAT: 0.0,
          CHOCDF: 1.69070113509215,
          FIBTG: 0.0,
        },
        brand: 'Kineret Foods Corporation',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel:
          '99% Egg Whites; Contains Less Than 1% Of Calcium Sulfate; Guar Gum; Xanthan Gum; Artificial Color; Yellow 5 And Yellow 6 Vitamins And Minerals : Calcium Pantothenate; Iron ( Ferric Orthophosphate ); Zinc ( Zinc Sulfate ); Vitamin B6 ( Pyridoxine Hydrochloride ); Folic Acid; Vitamin A Palmitate',
        image:
          'https://www.edamam.com/food-img/659/6592ae44ff83f66b54c99fb7930e9338.jpg',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
            label: 'Cup',
            quantity: 0.25,
          },
        ],
        servingsPerContainer: 1.0,
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
          label: 'Cup',
        },
      ],
    },
    {
      food: {
        foodId: 'food_anu52ema0twyy1akurledb8on87k',
        label: 'Egg Beaters Egg White',
        nutrients: {
          ENERC_KCAL: 54.347826086956516,
          PROCNT: 10.869565217391305,
          FAT: 0.0,
          CHOCDF: 2.1739130434782608,
          FIBTG: 0.0,
        },
        brand: 'Egg Beaters',
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel:
          'EGG WHITES (99%); LESS THAN 1% OF THE FOLLOWING: NATURAL FLAVOR; COLOR (INCLUDES BETA CAROTENE); SPICES; SALT; ONION POWDER; VEGETABLE GUMS (XANTHAN GUM; GUAR GUM). VITAMINS AND MINERALS: CALCIUM (SULFATE); IRON (FERRIC PHOSPHATE); VITAMIN E (ALPHA TOCOPHERYL ACETATE); ZINC (SULFATE); CALCIUM PANTOTHENATE; VITAMIN B2 (RIBOFLAVIN); VITAMIN B1 (THIAMINE MONONITRATE) VITAMIN B6 (PYRIDIOXINE HYDROCHLORIDE); VITAMIN B12; FOLIC ACID; VITAMIN D3; BIOTIN.',
        image:
          'https://www.edamam.com/food-img/0a1/0a10c6247ced2bcb722507df7c630418.png',
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_package',
          label: 'Package',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon',
          label: 'Tablespoon',
        },
      ],
    },
    {
      food: {
        foodId: 'food_bo7vzjlarkrf9iafqyzr6bmlg6oc',
        label: 'EGGS',
        nutrients: {
          ENERC_KCAL: 529.0,
          PROCNT: 11.760000228881836,
          FAT: 32.349998474121094,
          CHOCDF: 52.939998626708984,
          FIBTG: 2.9000000953674316,
        },
        brand: "Reese's",
        category: 'Packaged foods',
        categoryLabel: 'food',
        foodContentsLabel:
          'PEANUTS; SUGAR; VEGETABLE OIL (PALM; SHEA; SUNFLOWER; PALM KERNEL AND/OR SAFFLOWER OIL); DEXTROSE; NONFAT MILK; CORN SYRUP SOLIDS; LACTOSE (MILK); CONTAINS 2% OR LESS OF: SALT; LECITHIN (SOY); TBHQ AND CITRIC ACID (TO MAINTAIN FRESHNESS); VANILLIN (ARTIFICIAL FLAVOR); TOCOPHEROLS (TO MAINTAIN FRESHNESS); PGPR (EMULSIFIER); BETA CAROTENE (COLOR).',
        image:
          'https://www.edamam.com/food-img/f20/f201b63f3dc586f71678d4beb562e5d4.jpg',
        servingSizes: [
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
            label: 'Gram',
            quantity: 34.0,
          },
          {
            uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
            label: 'Whole',
            quantity: 2.0,
          },
        ],
      },
      measures: [
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          label: 'Serving',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
          label: 'Whole',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',
          label: 'Gram',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          label: 'Ounce',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_pound',
          label: 'Pound',
        },
        {
          uri: 'http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram',
          label: 'Kilogram',
        },
      ],
    },
  ],
});

export { searchState, currentSearch, apiData, userData, inStock };
