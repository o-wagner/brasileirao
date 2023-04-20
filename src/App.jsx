import { useState, useEffect } from "react";
import { getCampeonato } from "./services/api";
import './App.css';

function App() {
  const [brasileirao, setBrasileirao] = useState([]);

  async function fetchData() {
    const response = await getCampeonato("tabela");
    setBrasileirao(response);
  }

  console.log(brasileirao);

  useEffect(() => {
    if (brasileirao?.length === 0) {
      fetchData();
    }
  }, [brasileirao]);

  return (
    <div className="App">
      <header>
        <h1>BRASILEIRÃO 2023</h1>
        <div className="row">
          <label>Tabela de Classificação</label>
        </div>
      </header>

      {brasileirao.length === 0 ? (
        <div className="loading">Carregando...</div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th />
                <th />
                <th className="txtLeft">Clube</th>
                <th>Pts</th>
                <th>Partidas</th>
                <th>Vitórias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>GM</th>
                <th>GC</th>
                <th>SG</th>
                <th>AP (%)</th>
              </tr>
            </thead>
            <tbody>
              {brasileirao.map((time, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "odd" : "even"}`}
                >
                  <td>
                      <img src={time.time.escudo} alt={time.nome} width={30} height={30}></img>
                  </td>
                  <td>{time.posicao}</td>
                  <td className="txtLeft">{time.time.nome_popular}</td>
                  <td>{time.pontos}</td>
                  <td>{time.jogos}</td>
                  <td>{time.vitorias}</td>
                  <td>{time.empates}</td>
                  <td>{time.derrotas}</td>
                  <td>{time.gols_pro}</td>
                  <td>{time.gols_contra}</td>
                  <td>{time.saldo_gols}</td>
                  <td>{time.aproveitamento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}


    </div>
  );
}

export default App
