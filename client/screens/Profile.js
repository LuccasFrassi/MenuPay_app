import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import NavegationBar from "../components/NavegationBar";
import * as ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  const [userImg, setUserImg] = useState(require("../assets/ImgProfile.png"));

  const chooseImage = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setUserImg(source);
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.userImg} source={userImg} />
          <TouchableOpacity style={styles.editIcon} onPress={chooseImage}>
            <Icon name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>Nome do Usuário</Text>
        <Text style={styles.aboutUser}>
          Descrição do usuário ou alguma informação relevante.
        </Text>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10</Text>
            <Text style={styles.userInfoSubTitle}>Total de Pedidos</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>3</Text>
            <Text style={styles.userInfoSubTitle}>Restaurantes Favoritos</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>4.9</Text>
            <Text style={styles.userInfoSubTitle}>Avaliações</Text>
          </View>
        </View>
        <Text style={styles.postTitle}>Informações do Usuário</Text>
        <View style={styles.containerInfo}>
          <View style={styles.userInfo}>
            <Text style={styles.userDetailTitle}>Nome:</Text>
            <Text style={styles.userDetail}>Nome do Usuário</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userDetailTitle}>E-mail:</Text>
            <Text style={styles.userDetail}>emaildousuario@gmail.com</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userDetailTitle}>Telefone:</Text>
            <Text style={styles.userDetail}>(11) 1234-5678</Text>
          </View>
        </View>
      </ScrollView>
      <NavegationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 0,
  },
  postImg: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginBottom: 5,
  },
  postText: {
    fontSize: 14,
    color: "#666",
    textAlign: "justify",
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 20,
    paddingLeft: 25,
  },
  userDetailTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userDetail: {
    fontSize: 20,
    marginLeft: 5,
  },
  containerInfo: {
    marginTop: 50,
    marginLeft: -40,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ff6347',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
