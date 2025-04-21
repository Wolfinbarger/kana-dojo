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
              if (
                cell.classList.contains("selected") &&
                !rows[i].querySelector("th").classList.contains("selected")
              ) {
                cell.classList.remove("selected");
              } else {
                cell.classList.add("selected");
              }

              columnCells.push(cell);
            }
          }
        }
      }

      if (isRowHeader) {
        const table = clickedCell.closest("table");
        const thead = table.querySelector("thead");
        const allheaderCells = thead.querySelectorAll("th");

        const headerCells = [...allheaderCells].slice(1);
        const rowTd = clickedCell.parentElement.querySelectorAll("td");
        if (clickedCell.classList.contains("selected")) {
          clickedCell.classList.remove("selected");

          rowTd.forEach((td, index) => {
            const headerCell = headerCells[index];
            if (
              td.classList.contains("selected") &&
              headerCell &&
              !headerCell.classList.contains("selected")
            ) {
              td.classList.remove("selected");
            }
          });
        } else {
          clickedCell.classList.add("selected");
          rowTd.forEach((td) => {
            if (!td.classList.contains("selected")) {
              td.classList.add("selected");
            }
          });
        }
      }
    } else {
      const table = clickedCell.closest("table");
      const thead = table.querySelector("thead");
      const allheaderCells = thead.querySelectorAll("th");
      const allRowCells = clickedCell.parentElement.querySelectorAll("td");
      const rowCells = [...allRowCells];

      const clickedCellIndex = rowCells.findIndex(
        (td) => td.innerText === clickedCell.innerText
      );

      const headerCells = [...allheaderCells].slice(1);
      if (clickedCell.classList.contains("selected")) {
        clickedCell.classList.remove("selected");
        clickedCell.parentElement
          .querySelector("th")
          .classList.remove("selected");
        headerCells[clickedCellIndex].classList.remove("selected");
      } else {
        clickedCell.classList.add("selected");
        if (
          Array.from(clickedCell.parentElement.querySelectorAll("td")).every(
            (td) => td.classList.contains("selected")
          )
        ) {
          clickedCell.parentElement
            .querySelector("th")
            .classList.add("selected");
        }

        const rows = clickedCell.closest("table").querySelectorAll("tr");
        const arrCol = [];
        rows.forEach((row) =>
          arrCol.push(row.childNodes[clickedCellIndex + 1])
        );

        if (arrCol.slice(1).every((td) => td.classList.contains("selected"))) {
          clickedCell
            .closest("table")
            .querySelectorAll("thead th")
            [clickedCellIndex + 1].classList.add("selected");
        }
        // const columnCells = [];

        // for (let i = 1; i < rows.length; i++) {
        //   const cell = rows[i].children[columnIndex];
        //   if (cell && cell.tagName.toLowerCase() === "td") {
        //     if (
        //       cell.classList.contains("selected") &&
        //       !rows[i].querySelector("th").classList.contains("selected")
        //     ) {
        //       cell.classList.remove("selected");
        //     } else {
        //       cell.classList.add("selected");
        //     }

        //     columnCells.push(cell);
        //   }
        // }
      }
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
