import { useLocalSearchParams, useNavigation } from "expo-router";
import { useMemo, useRef, useState } from "react";

const useQuestionnaire = () => {
  const item = useLocalSearchParams();

  const navigation = useNavigation();

  const [selectedQuestionId, setSelectedQuestionId] = useState(0);

  const defaultQuestions = [
    {
      label: "Company/Organization:",
      type: "text",
      required: true,
      name: "company",
      ref: useRef(),
    },
    {
      label: "Job Title:",
      type: "text",
      required: true,
      name: "jobTitle",
      ref: useRef(),
    },
    {
      label: "Are you a current student:",
      type: "select",
      multi: false,
      options: [
        {
          label: "Yes",
          value: true,
        },
        {
          label: "No",
          value: false,
        },
      ],
      required: true,
      name: "isStudent",
      ref: useRef(),
    },
    {
      label: "Where did you hear about this event?",
      type: "select",
      multi: true,
      options: [
        {
          label: "LinkedIn",
          value: "linkedin",
        },
        {
          label: "Instagram",
          value: "instagram",
        },
        {
          label: "Twitter",
          value: "twitter",
        },
        {
          label: "Facebook",
          value: "facebook",
        },
      ],
      required: true,
      name: "sourceOfEvent",
      ref: useRef(),
    },
  ];

  const [questions, setQuestions] = useState(defaultQuestions);
  const [answers, setAnswers] = useState({});
  const ctaText = useMemo(
    () =>
      selectedQuestionId == questions.length - 1
        ? "Claim ticket"
        : "Next Question",
    [selectedQuestionId]
  );

  const onFinalSubmit = () => {
    const newData = { ...item, currentUserStatus: "PENDING" };
    navigation.navigate("screens/eventDetails", newData);
  };

  const onAnswerSubmit = () => {
    const refVal = questions[selectedQuestionId]?.ref?.current?.getValue?.();
    console.log({ refVal });

    if (selectedQuestionId < questions.length - 1) {
      setSelectedQuestionId((prev) => prev + 1);
    } else {
      onFinalSubmit();
    }
  };

  return {
    questions,
    answers,
    setAnswers,
    selectedQuestionId,
    setSelectedQuestionId,
    ctaText,
    onAnswerSubmit,
  };
};

export default useQuestionnaire;
