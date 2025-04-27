import { v4 as uuidv4 } from "uuid";

const isHeader = (cell) => cell.tagName.toLowerCase() === "th";

const isRowHeader = (cell) => cell.getAttribute("scope") === "row";

const isColumnHeader = (cell) => cell.getAttribute("scope") === "col";

const selectColumnCells = (clickedCell) => {
  clickedCell.classList.contains("select")
    ? clickedCell.classList.remove("select")
    : clickedCell.classList.add("select");

  const headerRow = clickedCell.parentElement;
  const headerCells = Array.from(headerRow.children);
  const columnIndex = headerCells.indexOf(clickedCell);

  if (columnIndex > 0) {
    const rows = clickedCell.closest("table").querySelectorAll("tr");

    const columnCells = [];

    for (let i = 1; i < rows.length; i++) {
      const cell = rows[i].children[columnIndex];
      if (cell && cell.tagName.toLowerCase() === "td") {
        if (
          cell.classList.contains("select") &&
          !rows[i].querySelector("th").classList.contains("select")
        ) {
          cell.classList.remove("select");
        } else {
          cell.classList.add("select");
        }

        columnCells.push(cell);
      }
    }
  }
};

const selectRowCells = (clickedCell) => {
  const table = clickedCell.closest("table");
  const thead = table.querySelector("thead");
  const allheaderCells = thead.querySelectorAll("th");

  const headerCells = [...allheaderCells].slice(1);
  const rowTd = clickedCell.parentElement.querySelectorAll("td");
  if (clickedCell.classList.contains("select")) {
    clickedCell.classList.remove("select");

    rowTd.forEach((td, index) => {
      const headerCell = headerCells[index];
      if (
        td.classList.contains("select") &&
        headerCell &&
        !headerCell.classList.contains("select")
      ) {
        td.classList.remove("select");
      }
    });
  } else {
    clickedCell.classList.add("select");
    rowTd.forEach((td) => {
      if (!td.classList.contains("select")) {
        td.classList.add("select");
      }
    });
  }
};

const selectAllCells = (cell) => {
  const table = cell.closest("table");

  if (cell.classList.contains("select")) {
    table
      .querySelectorAll("tr > th, tr > td")
      .forEach((cell) => cell.classList.remove("select"));
  } else {
    table
      .querySelectorAll("tr > th, tr > td")
      .forEach((cell) => cell.classList.add("select"));
  }
};

const selectCells = (clickedCell) => {
  const table = clickedCell.closest("table");
  const thead = table.querySelector("thead");
  const allheaderCells = thead.querySelectorAll("th");
  const allRowCells = clickedCell.parentElement.querySelectorAll("td");
  const rowCells = [...allRowCells];

  const clickedCellIndex = rowCells.findIndex(
    (td) => td.innerText === clickedCell.innerText
  );

  const headerCells = [...allheaderCells].slice(1);
  if (clickedCell.classList.contains("select")) {
    clickedCell.classList.remove("select");
    clickedCell.parentElement.querySelector("th").classList.remove("select");
    headerCells[clickedCellIndex].classList.remove("select");
  } else {
    clickedCell.classList.add("select");
    if (
      Array.from(clickedCell.parentElement.querySelectorAll("td")).every((td) =>
        td.classList.contains("select")
      )
    ) {
      clickedCell.parentElement.querySelector("th").classList.add("select");
    }

    const rows = clickedCell.closest("table").querySelectorAll("tr");
    const arrCol = [];
    rows.forEach((row) => arrCol.push(row.childNodes[clickedCellIndex + 1]));

    if (arrCol.slice(1).every((td) => td.classList.contains("select"))) {
      clickedCell
        .closest("table")
        .querySelectorAll("thead th")
        [clickedCellIndex + 1].classList.add("select");
    }
  }
};

const selectCell = (cell) => cell.classList.add("select");
const unselectCell = (cell) => cell.classList.remove("select");

const Table = ({ props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const clickedCell = e.target;

    if (clickedCell.textContent === "*") {
      selectAllCells(clickedCell);
    }

    if (isHeader(clickedCell)) {
      if (isColumnHeader(clickedCell)) {
        selectColumnCells(clickedCell);
      }

      if (isRowHeader(clickedCell)) {
        selectRowCells(clickedCell);
      }
    } else {
      selectCells(clickedCell);
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
