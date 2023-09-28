import { View, ScrollView, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年9月26日</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          consequuntur debitis repudiandae sed dolore magnam fuga quisquam
          dolorum, hic voluptatem beatae, perspiciatis eum corporis, tempora eos
          voluptas quidem quod iusto! Dignissimos at, deserunt numquam molestias
          eveniet laboriosam est omnis amet cupiditate aut maiores, ipsam labore
          unde quia vero ratione porro, fuga ullam fugit placeat vitae rem
          adipisci accusantium. Dicta, recusandae. Nemo numquam corporis
          reiciendis fugit doloribus distinctio. Quod explicabo temporibus
          itaque debitis, in ad aliquam est reprehenderit porro aut expedita
          perferendis amet architecto quia eum voluptates laudantium rem
          laboriosam odit. A inventore, repellat animi doloremque tempora
          placeat architecto unde sapiente enim optio officiis! Ratione, aliquid
          eaque! Itaque similique nulla totam a aliquam, suscipit at autem
          provident repellendus quis voluptas neque! Sit atque esse voluptas
          beatae neque dolorum ad dolorem pariatur voluptate, alias velit at
          accusamus voluptates culpa consequuntur deleniti asperiores in ipsa!
          Harum eaque laudantium reprehenderit ipsam vitae accusamus vel?
          Mollitia, earum iste. Explicabo, error vel perspiciatis numquam
          deleniti neque distinctio accusantium quas itaque sunt blanditiis
          eligendi quidem reiciendis dolore hic qui earum dolorem ut aut nostrum
          aliquam! Autem, molestias? Autem, cupiditate earum? Aliquam
          repellendus odio animi, mollitia consectetur beatae earum eos possimus
          itaque ratione rerum tempore soluta impedit quibusdam, fugit
          dignissimos enim, nesciunt voluptas et quia facilis porro neque. Esse
          porro ullam consequatur accusantium aliquam nesciunt quos cumque
          obcaecati soluta eveniet reprehenderit nemo consequuntur, atque
          architecto neque nobis voluptates sequi numquam? Sit iste consectetur
          at, corporis ducimus ipsum illo? Esse cupiditate maiores fuga
          similique possimus itaque autem voluptate numquam tempore, voluptates
          commodi deleniti nostrum non, hic, pariatur illum ratione quisquam!
          Vero aspernatur explicabo laborum aut consectetur. Eligendi, nisi
          repellendus. Beatae nesciunt neque dolores ad perspiciatis in facilis
          doloremque officiis, eos, vitae architecto ipsa sequi natus a eligendi
          suscipit sunt illo. Rerum animi fugiat saepe? Est libero quas
          corporis. Reprehenderit.
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: "auto" }}>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4EB",
  },
  memoHeader: {
    height: 104,
    backgroundColor: "#4682A9",
    justifyContent: "center",
    paddingLeft: 19,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
