export interface IDictionaryExamplesResponse {
  normalizedSource: string;
  normalizedTarget: string;
  examples: Example[];
}

export interface Example {
  sourcePrefix: string;
  sourceTerm: string;
  sourceSuffix: string;
  targetPrefix: string;
  targetTerm: string;
  targetSuffix: string;
}
