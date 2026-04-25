import { knowledgeBase, KnowledgeChunk } from './knowledge';

export function retrieveRelevantInfo(query: string): KnowledgeChunk | null {
  const queryLower = query.toLowerCase();
  let bestMatch: KnowledgeChunk | null = null;
  let highestScore = 0;

  for (const chunk of knowledgeBase) {
    let score = 0;
    
    // Check keyword matches
    for (const keyword of chunk.keywords) {
      if (queryLower.includes(keyword.toLowerCase())) {
        score += 2;
      }
    }

    // Check content overlap
    const words = queryLower.split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && chunk.content.toLowerCase().includes(word)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = chunk;
    }
  }

  // Threshold to ensure relevance
  return highestScore > 1 ? bestMatch : null;
}

export function generateResponse(query: string): string {
  const relevantChunk = retrieveRelevantInfo(query);

  if (!relevantChunk) {
    return "I couldn't find specific health advice for that query. For general inquiries, you can fill out our support form. If this is an emergency, please contact local medical services.";
  }

  const templates = [
    `Based on our health guidelines for ${relevantChunk.topic}:`,
    `Here is some information regarding ${relevantChunk.topic}:`,
    `According to our resources on ${relevantChunk.topic}:`,
  ];

  const template = templates[Math.floor(Math.random() * templates.length)];
  
  return `${template} ${relevantChunk.content}`;
}
