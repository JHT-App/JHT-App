const getAllQuestions = async () => {
  const url = '/api/questions-test';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Response code was not ok requesting ${url}.  Response: ${response}`
      );
    }
    const data = await response.json();
    console.log('data', data);
    console.log('response', response);
    return data;
  } catch (e) {
    console.error(
      `Get all questions request error when requesting ${url}: ${e}`
    );
  }
};

export default getAllQuestions;
