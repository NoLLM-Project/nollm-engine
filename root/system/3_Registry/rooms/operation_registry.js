// Minimal Operation Registry
export const OperationRegistry = {
  DefaultOperation: {
    name: "DefaultOperation",
    handler: (input) => ({ result: 'Handled by DefaultOperationL ${input.value}' })
  }
};