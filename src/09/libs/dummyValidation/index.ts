export const dummyValidation = (() => {
  const StatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
  };

  const status = StatusCodes.OK;
  return {
    status,
  };
})();
