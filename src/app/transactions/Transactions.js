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
import { formatNumber, onlyTwoDecimals } from "../../lib/formatNumber";
import { useSpring, animated } from "@react-spring/web";
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useMemo } from "react";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [allTransactions, setAllTransactions] = useState([]);
  const [countTransactions, setCountTransactions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [animate, setAnimate] = useState(false);

  const springProps = useSpring({
    from: { number: 0 },
    to: { number: countTransactions },
    config: { tension: 120, friction: 14 },
  });

  const fetchTransactions = async () => {
    try {
      if (firstLoad) {
        setLoading(true);
      }

      const data = await getAllTransactions();
      setAllTransactions(data.transactions);
      setCountTransactions(data.totalCompletedTransactions);
      setLoading(false);
      setFirstLoad(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();

    const interval = setInterval(() => {
      fetchTransactions();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [countTransactions]);

  // useMemo para filtrar transacciones basado en 'search'
  const filteredTransactions = useMemo(() => {
    if (search === "") {
      return allTransactions;
    }
    return allTransactions.filter((row) => row.id.toString() === search);
  }, [search, allTransactions]);

  const handleSearchByID = (e) => {
    setSearch(e.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("sv-SE", { timeZone: "UTC" });
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

        <div className="flex w-full flex-col items-center justify-center ">
          <section className="flex h-full w-full flex-col items-center justify-center gap-5 sm:pt-0 lg:pt-10">
            <h1 className="text-[30px] font-bold">Últimas transacciones</h1>
            <Input
              type="tel"
              onChange={handleSearchByID}
              placeholder="Buscar Transacción ID"
              sx={{
                width: "50%",
                color: "white",
                "&:before": {
                  borderBottom: "1px solid white",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "1px solid white",
                },
                "&:after": {
                  borderBottom: "2px solid white",
                },
              }}
            />
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "black",
                color: "white",
                height: "600px",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {filteredTransactions.length === 0 ? (
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
                      fontSize: {
                        xs: "11px",
                        sm: "14px",
                        md: "16px",
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
                          padding: "8px",
                        },
                      }}
                    >
                      <TableCell align="center">Transacción ID</TableCell>
                      <TableCell align="center">Tiempo</TableCell>
                      <TableCell align="center">Moneda</TableCell>
                      <TableCell align="center">Cantidad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredTransactions.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "& td": {
                            color: "white",
                            textAlign: "center",
                            border: 0,
                            padding: "8px",
                          },
                        }}
                      >
                        <TableCell align="center">
                          {formatNumber(row.id)}
                        </TableCell>
                        <TableCell align="center">
                          {formatDate(row.paymentDate)}
                        </TableCell>
                        <TableCell align="center">MXN</TableCell>
                        <TableCell align="center">
                          $ {formatNumber(onlyTwoDecimals(row.amount))}
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
