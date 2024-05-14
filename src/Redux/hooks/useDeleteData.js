import axios from 'axios';

const useDeleteData = (url) => {
  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: {
          Accept: 'application/json',
          Lang: 'ar',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
        },
      });
    } catch (error) {
      throw error;
    }
  };

  return deleteData;
};

export default useDeleteData;
