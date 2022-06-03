import React from 'react';
import{
    View,
     Image, 
     StyleSheet, 
     SafeAreaView, 
     StatusBar, 
     Text,
     Pressable,
     Linking
    } from 'react-native';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/82392045?s=400&u=963ef8d6603cc8d472ac9a50f7054a3215932ae4&v=4';

const urlToMyGithub = 'https://github.com/meiramatheus27';
const  App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo link...');
            Linking.openURL(urlToMyGithub);
        }
    }
    return (
        
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style= {style.content}>
        <Image accessibilityLabel="Foto de perfil de Matheus" 
        style = {style .avatar} source={{uri: imageProfileGithub }}/>
        <Text accessibilityLabel="Nome matheus meira" 
        style={[style.defaultText, style.name]}>Matheus Meira</Text >
        <Text accessibilityLabel="Nickname meiramatheus27" 
        style={[style.defaultText, style.nickname]}>meiramatheus27</Text>
        <Text accessibilityLabel="Descrição: Computer Engineer" 
        style={[style.defaultText, style.description]}>Computer Engineer</Text>
        <Pressable onPress={handlePressGoToGithub}>

        <View style={style.button}> 
            <Text style={[style.defaultText, style.textButton]}> Open in Github</Text>
        </View>
        </Pressable>
         </View>
                </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        
    },
    content: {
        alignItems: 'center',
    },

  avatar:{
      height: 200,
      width: 200,
      borderRadius: 100,
      borderColor: 'white',
      borderWidth: 2,
  },
  defaultText:{
      color: colorFontGithub,
  },
  name:{
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 16,
  },
  nickname:{
      fontSize: 14,
      color: colorDarkFontGithub,
  },
  description:{
      fontWeight: 'bold',
      fontSize: 12,
  },
  button:{
      marginTop: 20,
      backgroundColor: colorDarkFontGithub,
      borderRadius: 10,
      padding: 20,
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 14,
},
});

