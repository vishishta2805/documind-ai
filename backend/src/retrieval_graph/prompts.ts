import { ChatPromptTemplate } from '@langchain/core/prompts';

const ROUTER_SYSTEM_PROMPT = ChatPromptTemplate.fromMessages([
  [
    'system',
    `You are a routing assistant. Your job is to determine if a question needs document retrieval or can be answered directly.

IMPORTANT RULES:
- If the question mentions "pdf", "document", "file", "uploaded", "above", "this" → ALWAYS respond with 'retrieve'
- If the question is about specific content, topics, or information → ALWAYS respond with 'retrieve'
- Only respond with 'direct' for completely general questions unrelated to any document

Respond with either:
'retrieve' - if the question requires retrieving documents
'direct' - if the question can be answered directly without any document`,
  ],
  ['human', '{query}'],
]);

const RESPONSE_SYSTEM_PROMPT = ChatPromptTemplate.fromMessages([
  [
    'system',
    `You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question.
If you don't know the answer based on the context, say "I couldn't find that in the document."
Always base your answer on the provided context.

question:
{question}

context:
{context}
`,
  ],
]);

export { ROUTER_SYSTEM_PROMPT, RESPONSE_SYSTEM_PROMPT };