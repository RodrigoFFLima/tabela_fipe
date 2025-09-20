import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "#E4E4E4",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "95%",
    paddingHorizontal: 8,
    backgroundColor: "white",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  list: {
    width: "100%",
    flex: 1,
    marginTop: 16,
  },
  item: {
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 16,
    paddingLeft: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
  },
  item_text: {
    fontWeight: "bold",
  },
});
