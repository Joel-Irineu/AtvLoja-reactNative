import React from  'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';

class App extends React.Component{

  render(){
    return(
      <ImageBackground source={{uri: 'https://bit.ly/2JiZvOy'}} style={{height: '100%'}}>
        <Text style={styles.title}>Astro Loja</Text>
        <ScrollView style={styles.container}>
          <Text style={styles.chamada}>A melhor loja para amantes do espaço e de astronomia!</Text>

          {produtos.map((produto,i) => { //.map para a repetição dos produtos
            return(
              <TouchableOpacity onPress={() => comprar()} style={styles.produto}>
                <Image source={{uri: produto.url}} style={styles.img} />
                <Text style={styles.textProduto}>{produto.nome}</Text>
                <Text style={styles.textProduto}>R$ {produto.preco}</Text>
              </TouchableOpacity>
            )
          })}

        </ScrollView>
      </ImageBackground>
    )
  }
}
//estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 30,
    color: '#ddd',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#262626',
  },
  img:{
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 5,
  },
  produto:{
    backgroundColor: '#262626d1',
    padding: 10,
    margin: '5%',
    borderRadius: 5,
    width: '90%',
  },
  textProduto:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  chamada:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    margin: 15,
  }
});

//pseudo api com os produtos
var produtos = [{
    nome: 'Almofada - Capacete',
    url: 'https://bit.ly/2UlPC92',
    preco: 28,
},
{
  nome: 'Plaquinha - Ao infinito e além',
  url: 'https://bit.ly/3bDNM9J',
  preco: 60,
},
{
  nome: 'Camisa - Astronauta',
  url: 'https://bit.ly/2QOOskx',
  preco: 45,
},
{
  nome: 'Quadro - Galaxia',
  url: 'https://bit.ly/33MtJD0',
  preco: 120,
},]

//função de alerta
function comprar(){
  Alert.alert(
    'Comprar produto',
    'Você deseja adicionar produto ao carrinho?',
    [
      {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Adicionar a lista de desejos', onPress: () => console.log('Ask me later pressed')},
      {text: 'Adicionar ao carrinho', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
}


export default App;
