import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useQuestionnaire from "@/hooks/events/useQuestionnaire";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Select from "@/components/inputs/Select";

const Questionnaire = () => {
  const {
    questions,
    answers,
    setAnswers,
    ctaText,
    selectedQuestionId,
    onAnswerSubmit,
  } = useQuestionnaire();

  return (
    <ThemedView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        start={{ x: 0.2, y: 0.4 }}
        colors={[
          "rgba(108, 99, 255, .3 )",
          "rgba(108, 99, 255, .25)",
          "rgba(108, 99, 255, .15)",
          "rgba(108, 99, 255, .1)",
        ]}
        style={styles.background}
      />
      <ThemedView lightColor="transparent">
        <ThemedText lightColor="rgba(108, 99, 255, 1)">
          QUESTION {selectedQuestionId + 1} OF {questions.length}
        </ThemedText>
      </ThemedView>
      <ThemedView lightColor="transparent" style={{ flex: 1, marginTop: 10 }}>
        <ThemedText style={{ fontWeight: 600, fontSize: 26, lineHeight: 35 }}>
          {questions[selectedQuestionId]?.label}
        </ThemedText>
        <ThemedView style={{ marginTop: 40, backgroundColor: "transparent" }}>
          {selectedQuestionId && questions[selectedQuestionId]?.options ? (
            <Select
              multi={!!questions[selectedQuestionId]?.multi}
              ref={questions[selectedQuestionId]?.ref}
              options={questions[selectedQuestionId]?.options}
            />
          ) : (
            <TextInput
              placeholderTextColor={"rgba(108, 99, 255, 0.3)"}
              style={{
                backgroundColor: "transparent",
                color: "rgb(108, 99, 255)",
                fontSize: 26,
              }}
              cursorColor={"#fff"}
              placeholder="Write your answer here"
            />
          )}
        </ThemedView>
      </ThemedView>
      <ThemedView lightColor="transparent">
        <TouchableOpacity onPress={onAnswerSubmit} style={styles.submitBtn}>
          <ThemedText style={{ color: "#fff" }}>{ctaText}</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    justifyContent: "space-between",
    paddingBottom: 100,
    paddingHorizontal: 40,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
  },
  submitBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6C63FF",
    borderRadius: 100,
    paddingTop: 10,
    paddingBottom: 12,
  },
});

export default Questionnaire;
