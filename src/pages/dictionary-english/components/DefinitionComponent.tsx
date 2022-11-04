import { Definition } from "../types/DictionaryResponse";

type DefinitionProps = {
  definition: Definition;
};
export const DefinitionComponent = ({ definition }: DefinitionProps) => {
  return (
    <div className="mb-3">
      <li>{definition.definition}</li>
      {definition.example && (
        <em className="ml-3 mt-2 flex space-x-2 text-slate-600 text-sm">
          <div>
            <span className="mr-1">&#8226;</span>
            <span>Example:</span>
          </div>
          <span>{definition.example}</span>
        </em>
      )}
    </div>
  );
};
