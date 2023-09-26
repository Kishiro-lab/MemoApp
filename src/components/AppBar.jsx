import { View, Text, StyleSheet } from "react-native";

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <View style={styles.appbarLeft}>
          <Text style={styles.appbarLeftText}>Back</Text>
        </View>
        <View style={styles.appbarCenter}>
          <Text style={styles.appbarCenterText}>Memo App</Text>
        </View>
        <View style={styles.appbarRight}>
          <Text style={styles.appbarRightText}>ログアウト</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // appbar
  appbar: {
    height: 104,
    backgroundColor: "#4682A9",
    justifyContent: "flex-end",
    paddingLeft: 19,
    paddingRight: 19,
    paddingBottom: 8,
  },
  appbarInner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appbarLeft: {
    flex: 1,
  },
  appbarLeftText: {
    display: "none",
  },
  appbarCenter: {
    flex: 1,
    textAlign: "center",
  },
  appbarCenterText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    lineHeight: 32,
  },
  appbarRight: {
    flex: 1,
    justifyContent: "flex-end",
  },
  appbarRightText: {
    textAlign: "right",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    lineHeight: 24,
  },
});
