import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
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

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2023年9月20日 15:03</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2023年9月20日 15:03</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2023年9月20日 15:03</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4EB",
  },
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
  // memoList
  memoListItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 19,
    paddingRight: 19,
    height: 80,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
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
