exports.isPostBodyMissingField = (obj) => {
  if (
    obj.email == false ||
    obj.firstname == false ||
    obj.lastname == false ||
    obj.lastname == null ||
    obj.email == null ||
    obj.firstname == null
  ) {
    return true;
  } else {
    return false;
  }
};
