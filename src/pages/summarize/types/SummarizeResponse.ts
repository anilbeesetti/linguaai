export interface ISummarizeResponse {
  kind: string;
  taskName: string;
  lastUpdateDateTime: string;
  status: string;
  results: Results;
}

export interface Results {
  documents: Document[];
  errors: string[];
  modelVersion: string;
}

export interface Document {
  id: string;
  sentences: Sentence[];
  warnings: string[];
}

export interface Sentence {
  text: string;
  rankScore: number;
  offset: number;
  length: number;
}
