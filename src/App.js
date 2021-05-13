import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

import { Box, Column, Columns } from "@mobily/stacks";

const BoxPos = () => {
  return (
    <Box
      style={[
        { backgroundColor: "pink" },
        styles.box,
        { height: 100 },
        { backgroundColor: "orange" },
        (width: 400),
      ]}
      alignY={"center"}
    >
      <Button onPress={() => {}} title="Example button" />
    </Box>
  );
};

const lorem1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const lorem2 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const Cols = ({ text }) => {
  return (
    <Columns space={4} style={styles.borderOrange}>
      <Column width={"content"} height={"fluid"}>
        <Box alignX={"center"} flex={"fluid"}>
          <Box style={{ width: 40, height: 40, backgroundColor: "pink" }}></Box>
          <Box
            style={{ width: 4, backgroundColor: "red" }}
            flex={"fluid"}
          ></Box>
        </Box>
      </Column>
      <Column>
        <Box>
          <Text>{text}</Text>
        </Box>
      </Column>
    </Columns>
  );
};

function App() {
  return (
    <View style={styles.app}>
      <Cols text={lorem1} />
      <Cols text={lorem2} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  box: {
    backgroundColor: "red",
  },
  borderOrange: {
    borderColor: "orange",
    borderWidth: 1,
  },
});

export default App;
