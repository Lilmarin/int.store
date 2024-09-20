import { Input } from "@mui/material";
import eliceWhite from "../../Img/EliceWhiteTotal.svg";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function Transactions() {
  const [filteredRows, setFilteredRows] = React.useState([]);

  function createData(TransactionID, Moneda, Cantidad, Fecha) {
    return { TransactionID, Moneda, Cantidad, Fecha };
  }

  const rows = [
    createData(1, "USD", 190.88, "2024-01-13"),
    createData(2, "GBP", 965.7, "2024-07-22"),
    createData(3, "MXN", 269.74, "2023-07-12"),
    createData(4, "GBP", 539.14, "2024-03-22"),
    createData(5, "MXN", 840.18, "2024-04-09"),
    createData(6, "EUR", 569.43, "2023-01-17"),
    createData(7, "JPY", 756.94, "2022-09-14"),
    createData(8, "MXN", 88.33, "2022-10-05"),
    createData(9, "USD", 873.94, "2022-09-11"),
    createData(10, "MXN", 228.21, "2023-02-08"),
    createData(11, "USD", 376.99, "2023-05-28"),
    createData(12, "JPY", 392.72, "2023-12-06"),
    createData(13, "MXN", 955.67, "2023-07-17"),
    createData(14, "GBP", 992.49, "2022-10-13"),
    createData(15, "EUR", 420.63, "2023-07-11"),
    createData(16, "JPY", 762.5, "2023-08-01"),
    createData(17, "USD", 287.41, "2024-05-06"),
    createData(18, "EUR", 180.38, "2022-09-07"),
    createData(19, "MXN", 859.32, "2024-04-18"),
    createData(20, "USD", 162.28, "2023-04-24"),
    createData(21, "MXN", 550.98, "2023-08-09"),
    createData(22, "GBP", 567.64, "2022-09-02"),
    createData(23, "JPY", 794.45, "2024-01-17"),
    createData(24, "EUR", 117.75, "2023-03-26"),
    createData(25, "USD", 188.73, "2022-10-06"),
    createData(26, "MXN", 370.87, "2022-12-19"),
    createData(27, "JPY", 522.83, "2024-06-25"),
    createData(28, "GBP", 994.1, "2023-10-12"),
    createData(29, "USD", 668.21, "2022-12-28"),
    createData(30, "EUR", 152.41, "2023-03-21"),
    createData(31, "MXN", 179.38, "2024-04-21"),
    createData(32, "USD", 733.94, "2022-09-16"),
    createData(33, "JPY", 201.64, "2024-03-04"),
    createData(34, "GBP", 767.77, "2024-06-10"),
    createData(35, "MXN", 587.18, "2022-11-13"),
    createData(36, "USD", 413.94, "2022-12-10"),
    createData(37, "JPY", 228.54, "2023-05-05"),
    createData(38, "EUR", 879.23, "2023-08-28"),
    createData(39, "MXN", 362.39, "2023-03-19"),
    createData(40, "GBP", 658.22, "2023-12-17"),
    createData(41, "USD", 952.84, "2022-12-20"),
    createData(42, "JPY", 171.63, "2023-09-25"),
    createData(43, "EUR", 100.58, "2022-12-14"),
    createData(44, "MXN", 517.89, "2022-09-05"),
    createData(45, "USD", 871.9, "2024-04-12"),
    createData(46, "JPY", 260.35, "2023-02-04"),
    createData(47, "EUR", 991.38, "2023-11-02"),
    createData(48, "MXN", 641.14, "2023-06-15"),
    createData(49, "GBP", 452.11, "2022-11-21"),
    createData(50, "USD", 194.25, "2023-05-09"),
  ];

  const handleSearchByID = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredRows(rows); // Si el campo está vacío, mostramos todas las filas
    } else {
      const filtered = rows.filter((row) =>
        row.TransactionID.toString().includes(searchValue),
      );
      setFilteredRows(filtered);
    }
  };

  // Inicializamos `filteredRows` con todas las filas al cargar el componente
  React.useEffect(() => {
    setFilteredRows(rows);
  }, []);

  return (
    <section className="flex h-full flex-col bg-black text-white lg:h-screen lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center ">
        <section className="flex h-[400px] w-full flex-col items-center gap-5  px-7 sm:justify-start lg:w-[531px]  lg:justify-center lg:px-0">
          <img src={eliceWhite} alt="White Elice" className="sm:w-36 lg:w-44" />
          <h1>Total transacciones</h1>
          <div className="flex h-[44px] w-full items-center justify-center rounded-full bg-white text-black">
            <p>1,000’000,000’000,000</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>© Intelligent Networked Transactions LLC</p>
            <u>Últimas transacciones</u>
          </div>
        </section>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-start ">
        <section className="flex h-full w-full flex-col items-center gap-5  sm:pt-0 lg:pt-10">
          <h1 className="text-[30px] font-bold">Últimas transacciones</h1>
          <Input
            onChange={(e) => handleSearchByID(e)}
            placeholder="Buscar Transacción ID"
            sx={{
              width: "50%",
              color: "white",
              "&:before": {
                borderBottom: "1px solid white", // Borde por defecto
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "1px solid white", // Borde al hacer hover
              },
              "&:after": {
                borderBottom: "2px solid white", // Borde al hacer focus
              },
            }}
          />
          <TableContainer
            component={Paper}
            sx={{ backgroundColor: "black", color: "white", height: "600px" }}
          >
            <Table
              sx={{
                minWidth: 10,
                color: "white",
                textAlign: "center",
                borderCollapse: "collapse",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    "& th": { color: "white", textAlign: "center", border: 0 },
                  }}
                >
                  <TableCell align="center">Transaction ID</TableCell>
                  <TableCell align="center">Moneda</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                  <TableCell align="center">Fecha y hora</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "& td": {
                        color: "white",
                        textAlign: "center",
                        border: 0,
                      },
                    }}
                  >
                    <TableCell align="center">{row.TransactionID}</TableCell>
                    <TableCell align="center">{row.Moneda}</TableCell>
                    <TableCell align="center">{row.Cantidad}</TableCell>
                    <TableCell align="center">{row.Fecha}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </div>

      {/* <section className="flex h-full w-full items-start justify-center pt-10">
        <div className="flex h-full w-[570px] flex-col items-center justify-start gap-5">
          <h1 className="text-[30px] font-bold">Últimas transacciones</h1>
          <Input
            onChange={(e) => handleSearchByID(e)}
            placeholder="Buscar Transacción ID"
            sx={{
              width: "50%",
              color: "white",
              "&:before": {
                borderBottom: "1px solid white", // Borde por defecto
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "1px solid white", // Borde al hacer hover
              },
              "&:after": {
                borderBottom: "2px solid white", // Borde al hacer focus
              },
            }}
          />
          <TableContainer
            component={Paper}
            sx={{ backgroundColor: "black", color: "white", height: "600px" }}
          >
            <Table
              sx={{
                minWidth: 10,
                color: "white",
                textAlign: "center",
                borderCollapse: "collapse",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    "& th": { color: "white", textAlign: "center", border: 0 },
                  }}
                >
                  <TableCell align="center">Transaction ID</TableCell>
                  <TableCell align="center">Moneda</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                  <TableCell align="center">Fecha y hora</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "& td": {
                        color: "white",
                        textAlign: "center",
                        border: 0,
                      },
                    }}
                  >
                    <TableCell align="center">{row.TransactionID}</TableCell>
                    <TableCell align="center">{row.Moneda}</TableCell>
                    <TableCell align="center">{row.Cantidad}</TableCell>
                    <TableCell align="center">{row.Fecha}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section> */}
    </section>
  );
}
