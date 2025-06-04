import BlockLayout from './components/BlockLayout';
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <BlockLayout />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgrounColor: '#fff',
  },
});
