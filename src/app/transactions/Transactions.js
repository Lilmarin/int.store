import { Input } from "@mui/material";
import eliceWhite from "../../Img/EliceWhiteTotal.svg";
import logoBlack from "../../Img/logoBlack.svg";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllTransactions } from "../../services/transactions";
import { formatNumber } from "../../lib/formatNumber";
import { useSpring, animated } from "@react-spring/web";
import { Helmet } from "react-helmet-async";

export default function Transactions() {
  const [transactions, setTransactions] = React.useState([]);
  const [allTransactions, setAllTransactions] = React.useState([]);
  const [countTransactions, setCountTransactions] = React.useState(0);
  const [loading, setLoading] = React.useState(true); // Maneja la primera carga
  const [firstLoad, setFirstLoad] = React.useState(true); // Nuevo estado para la primera carga
  const [animate, setAnimate] = React.useState(false); // Nuevo estado para la animación
  const springProps = useSpring({
    from: { number: 0 },
    to: { number: countTransactions },
    config: { tension: 120, friction: 14 }, // Ajusta la velocidad de la animación
  });

  const fetchTransactions = async () => {
    try {
      // Solo muestra el spinner en la primera carga
      if (firstLoad) {
        setLoading(true);
      }

      const data = await getAllTransactions();
      setTransactions(data.transactions);
      setAllTransactions(data.transactions);
      setCountTransactions(data.totalCompletedTransactions);
      setLoading(false);
      setFirstLoad(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  React.useEffect(() => {
    fetchTransactions();

    const interval = setInterval(() => {
      fetchTransactions(); // Continúa actualizando las transacciones
    }, 10000); // Actualiza cada 10 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  React.useEffect(() => {
    if (!firstLoad) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500); // La animación dura 500ms
      return () => clearTimeout(timeout);
    }
  }, [countTransactions]);

  const handleSearchByID = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setTransactions(allTransactions);
    } else {
      const filteredRows = allTransactions.filter(
        (row) => row.id.toString() === searchValue,
      );
      setTransactions(filteredRows);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("sv-SE", { timeZone: "UTC" }); // Formato YYYY-MM-DD HH:mm:ss
  };

  return (
    <>
      <Helmet>
        <title>Transacciones INT</title>
        <meta
          name="Transacciones INT"
          content="Ve las transacciones realizadas en la plataforma INT."
        />
        <link rel="icon" href={logoBlack} />
      </Helmet>
      <section className="fontRedHat flex h-full flex-col bg-black text-white lg:h-screen lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center ">
          <section className="flex h-[400px] w-full flex-col items-center gap-5 px-7 sm:justify-start lg:w-[531px] lg:justify-center lg:px-0">
            <img
              src={eliceWhite}
              alt="White Elice"
              className="cursor-pointer sm:w-36 lg:w-44"
              onClick={() => (window.location.href = "https://int.store/")}
            />
            <h1 className="text-[34px] font-bold lg:text-[36px]">
              Total transacciones
            </h1>
            <div className="flex h-[40px] w-full items-center justify-center rounded-full bg-white text-black">
              {/* {loading ? (
              <CircularProgress color="inherit" size={30} />
            ) : (
  <p
  className={`text-[26px] font-light lg:text-[36px] transition-transform duration-500 ease-out ${
    animate ? 'scale-110' : 'scale-100'
  }`}
>
  {formatNumber(countTransactions)}
</p>

            )} */}
              <animated.p className="text-[26px] font-light lg:text-[36px]">
                {springProps.number.to((n) => formatNumber(Math.floor(n)))}
              </animated.p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => (window.location.href = "https://int.store/")}
              >
                <p className="fontRoboto">
                  © Intelligent Networked Transactions LLC
                </p>
              </button>
            </div>
          </section>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-start ">
          <section className="flex h-full w-full flex-col items-center gap-5 sm:pt-0 lg:pt-10">
            <h1 className="text-[30px] font-bold">Últimas transacciones</h1>
            <Input
              type="tel" // Usa "tel" para mostrar el teclado numérico en dispositivos móviles
              onChange={handleSearchByID}
              placeholder="Buscar Transacción ID"
              sx={{
                width: "50%",
                color: "white",
                "&:before": {
                  borderBottom: "1px solid white", // Default border
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "1px solid white", // Hover border
                },
                "&:after": {
                  borderBottom: "2px solid white", // Focus border
                },
              }}
            />
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "black",
                color: "white",
                height: "600px", // Mantener la altura para permitir el scroll
                overflowY: "scroll", // Permitir el desplazamiento en el eje Y
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none", // Para IE y Edge
                "scrollbar-width": "none", // Para Firefox
              }}
            >
              {/* {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Asegura que el spinner se muestre en el centro verticalmente
                }}
              >
                <CircularProgress color="inherit" />
              </div>
            ) :*/}
              {transactions.length === 0 ? (
                <p
                  variant="h6"
                  align="center"
                  color="white"
                  sx={{ padding: "20px" }}
                >
                  No hay datos disponibles
                </p>
              ) : (
                <Table
                  sx={{
                    minWidth: 10,
                    color: "white",
                    textAlign: "center",
                    borderCollapse: "collapse",
                    "& th, & td": {
                      // Tamaños de letra diferentes según la resolución
                      fontSize: {
                        xs: "11px", // Para pantallas pequeñas (móviles)
                        sm: "14px", // Para pantallas medianas (tabletas)
                        md: "16px", // Para pantallas más grandes (laptops/desktops)
                      },
                    },
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        "& th": {
                          color: "white",
                          textAlign: "center",
                          border: 0,
                          fontSize: "12px",
                          padding: "8px", // Reducir el padding de las cabeceras
                        },
                      }}
                    >
                      <TableCell align="center">Transaccción ID</TableCell>
                      <TableCell align="center">Tiempo</TableCell>
                      <TableCell align="center">Moneda</TableCell>
                      <TableCell align="center">Cantidad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "& td": {
                            color: "white",
                            textAlign: "center",
                            border: 0,
                            padding: "8px", // Reducir el padding de las celdas
                          },
                        }}
                      >
                        <TableCell align="center">
                          {formatNumber(row.id)}
                        </TableCell>
                        <TableCell align="center">
                          {formatDate(row.paymentDate)}{" "}
                          {/* Aplicar la función aquí */}
                        </TableCell>
                        <TableCell align="center">MXN</TableCell>
                        <TableCell align="center">
                          $ {formatNumber(row.amount)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
          </section>
        </div>
      </section>
    </>
  );
}
