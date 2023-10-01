import { StyleSheet, View } from "react-native";
import { string, shape } from "prop-types";
import { Feather } from "@expo/vector-icons";

export default function CircleButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="#fff" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  // circleButton
  circleButton: {
    backgroundColor: "#4682A9",
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    fontSize: 40,
    lineHeight: 40,
    color: "#fff",
  },
});
