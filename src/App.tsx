
import './App.css';
import styled from "styled-components";
const button = styled.button`
  background-color: #c47135;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'BenchNine', Arial, sans-serif;
  font-size: 22px;
  line-height: 1em;
  margin: 15px 40px;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
`
const Box = styled.div`
  height: 150px;
  width: 100%;
  border-radius: 1px;
  background-color: chartreuse;
  
`
function App() {
  return (
      <Box>
    <button>Hello</button>
      </Box>

  );
}

export default App;
