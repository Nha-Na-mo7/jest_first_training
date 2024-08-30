const StatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};

const randomStatusCode = () => {
  const randomValue = Math.floor(Math.random() * 100);
  const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

  if (randomValue < 25) return INTERNAL_SERVER_ERROR;
  if (randomValue < 50) return BAD_REQUEST;
  return OK;
};

export const dummyValidation = (() => {
  const statusCode = randomStatusCode();

  return {
    statusCode,
  };
})();
