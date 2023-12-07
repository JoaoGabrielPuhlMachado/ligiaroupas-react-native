import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const Resultado = ({ route, navigation }) => {
  const { pesquisa } = route.params;
  console.log(pesquisa)
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f1ebf7" }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Produtos</Text>
        <View style={styles.content}>
          {pesquisa.map((produto) => (
            <TouchableOpacity
              key={produto.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("Desc", {
                  id: produto.id,
                })
              }
            >
              <Image
                style={styles.imagem}
                source={{ uri: produto.capa?.file }}
              />
              <Text style={styles.texto}>{produto.descricao}</Text>
              <Text style={styles.preco}>
                R${produto.preco.replace(".", ",")}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1ebf7",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "80%",
    borderRadius: 3,
  },
  card: {
    padding: 8,
    backgroundColor: "white",
    width: "47%",
    height: 240,
    borderRadius: 0,
    marginLeft: "1.5%",
    marginRight: "1.5%",
    marginTop: 12,
    borderRadius: 3,
  },
  titulo: {
    width: "100%",
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  texto: {
    textAlign: "center",
    fontSize: 13,
    color: "#000",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  preco: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#000",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1ebf7",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default Resultado;
