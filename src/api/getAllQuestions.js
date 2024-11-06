/**
 *
 *
 */
const getAllQuestions = async () => {
  const url = "/api/questions-test";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Response code was not ok requesting ${url}.  Response: ${response}`
      );
    }
    const json = await response.json();
    console.log("json", json);
    console.log("response", response);
    return json;
  } catch (e) {
    console.error(
      `Get all questions request error when requesting ${url}: ${e}`
    );
  }
};

export default getAllQuestions;
