// 200
function responseSuccess(res, message, data) {
  if (data) {
    res.status(200).json({
      status: 'Success',
      message,
      content: data,
    });
  } else {
    res.status(200).json({
      status: 'Success',
      message,
    });
  }
}

// 201
function responseCreatedSuccess(res, message = 'Data created successfully!') {
  res.status(201).json({
    status: 'Success',
    message,
  });
}

// 400
function resonseFail(res, message = 'Invalid or wrong format input!') {
  res.status(400).json({
    status: 'Failure',
    message,
  });
}

// 404
const responseNotFound = (res, message = 'Data not found...') => {
  res.status(404).json({
    status: 'Failure',
    message,
  });
};

// 409
const responseConflict = (res, message = 'Data already exists!') => {
  res.status(409).json({
    status: 'Failure',
    message,
  });
};

// 500
const responseError = (res, message = 'Server error!') => {
  res.status(500).json({
    status: 'Failure',
    message,
  });
};

export {
  responseSuccess,
  responseCreatedSuccess,
  resonseFail,
  responseNotFound,
  responseConflict,
  responseError,
};
