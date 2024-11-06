const getAllQuestions = async () => {
  try {
    const response = await fetch('/api/questions');
    if (!response.ok) {
      throw new Error(
        `Response code was not ok requesting '/questions'.  Response: ${response}`
      );
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(
      `Get all questions request error when requesting '/questions': ${e}`
    );
  }
};

export default getAllQuestions;
