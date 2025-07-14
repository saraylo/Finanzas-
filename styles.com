body {
  background-color: #ffeef4;
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 2rem;
  text-align: center;
  color: #333;
}

h1 {
  color: #c94d7e;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.semestre {
  background: #ffffffb2;
  border: 2px solid #f7b7cd;
  padding: 1rem;
  border-radius: 12px;
  width: 200px;
  box-shadow: 0 0 10px #f7c0d7;
}

.semestre h2 {
  font-size: 1.2rem;
  color: #b03261;
  margin-bottom: 1rem;
}

button.materia {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  border: none;
  border-radius: 10px;
  background-color: #e479a0;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
}

button.materia:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button.materia.aprobada {
  background: transparent;
  border: none;
  color: #b03261;
  font-style: italic;
  text-decoration: line-through;
  cursor: default;
    }
