import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function App() {
  const [randomBackground, setRandomBackground] = useState('#ffffff')
  const [shapeColor, setShapeColor] = useState('#ffffff')
  const generateColor=()=>{
    const hexRange= '0123456789ABCDEF'
    let color= '#'
    let scolor= '#'

    for(let i=0;i<6;i++){
    color += hexRange[Math.floor(Math.random() * 16)]
    scolor+= hexRange[Math.round(Math.random() * 16)]

    }
    setRandomBackground(color)
    setShapeColor(scolor)
  }
  return (
    <>
    
      <StatusBar style="auto" backgroundColor={randomBackground}/>
      <View style={[styles.container,{backgroundColor: randomBackground}]}>
        <View style={[styles.shape,{backgroundColor: shapeColor}]}>
          
          
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn:{
    borderRadius: 12,
    backgroundColor: '#6A1b4d',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnText:{
    fontSize: 24,
    textTransform: 'uppercase',
    color : '#fff'

  },
  shape:{
    marginBottom: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'black'
  }
});
