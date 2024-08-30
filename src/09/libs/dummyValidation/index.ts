type StatusCodes = {
  OK: 200;
  BAD_REQUEST: 400;
  INTERNAL_SERVER_ERROR: 500;
};

const statusCodes: StatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};

export const dummyValidation = (() => {
  const createStatusCode = () => {
    const randomValue = Math.floor(Math.random() * 100);
    const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } = statusCodes;

    if (randomValue < 25) return INTERNAL_SERVER_ERROR;
    if (randomValue < 50) return BAD_REQUEST;
    return OK;
  };

  const returnResult = () => {
    const statusCode = createStatusCode();
    return {
      result: {
        statusCode,
        value: "it is value!",
      },
    };
  };

  return { returnResult };
})();
