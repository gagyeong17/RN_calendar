import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function WeekCalendar({ navigation }) {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //달력을 만들어보자
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0]; //오늘 날짜
  const viewYear = today.getFullYear(); //년도
  const viewMonth = today.getMonth() + 1; //오늘 울
  const viewday = today.getDate(); //오늘 일
  const viewdayLabel = today.getDay(); //오늘 요일
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let weekarr = [];
  for (let i = 1; i < 8; i++) {
    let newDate = new Date(date.valueOf() + 86400000 * (i - viewdayLabel));
    const onlyDate = newDate.toISOString().split("T")[0].split("-")[2];
    weekarr.push(onlyDate); //요일과 날짜 배열들
  }
  return (
    <View style={{ width: 300 }}>
      <View style={styles.weekHeader}>
        {week.map((item, idx) =>
          week[idx] == "Sun" ? (
            <Text style={[styles.day, { color: "#9E1030" }]}>{item}</Text>
          ) : week[idx] == "Sat" ? (
            <Text style={[styles.day, { color: "#0063B2" }]}>{item}</Text>
          ) : (
            <Text style={styles.day} key={idx}>
              {item}
            </Text>
          )
        )}
      </View>
      <View style={styles.row}>
        {weekarr?.map((item, idx) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setClick(item);
              }}
            >
              {viewday === Number(item) ? (
                <Text key={idx} style={[styles.day, styles.today]}>
                  {item}
                </Text>
              ) : (
                <Text key={idx} style={styles.day}>
                  {item}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  weekHeader: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  day: {
    height: 40,
    width: 40,
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  today: {
    fontWeight: "bold",
  },
});
