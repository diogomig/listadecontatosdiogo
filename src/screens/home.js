import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import List from "../components/list"

class HomeScreen extends React.Component {
  render() {
    const lojas = [
      {
        id: 1,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Lorem ipsum",
        descricao: "loja-1",
        contatos: [
          {
            type: "tel:"
            value: "9999-9999"
          },
          {
            type: "Email:",
            value: "didicasa2002@hotmail.com"
          }
        ]
      },
      {
        id: 2,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Lorem ipsum",
        descricao: "loja-2"
      },
      {
        id: 3,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Lorem ipsum",
        descricao: "loja-3"
      },
      {
        id: 4,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Lorem ipsum",
        descricao: "loja-4"
      },
      {
        id: 5,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Lorem ipsum",
        descricao: "loja-5"
      },
      {
        id: 6,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Lorem ipsum",
        descricao: "loja-6"
      }
    ];

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <List contatos={lojas} />
      </View>
    );
  }
}

export default HomeScreen;
/*johntobaldini*/ 