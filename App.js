import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Nombre</Text>
        <Text style={styles.texto}>X</Text>
      </View>
      <View style={styles.contenido}>
        <Text>Proyecto de 5B</Text>
      </View>
      <View style={styles.pie}>
        <Text>Pie de app</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#ffaa55',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'stretch'
  },
  encabezado:{
    flex:1,
    flexDirection:'row',
    borderColor:"#fff",
    borderWidth:1,
    justifyContent:'space-between',
    alignItems:'center'
    
  },
  pie:{
    flex:1,
    borderColor:"#fff",
    borderWidth:1,

    justifyContent:'center'
  },
  contenido:{
    flex:8,
    borderColor:"#fff",
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    color:"#fff",
    fontSize:30
  }
});
