import { useState } from "react";

import { RootStackParamList } from "~/types";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "ImperiumOfMan">;

export function ImperiumOfMan({ navigation }: Props) {
   const [index, setIndex] = useState(0)
   const [routes] = useState([
      { key: "Characters", title: "Characters" },
      { key: "MilitaryForces", title: "Military" },
      { key: "History", title: "History" },
   ])

   const renderScene = SceneMap({
      Characters: Characters,
      MilitaryForces: MilitaryForces,
      History: History,
   });

   const ImperiumImages = {
      ImperiumOfManIntroduction: require("public/imgs/factions/factionsWallpaper/factions-imperiumofman.png"),
   }

   return (
      <View className="flex-1 bg-black">
         <View className="flex-1">
            <ScrollView className="flex-1 p-5 mb-14">
               <View className="mb-4 p-4 bg-[#1F2937] rounded-lg flex flex-row">
                  <View className=" bg-[#1F2937]">
                     <Image
                        source={ImperiumImages.ImperiumOfManIntroduction}
                        style={{
                           width: 150,
                           height: 150
                        }}
                     />
                  </View>
                  <View className="pl-4 flex-1">
                     <Text className="text-white text-xl font-bold">Imperium of Man</Text>
                     <Text className="text-white text-left flex-wrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et repellat ducimus doloribus ipsam cum nisi velit vero excepturi. Magni consectetur similique culpa praesentium, accusantium necessitatibus</Text>
                  </View>
               </View>
               <View className="flex flex-row justify-between mb-4 rounded-lg">
                  <TabView
                     navigationState={{ index, routes }}
                     renderScene={renderScene}
                     onIndexChange={setIndex}
                     renderTabBar={(props) => (
                        <TabBar {...props} style={{ backgroundColor: "#111827" }} />
                     )}
                  />
               </View>
            </ScrollView>
         </View>
      </View>
   )
}

/*

               {[
                  { title: "Space Marines", link: "AdeptusAstartes" },
                  { title: "Astra Militarum", link: "AstraMilitarum" },
                  { title: "Adeptus Mechanicus", link: "AdeptusMechanicus" },
                  { title: "Adepta Sororitas", link: "AdeptaSororitas" },
                  { title: "Adeptus Custodes", link: "AdeptusCustodes" },
                  { title: "Sisters of Silence", link: "SistersOfSilence" },
                  { title: "Navis Imperialis", link: "NavisImperialis" },
                  { title: "Collegia titanica", link: "CollegiaTitanica" },
                  { title: "Militarum Tempestus", link: "MilitarumTempestus" },
                  { title: "Questor Imperialis", link: "QuestorImperialis" },
                  { title: "Legio Cybernetica", link: "LegioCybernetica" },
                  { title: "Adeptus Arbites", link: "AdeptusArbites" },
               ].map((item) => (
                  <TouchableOpacity
                     onPress={() => navigation.navigate(item.link as keyof RootStackParamList)}
                     key={item.title}
                  >
                     <ImageBackground
                        key={item.title}
                        resizeMode="cover"
                        style={{
                           borderRadius: 15,
                        }}
                        className="bg-[#1F2937] mb-4 rounded-lg flex items-center bg-factions bg-cover overflow-hidden opacity-90"
                     >
                        <View className="bg-black/40 mx-5 p-7 w-full rounded-md">
                           <Text className="text-white font-bold text-2xl text-center tracking-widest">
                              {item.title}
                           </Text>
                        </View>
                     </ImageBackground>
                  </TouchableOpacity>
               ))}

*/

const Characters = () => (
   <View>
      <Text>Characters</Text>
   </View>
)

const MilitaryForces = ({ navigation }: Props) => (
   <View>
      <Text>Military Forces</Text>
      <View>
         {[
            { title: "Space Marines",       link: "AdeptusAstartes"    },
            { title: "Astra Militarum",     link: "AstraMilitarum"     },
            { title: "Adeptus Mechanicus",  link: "AdeptusMechanicus"  },
            { title: "Adepta Sororitas",    link: "AdeptaSororitas"    },
            { title: "Adeptus Custodes",    link: "AdeptusCustodes"    },
            { title: "Sisters of Silence",  link: "SistersOfSilence"   },
            { title: "Navis Imperialis",    link: "NavisImperialis"    },
            { title: "Collegia titanica",   link: "CollegiaTitanica"   },
            { title: "Militarum Tempestus", link: "MilitarumTempestus" },
            { title: "Questor Imperialis",  link: "QuestorImperialis"  },
            { title: "Legio Cybernetica",   link: "LegioCybernetica"   },
            { title: "Adeptus Arbites",     link: "AdeptusArbites"     },
         ].map((item) => (
            <TouchableOpacity
               onPress={() => navigation.navigate(item.link as keyof RootStackParamList)}
               key={item.title}
            >
               <ImageBackground
                  key={item.title}
                  resizeMode="cover"
                  style={{
                     borderRadius: 15,
                  }}
                  className="bg-[#1F2937] mb-4 rounded-lg flex items-center bg-factions bg-cover overflow-hidden opacity-90"
               >
                  <View className="bg-black/40 mx-5 p-7 w-full rounded-md">
                     <Text className="text-white font-bold text-2xl text-center tracking-widest">
                        {item.title}
                     </Text>
                  </View>
               </ImageBackground>
            </TouchableOpacity>
         ))}
      </View>
   </View>
)
const History = () => (
   <View>
      <Text>History</Text>
   </View>
)