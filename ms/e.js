class ValidationError extends Error {
  constructor(fields) {
    super();
    this.fields = fields;
  }
}

function validateSchema(data, schema) {
  const invalidFields = [];
  for (let key in schema) {
    if (typeof data[key] !== schema[key]) {
      invalidFields.push(key);
    }
  }
  if (invalidFields.length > 0) {
    throw new ValidationError(invalidFields);
  }
  return true;
}

function safeValidate(data, schema) {
  try {
    validateSchema(data, schema);
    return "Valid";
  } catch (error) {
    if (error instanceof ValidationError) {
      return error.fields.join(", ");
    }
    throw error;
  }
}

// Test Code
const userSchema = { name: "string", age: "number", active: "boolean" };
const userData = { name: "Alice", age: "thirty", active: 1 };
console.log(safeValidate(userData, userSchema));
