import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Páginas Principais
import { Home } from "../pages/home";
import { MapScreen } from "../pages/screens/MapScreen";
import { LoreScreen } from "../pages/screens/LoreScreen";
import { BattlesScreen } from "../pages/screens/BattlesScreen";
import { FactionsScreen } from "../pages/screens/FactionsScreen";

// Páginas Factions
import { ImperiumOfMan } from "~/pages/screens/factions/ImperiumOfMan";

// Tipos
import { RootStackParamList } from "~/types";
import { Footer } from "~/components/Footer";

const Stack = createNativeStackNavigator<RootStackParamList>();

const routeTitles: Record<string, string> = {
   ImperiumOfMan: "Imperium of Man",
   Caos: "Caos",
   Tyranids: "Tyranids",
   Orks: "Orks",
   Aeldari: "Aeldari",
   Necrons: "Necrons",
   TauEmpire: "Tau Empire",
   Ctan: "C'tan",
   OldOnes: "Old Ones",
   Factions: "Factions",
   Home: "Home",
 };

export function AppRoutes() {
   return (
      <NavigationContainer>
         <View style={{ flex: 1 }}>
            <Stack.Navigator
               initialRouteName="Home"
               screenOptions={({ route, navigation }) => {
                  const canGoBack = navigation.canGoBack();
                  const isFactionSubPage = [
                     "ImperiumOfMan",
                     "Caos",
                     "Tyranids",
                     "Orks",
                     "Aeldari",
                     "Necrons",
                     "TauEmpire",
                     "Ctan",
                     "OldOnes",
                  ].includes(route.name);

                  const pageTitle = routeTitles[route.name] || route.name;

                  return {
                     header: () => (
                        <View className="w-full bg-[#111827] p-1 flex items-center relative">
                           {/* Botão de voltar */}
                           {canGoBack && (
                              <TouchableOpacity
                                 onPress={() => navigation.goBack()}
                                 className="absolute left-5 top-2"
                              >
                                 <Text className="text-white text-lg">{"<"}</Text>
                              </TouchableOpacity>
                           )}
                           {/* Conteúdo do Header */}
                           <View className="flex items-center p-1">
                              <TouchableOpacity
                                 onPress={() => navigation.replace(route.name)}
                              >
                                 <Text className="text-white font-bold text-2xl">
                                    {isFactionSubPage ? "Factions" : pageTitle}
                                 </Text>
                                 
                              </TouchableOpacity>
                              {/* Subtítulo, se for uma subpágina de Factions */}
                              {isFactionSubPage && (
                                 <Text className="text-gray-300">
                                    {pageTitle}
                                 </Text>
                              )}
                              {route.name === "Home" && (
                                 <Text className="text-white text-lg">
                                    Grim Darkness of the far future
                                 </Text>
                              )}
                           </View>
                        </View>
                     ),
                  };
               }}
            >
               {/* Todas as Páginas */}
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Factions" component={FactionsScreen} />
               <Stack.Screen name="Lore" component={LoreScreen} />
               <Stack.Screen name="Battles" component={BattlesScreen} />
               <Stack.Screen name="Map" component={MapScreen} />
               {/* Páginas Factions */}
               <Stack.Screen name="ImperiumOfMan" component={ImperiumOfMan} />
               {/* Adicione outras subpáginas aqui */}
            </Stack.Navigator>
            <Footer />
         </View>
      </NavigationContainer>
   );
}
