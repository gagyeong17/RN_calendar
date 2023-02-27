import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
// import WeekCalendar from "./atoms/WeekCalendar";

export default function MonthlyCalendar({ navigation }) {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const viewYear = today.getFullYear(); //년도
  const viewMonth = today.getMonth() + 1; //오늘 월
  const viewday = today.getDate(); //오늘 일
  const [month, setMonth] = useState(Number(viewMonth)); //오늘 월을 찾기위해서
  const [year, setYear] = useState(Number(viewYear));
  // -----------------------------------------------------
  const prevLast = new Date(viewYear, month - 1, 0); //month의 마지막 날짜
  const PLDate = prevLast.getDate(); //month의 마지막 일
  const thisLast = new Date(viewYear, month, 0); //이번 달 마지막 Date
  const TLDate = thisLast.getDate(); //이번달 마지막 일
  const PLDay = prevLast.getDay(); //지난달 마지막 요일
  const TLDay = thisLast.getDay(); //이번달 마지막 요일

  // Dates 기본 배열들
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  // 이번달 달력에 보이는 이전 달 날짜들
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  // 이번달 달력에 보이는 다음달 날짜들
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }
  // 이번 달 달력에 보이는 날짜들
  const dates = prevDates.concat(thisDates, nextDates);
  //달력에서 이번달 날짜만 진하게 하기 위한 로직
  const firstDateIndex = dates.indexOf(1); //이번달 1일의 인덱스값
  const lastDateIndex = dates.lastIndexOf(TLDate); //이번달의 마지막 날 인덱스값

  const minusMonth = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(Number(year - 1));
    } else {
      setMonth(Number(month - 1));
    }
  };
  const plusMonth = () => {
    if (month >= 12) {
      setMonth(1);
      setYear(Number(year + 1));
    } else {
      setMonth(Number(month + 1));
    }
  };
  const clickToday = () => {
    setMonth(viewMonth);
    setYear(viewYear);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const isDateSelected = (date) => {
    return date === selectedDate;
  };
  const getDayStyle = (date) => {
    const isSelected = isDateSelected(date);
    const backgroundColor = isSelected ? "#FEE" : "transparent";
    const textColor = isSelected ? "#F00" : "#000";
    return { backgroundColor, color: textColor };
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.yearAndMonth}>
          <TouchableOpacity onPress={minusMonth}>
            <Text>◁</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickToday}>
            <Text style={styles.yearAndMonthTxt}>
              {month}월 {year}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={plusMonth}>
            <Text>▷</Text>
          </TouchableOpacity>
        </View>

        {/* 월간달력시작 */}
        <View style={styles.calendar}>
          <View style={styles.days}>
            {week.map((item, idx) =>
              week[idx] == "Sun" ? (
                <Text style={[styles.day, { color: "#9E1030" }]} key={idx}>
                  {item}
                </Text>
              ) : week[idx] == "Sat" ? (
                <Text style={[styles.day, { color: "#0063B2" }]} key={idx}>
                  {item}
                </Text>
              ) : (
                <Text style={styles.day} key={idx}>
                  {item}
                </Text>
              )
            )}
          </View>

          <View style={styles.dayBox}>
            <FlatList
              data={dates.map((item, i) =>
                i >= firstDateIndex && i < lastDateIndex + 1 ? (
                  viewYear == year &&
                  viewMonth + 1 == month + 1 &&
                  item == viewday ? (
                    <TouchableOpacity
                      style={[styles.date, getDayStyle(item)]}
                      onPress={() => handleDatePress(item)}
                      key={i}
                    >
                      <Text style={[styles.dayTxt, styles.todayTxt]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => handleDatePress(item)}
                      style={[styles.date, getDayStyle(item)]}
                      key={i}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <View
                    style={[
                      styles.date,
                      getDayStyle(item),
                      { backgroundColor: "transparent" },
                    ]}
                    key={i}
                  >
                    <Text style={styles.prevTxt}>{item}</Text>
                  </View>
                )
              )}
              renderItem={({ item }) => (
                <View style={styles.day}>
                  <Text>{item}</Text>
                </View>
              )}
              numColumns={7}
              keyExtractor={(item, index) => index}
            />
          </View>
          {/* <WeekCalendar /> */}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  yearAndMonth: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  yearAndMonthTxt: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 22,
    color: "black",
  },
  calendar: {
    marginTop: 10,
    width: 280,
    height: 300,
  },
  days: {
    marginTop: 10,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dayBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: "100%",
  },
  circle: {
    height: 23,
    width: 23,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
  },
  dayTxt: {
    textAlign: "center",
    color: "#000",
  },
  todayTxt: {
    fontWeight: "bold",
  },
  prevTxt: {
    color: "#ddd",
  },
  day: {
    height: 40,
    width: 40,
  },
  date: {
    width: 23,
    height: 23,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    backgroundColor: "pink",
  },
});
