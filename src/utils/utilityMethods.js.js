// Unique value generator

export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

// Unique name generator

export function generateUniqueFileName(fileName) {
  const parts = fileName.split(".");
  return `${parts[0]}_${uuidv4()}.${parts[1]}`;
}
