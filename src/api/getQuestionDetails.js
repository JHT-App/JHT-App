const getQuestionDetails = async (id) => {
  try {
    const response = await fetch(`/api/questionDetail/${id}`);
    if (!response.ok) {
      throw new Error('Error sending row.id to server endpoint');
    }
    const data = await response.json();
    localStorage.setItem('question', JSON.stringify(data[0]));
    return data;
  } catch (error) {
    console.log('Error at getQuestionDetails: ', error);
  }
};

export default getQuestionDetails;
