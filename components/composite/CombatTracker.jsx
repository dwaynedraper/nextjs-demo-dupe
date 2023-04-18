import React, { useState, useEffect } from "react";

const CombatTracker = ({ players, monsters }) => {
  const [combatants, setCombatants] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  // Initialize combatants array on component mount
  useEffect(() => {
    const initCombatants = [...players, ...monsters].map((combatant) => {
      return {
        ...combatant,
        initiative: null,
      };
    });
    setCombatants(initCombatants);
  }, [players, monsters]);

  // Handle input change for initiative rolls
  const handleInitiativeChange = (event, combatantId) => {
    const updatedCombatants = combatants.map((combatant) => {
      if (combatant.id === combatantId) {
        return {
          ...combatant,
          initiative: parseInt(event.target.value) + combatant.initBonus,
        };
      }
      return combatant;
    });
    setCombatants(updatedCombatants);
  };

  // Sort combatants by initiative
  const sortCombatantsByInitiative = () => {
    // check to make sure each combatant has an initiative roll
    const allCombatantsHaveInitiative = combatants.every(
      (combatant) => combatant.initiative !== null
    );
    if (!allCombatantsHaveInitiative) {
      alert("Please enter initiative rolls for all combatants.");
      return;
    }
    const sortedCombatants = [...combatants].sort(
      (a, b) => b.initiative - a.initiative
    );
    setCombatants(sortedCombatants);
  };

  // Declare current attacker and next combatant
  const currentAttacker = combatants[0];
  const nextCombatant = combatants[1];

  return (
    <div>
      {/* Sidebar with combatants */}
      <div>
        <h2>Combatants</h2>
        <ul>
          {combatants.map((combatant) => (
            <li key={combatant.id}>
              {combatant.name}
              {!isSorted && (
                <input
                  type='number'
                  placeholder='Initiative roll'
                  value={combatant.initiative || ""}
                  onChange={(event) =>
                    handleInitiativeChange(event, combatant.id)
                  }
                />
              )}
            </li>
          ))}
        </ul>
        <button onClick={sortCombatantsByInitiative}>Sort by Initiative</button>
      </div>
      {/* Main display area */}
      <div>
        <h2>Current Attacker:</h2>
        <p>{currentAttacker ? currentAttacker.name : "None"}</p>
        <h2>Next Up:</h2>
        <p>{nextCombatant ? nextCombatant.name : "None"}</p>
      </div>
    </div>
  );
};

export default CombatTracker;
