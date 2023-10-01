import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoTitle}>買い物リスト</Text>
          <Text style={styles.memoDate}>2023年9月20日 15:03</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoTitle}>買い物リスト</Text>
          <Text style={styles.memoDate}>2023年9月20日 15:03</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoTitle}>買い物リスト</Text>
          <Text style={styles.memoDate}>2023年9月20日 15:03</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
