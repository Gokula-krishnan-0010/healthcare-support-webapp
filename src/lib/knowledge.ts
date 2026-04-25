export interface KnowledgeChunk {
  id: string;
  topic: string;
  content: string;
  keywords: string[];
}

export const knowledgeBase: KnowledgeChunk[] = [
  {
    id: 'cold-1',
    topic: 'Common Cold',
    content: 'The common cold is a viral infection of your nose and throat. Symptoms include a runny or stuffy nose, sore throat, cough, congestion, and slight body aches. Prevention includes washing hands often and avoiding close contact with people who have colds.',
    keywords: ['cold', 'runny nose', 'stuffy nose', 'sore throat', 'cough', 'congestion', 'flu'],
  },
  {
    id: 'cold-2',
    topic: 'Common Cold Treatment',
    content: 'There is no cure for the common cold. Treatments focus on relieving symptoms. This includes drinking plenty of fluids, getting rest, and using over-the-counter medications like pain relievers or decongestants. Honey can help soothe a cough.',
    keywords: ['cold treatment', 'cure', 'flu treatment', 'flu relief', 'flu meds'],
  },
  {
    id: 'wounds-1',
    topic: 'Open Wounds',
    content: 'For minor open wounds, clean the wound with cool water. Use soap and a washcloth to clean the area around the wound, but try to keep soap out of the wound itself. Apply an antibiotic ointment to keep the wound moist and prevent infection.',
    keywords: ['wound', 'cut', 'scrape', 'open wound', 'cleaning wound', 'infection'],
  },
  {
    id: 'bleeding-1',
    topic: 'Stopping Bleeding',
    content: 'To stop bleeding, apply direct pressure to the wound with a clean cloth, tissue, or piece of gauze until bleeding stops. If the blood soaks through the material, don’t remove it. Put more cloth on top of it and continue to apply pressure. Elevate the wounded area if possible.',
    keywords: ['bleeding', 'stop bleeding', 'blood', 'pressure', 'hemorrhage', 'first aid'],
  },
];
