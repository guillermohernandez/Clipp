import { useState, useEffect } from "react";

function App() {
  // State for input values

  const [inputs, setInputs] = useState({
    cycleSet: "",
    cycle: "",
    teamNumber: "",
    srNumber: "",
    rits: "",
  });

  // State for displayed values (debounced)

  const [displayedValues, setDisplayedValues] = useState({
    cycleSet: "",
    cycle: "",
    teamNumber: "",
    srNumber: "",
    rits: "",
  });

  // Debounce effect - updates display 500ms after user stops typing

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedValues(inputs);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputs]);

  // Handle input changes

  const handleChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,

      [field]: value,
    }));
  };

  return (
    <div className="container mx-auto py-6">
      {/* Input Fields */}
      <h1 className="text-green-600 text-5xl font-bold">Clippy</h1>
      <div class="grid grid-rows-3 grid-flow-col">
        <div className="row-span-full">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Enter</legend>
            <label htmlFor="cycleSet">Cycle Set:</label>

            <input
              className="input join-item"
              id="cycleSet"
              type="text"
              placeholder="Enter the Cycle Set"
              value={inputs.cycleSet}
              onChange={(e) => handleChange("cycleSet", e.target.value)}
              aria-label="Cycle Set"
            />

            <label htmlFor="cycle">Cycle:</label>

            <input
              className="input join-item"
              id="cycle"
              type="text"
              placeholder="Enter the Cycle"
              value={inputs.cycle}
              onChange={(e) => handleChange("cycle", e.target.value)}
              aria-label="Cycle"
            />

            <label htmlFor="teamNumber">Team Number:</label>

            <input
              className="input join-item"
              id="teamNumber"
              type="text"
              placeholder="Enter the Team number"
              value={inputs.teamNumber}
              onChange={(e) => handleChange("teamNumber", e.target.value)}
              aria-label="Team Number"
            />

            <label htmlFor="srNumber">SR Number:</label>

            <input
              className="input join-item"
              id="srNumber"
              type="text"
              placeholder="Enter the SR number"
              value={inputs.srNumber}
              onChange={(e) => handleChange("srNumber", e.target.value)}
              aria-label="SR Number"
            />

            <label htmlFor="srNumber">RITS:</label>

            <input
              className="input join-item"
              id="rits"
              type="text"
              placeholder="Enter the RITS number"
              value={inputs.rits}
              onChange={(e) => handleChange("rits", e.target.value)}
              aria-label="rits"
            />
          </fieldset>
        </div>
        {/* Display Values */}

        <div className="row-span-6">
          <p>
            <strong>Cycle Set:</strong> {displayedValues.cycleSet}
            <strong>Cycle:</strong> {displayedValues.cycle}
            <strong>Team Number:</strong> {displayedValues.teamNumber}
            <strong>SR Number:</strong> {displayedValues.srNumber}
            <strong>RITS:</strong> {displayedValues.rits}
          </p>
        </div>
        {/* Third Div  */}
        <div className="row-span-full"></div>
      </div>
    </div>
  );
}

export default App;
