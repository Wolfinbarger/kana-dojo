import { v4 as uuidv4 } from "uuid";

const Table = ({ props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const clickedCell = e.target;
    if (clickedCell.textContent === "*") {
      const table = clickedCell.closest("table");
      table.classList.contains("selected")
        ? table.classList.remove("selected")
        : table.classList.add("selected");
      const allTdElements = table.querySelectorAll("td");

      allTdElements.forEach((element) => {
        element.classList.contains("selected")
          ? element.classList.remove("selected")
          : element.classList.add("selected");
      });
    }

    const isHeader = clickedCell.tagName.toLowerCase() === "th";

    if (isHeader) {
      const isRowHeader = clickedCell.getAttribute("scope") === "row";

      const isColumnHeader = clickedCell.getAttribute("scope") === "col";

      if (isColumnHeader) {
        clickedCell.classList.contains("selected")
          ? clickedCell.classList.remove("selected")
          : clickedCell.classList.add("selected");

        const headerRow = clickedCell.parentElement;
        const headerCells = Array.from(headerRow.children);
        const columnIndex = headerCells.indexOf(clickedCell);

        if (columnIndex > 0) {
          const rows = clickedCell.closest("table").querySelectorAll("tr");

          const columnCells = [];

          for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].children[columnIndex];
            if (cell && cell.tagName.toLowerCase() === "td") {
              cell.classList.contains("selected")
                ? cell.classList.remove("selected")
                : cell.classList.add("selected");
              columnCells.push(cell);
            }
          }
        }
      }

      if (isRowHeader) {
        clickedCell.classList.contains("selected")
          ? clickedCell.classList.remove("selected")
          : clickedCell.classList.add("selected");

        const row = clickedCell.closest("tr");
        row.classList.contains("selected")
          ? row.classList.remove("selected")
          : row.classList.add("selected");
      }
    } else {
      clickedCell.classList.contains("selected")
        ? clickedCell.classList.remove("selected")
        : clickedCell.classList.add("selected");
    }
  };

  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        return (
          <details key={uuidv4()}>
            <summary>{key}</summary>
            <table>
              <thead>
                <tr>
                  <th onClick={handleClick}>*</th>
                  <th scope='col' onClick={handleClick}>
                    a
                  </th>
                  <th scope='col' onClick={handleClick}>
                    i
                  </th>
                  <th scope='col' onClick={handleClick}>
                    u
                  </th>
                  <th scope='col' onClick={handleClick}>
                    e
                  </th>
                  <th scope='col' onClick={handleClick}>
                    o
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(value).map(([key, characters]) => {
                  return (
                    <tr key={uuidv4()}>
                      <th scope='row' onClick={handleClick}>
                        {key === "vowels" ? " " : key}
                      </th>

                      {characters.map((char) => {
                        return (
                          <td key={uuidv4()} onClick={handleClick}>
                            {char}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </details>
        );
      })}
    </>
  );
};

export default Table;
