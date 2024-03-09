export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  } catch (e) {
    queue.push(`Error: ${e.message}`);
    queue.push('Guardrail was processed');
  }
  return queue;
}
