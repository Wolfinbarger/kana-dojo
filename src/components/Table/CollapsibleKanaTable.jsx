const CollapsibleKanaTable = ({ scriptName, data }) => {
  return (
    <>
      <details>
        <summary>{scriptName}</summary>
        {Object.entries(data).map(([key, values]) => (
          <p key={`${scriptName}-${key}`}>{Object.values(values)}</p>
        ))}
      </details>
    </>
  );
};

export default CollapsibleKanaTable;
