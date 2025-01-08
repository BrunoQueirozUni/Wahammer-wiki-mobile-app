import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
   Home: undefined;
   Factions: undefined;
   Lore: undefined;
   Battles: undefined;
   Map: undefined;
};

export type FactionsStackParamList = {
   FactionsScreen: undefined; // Adicionado
   ImperiumOfMan: undefined;
   Caos: undefined;
   Tyranids: undefined;
   Orks: undefined;
   Aeldari: undefined;
   Necrons: undefined;
   TauEmpire: undefined;
   Ctan: undefined;
   OldOnes: undefined;
};


export type NavigationProps = NativeStackNavigationProp<RootStackParamList & FactionsStackParamList>;
