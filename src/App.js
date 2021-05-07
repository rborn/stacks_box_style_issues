import React from "react";
import { Button, StyleSheet, View } from "react-native";

import { Box } from "@mobily/stacks";

function App() {
  return (
    <View style={styles.app}>
      <Box
        style={[{ backgroundColor: "pink" }, styles.box, { height: 100 }]}
        alignY={"center"}
      >
        <Button onPress={() => {}} title="Example button" />
      </Box>
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
});

export default App;
