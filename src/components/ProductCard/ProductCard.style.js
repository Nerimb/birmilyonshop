import { StyleSheet } from "react-native";
import fonts from "../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#bdbdbd",
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 10,
  },
  bodyContainer: {
    flex: 1,
    padding: 4,
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: fonts.fontSize,
    color: fonts.color,
    width: "80%",
  },
  favButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: 40,
    backgroundColor: "tomato",
    borderRadius: 50,
  },
  price: {
    textAlign: "right",
    fontSize: 16,
    fontStyle: "italic",
  },
  priceBox: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#ffaf7a",
    borderRadius: 10,
    width: 80,
  },
});
